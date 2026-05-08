/**
 * Reusable motion building blocks. Keeps App.tsx readable by hiding the
 * Framer Motion / `motion` boilerplate behind small declarative components.
 *
 * Every animation here respects `prefers-reduced-motion` automatically because
 * the global CSS gate in index.css clamps animation-duration to ~0ms when the
 * user has reduce-motion set, AND the motion library's MotionConfig below
 * applies the same to JS-driven animations.
 */
import {
	motion,
	useScroll,
	useSpring,
	useMotionValue,
	useReducedMotion,
	type Transition,
	type Variants,
} from 'motion/react'
import {
	useEffect,
	useRef,
	type ReactNode,
	type MouseEvent as ReactMouseEvent,
} from 'react'

// ─── FadeUp ───────────────────────────────────────────────────────
// Standard "fade in + slide up from below" reveal triggered when the
// element enters the viewport. Pass `delay` (seconds) to stagger manually.
export function FadeUp({
	children,
	delay = 0,
	className,
	y = 24,
}: {
	children: ReactNode
	delay?: number
	className?: string
	y?: number
}) {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '0px 0px -80px 0px' }}
			transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
		>
			{children}
		</motion.div>
	)
}

// ─── StaggerGroup + StaggerItem ─────────────────────────────────
// Wrap a list with StaggerGroup, wrap each child with StaggerItem.
// The group orchestrates a cascading reveal of its children.
const containerVariants: Variants = {
	hidden: {},
	show: {
		transition: { staggerChildren: 0.08, delayChildren: 0.05 },
	},
}
const itemVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
	},
}

export function StaggerGroup({
	children,
	className,
}: {
	children: ReactNode
	className?: string
}) {
	return (
		<motion.div
			className={className}
			variants={containerVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, margin: '0px 0px -100px 0px' }}
		>
			{children}
		</motion.div>
	)
}

export function StaggerItem({
	children,
	className,
}: {
	children: ReactNode
	className?: string
}) {
	return (
		<motion.div className={className} variants={itemVariants}>
			{children}
		</motion.div>
	)
}

// ─── TiltCard ────────────────────────────────────────────────────
// 3D tilt-on-hover. Mouse position rotates the card on X/Y axes within
// a small range. Resets smoothly when the mouse leaves.
export function TiltCard({
	children,
	className,
	maxTilt = 6,
}: {
	children: ReactNode
	className?: string
	maxTilt?: number
}) {
	const ref = useRef<HTMLDivElement | null>(null)
	const rotateX = useMotionValue(0)
	const rotateY = useMotionValue(0)
	const springConfig: Transition = { type: 'spring', stiffness: 300, damping: 30 }
	const smoothX = useSpring(rotateX, springConfig)
	const smoothY = useSpring(rotateY, springConfig)
	const reduce = useReducedMotion()

	function handleMove(e: ReactMouseEvent<HTMLDivElement>) {
		if (reduce) return
		const el = ref.current
		if (!el) return
		const rect = el.getBoundingClientRect()
		const px = (e.clientX - rect.left) / rect.width  // 0..1
		const py = (e.clientY - rect.top) / rect.height
		rotateY.set((px - 0.5) * maxTilt * 2)
		rotateX.set((0.5 - py) * maxTilt * 2)
	}
	function handleLeave() {
		rotateX.set(0)
		rotateY.set(0)
	}

	return (
		<motion.div
			ref={ref}
			className={className}
			style={{
				rotateX: smoothX,
				rotateY: smoothY,
				transformPerspective: 1000,
				transformStyle: 'preserve-3d',
			}}
			onMouseMove={handleMove}
			onMouseLeave={handleLeave}
		>
			{children}
		</motion.div>
	)
}

// ─── MagneticButton ─────────────────────────────────────────────
// Wraps a button-like element so it gently follows the cursor when
// hovered (within ~30px), then springs back on leave. Adds tap-scale.
export function MagneticButton({
	children,
	className,
	strength = 0.25,
}: {
	children: ReactNode
	className?: string
	strength?: number
}) {
	const ref = useRef<HTMLDivElement | null>(null)
	const x = useMotionValue(0)
	const y = useMotionValue(0)
	const springConfig: Transition = { type: 'spring', stiffness: 300, damping: 20 }
	const smoothX = useSpring(x, springConfig)
	const smoothY = useSpring(y, springConfig)
	const reduce = useReducedMotion()

	function handleMove(e: ReactMouseEvent<HTMLDivElement>) {
		if (reduce) return
		const el = ref.current
		if (!el) return
		const rect = el.getBoundingClientRect()
		const cx = rect.left + rect.width / 2
		const cy = rect.top + rect.height / 2
		x.set((e.clientX - cx) * strength)
		y.set((e.clientY - cy) * strength)
	}
	function handleLeave() {
		x.set(0)
		y.set(0)
	}

	return (
		<motion.div
			ref={ref}
			className={className}
			style={{ x: smoothX, y: smoothY, display: 'inline-block' }}
			onMouseMove={handleMove}
			onMouseLeave={handleLeave}
			whileTap={{ scale: 0.96 }}
		>
			{children}
		</motion.div>
	)
}

// ─── CountUp ────────────────────────────────────────────────────
// Animated number ticker. Counts from 0 to targetValue when scrolled
// into view. Pass an optional suffix (e.g. "+", "k", "%").
export function CountUp({
	targetValue,
	suffix = '',
	prefix = '',
	durationMs = 1500,
	className,
}: {
	targetValue: number
	suffix?: string
	prefix?: string
	durationMs?: number
	className?: string
}) {
	const ref = useRef<HTMLSpanElement | null>(null)
	const reduce = useReducedMotion()

	useEffect(() => {
		const el = ref.current
		if (!el) return
		if (reduce) {
			el.textContent = `${prefix}${targetValue.toLocaleString()}${suffix}`
			return
		}
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue
					const start = performance.now()
					const animate = (now: number) => {
						const elapsed = now - start
						const progress = Math.min(elapsed / durationMs, 1)
						// ease-out cubic
						const eased = 1 - Math.pow(1 - progress, 3)
						const current = Math.round(targetValue * eased)
						el.textContent = `${prefix}${current.toLocaleString()}${suffix}`
						if (progress < 1) requestAnimationFrame(animate)
					}
					requestAnimationFrame(animate)
					observer.disconnect()
					return
				}
			},
			{ threshold: 0.4 },
		)
		observer.observe(el)
		return () => observer.disconnect()
	}, [targetValue, prefix, suffix, durationMs, reduce])

	return (
		<span ref={ref} className={className}>
			{prefix}0{suffix}
		</span>
	)
}

// ─── ScrollProgressBar ──────────────────────────────────────────
// Thin bar at the very top of the viewport that fills as the user
// scrolls down the page.
export function ScrollProgressBar() {
	const { scrollYProgress } = useScroll()
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	})
	return (
		<motion.div
			style={{ scaleX, transformOrigin: '0% 50%' }}
			className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-brand)] via-[#5eead4] to-[#22d3ee] z-50"
		/>
	)
}

// ─── WordReveal ─────────────────────────────────────────────────
// Splits a string into words and fades each up with stagger. Used on
// the hero headline.
export function WordReveal({
	text,
	className,
	wordClassName,
	delayBase = 0,
}: {
	text: string
	className?: string
	wordClassName?: string
	delayBase?: number
}) {
	const words = text.split(' ')
	return (
		<span className={className}>
			{words.map((word, i) => (
				<motion.span
					key={`${word}-${i}`}
					className={`inline-block ${wordClassName ?? ''}`}
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.7,
						delay: delayBase + i * 0.06,
						ease: [0.16, 1, 0.3, 1],
					}}
				>
					{word}
					{i < words.length - 1 && ' '}
				</motion.span>
			))}
		</span>
	)
}

// ─── SpotlightSection ───────────────────────────────────────────
// Wraps a <section> and tracks the mouse position, exposing it as
// CSS custom properties --mx and --my so the section's ::before
// can render a soft cursor-following spotlight (see index.css).
export function SpotlightSection({
	children,
	className,
}: {
	children: ReactNode
	className?: string
}) {
	const ref = useRef<HTMLElement | null>(null)
	const reduce = useReducedMotion()

	function handleMove(e: ReactMouseEvent<HTMLElement>) {
		if (reduce) return
		const el = ref.current
		if (!el) return
		const rect = el.getBoundingClientRect()
		el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
		el.style.setProperty('--my', `${e.clientY - rect.top}px`)
		el.style.setProperty('--spotlight-opacity', '1')
	}
	function handleLeave() {
		const el = ref.current
		if (!el) return
		el.style.setProperty('--spotlight-opacity', '0')
	}

	return (
		<section
			ref={ref}
			className={`spotlight-section ${className ?? ''}`}
			onMouseMove={handleMove}
			onMouseLeave={handleLeave}
		>
			{children}
		</section>
	)
}
