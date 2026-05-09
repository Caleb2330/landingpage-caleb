import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Analytics } from '@vercel/analytics/react'
import {
	IconArrowRight,
	IconChevronDown,
	IconClock,
	IconSeed,
	IconWhisper,
	IconBriefcase,
	IconLightbulb,
	IconHourglass,
	IconHeart,
	IconCheck,
	IconWhatsApp,
	IconTelegram,
} from './icons'
import {
	FadeUp,
	StaggerGroup,
	StaggerItem,
	TiltCard,
	MagneticButton,
	CountUp,
	ScrollProgressBar,
	WordReveal,
	SpotlightSection,
} from './motion-primitives'

// ─── CTA targets ─────────────────────────────────────────────
const WHATSAPP_HREF = 'https://chat.whatsapp.com/Dg4q3GDE4GS3zXC9J03CVJ'
const TELEGRAM_HREF = 'https://t.me/+rPyUCWxdFBxmNDM0'

// ─── Content ─────────────────────────────────────────────────

const WHY_NOW = [
	{
		title: 'It’s free. That’s why.',
		body: 'No registration fee. No subscription. No "deposit to unlock anything". You walk in for free and you stay for free, period.',
		Icon: IconHeart,
		span: 'lg:row-span-2 lg:col-span-1', // tall card on the left
	},
	{
		title: 'Real conversations',
		body: 'Real people, real questions, real context. From members who actually use what they discuss — not surface-level chatter or imported theory.',
		Icon: IconSeed,
		span: '',
	},
	{
		title: 'No noise. No flexing.',
		body: 'What’s shared in the group stays in the group. No screenshots leaving, no IG posts, no flexing. Just conversation that moves you forward.',
		Icon: IconWhisper,
		span: '',
	},
] as const

const WHO_ITS_FOR = [
	{
		title: 'You like quiet wins',
		body: 'You’ve noticed loud "opportunities" usually disappoint. Quieter ones tend to last longer.',
		Icon: IconHourglass,
	},
	{
		title: 'You don’t do drama',
		body: 'You’d rather have something quiet running in the background than chase ten loud things.',
		Icon: IconClock,
	},
	{
		title: 'You verify everything',
		body: 'Before you commit to anything, you want to read, ask, and see for yourself. We respect that.',
		Icon: IconLightbulb,
	},
	{
		title: 'You think long-term',
		body: 'You’d rather get one thing right than ten things half-right. Slow is fine.',
		Icon: IconBriefcase,
	},
] as const

const FAQ = [
	{
		q: 'Wait, is this REALLY free?',
		a: 'Yes. You won’t pay anything to join the WhatsApp or Telegram group. No hidden charges, no "starter pack", no fee to unlock anything. The group is genuinely free.',
	},
	{
		q: 'Is this an investment scheme of any kind?',
		a: 'No. There is no investment vehicle, no compounding ladder, no required referrals, no "deposit to unlock". It’s a peer group where members share information. No funds flow through us at any point.',
	},
	{
		q: 'So what’s the catch? How does this stay sustainable?',
		a: 'There’s no catch on your side. Some members eventually use paid tools or services if they choose to. Many never spend anything and still benefit from being in the room. Either way, joining costs you nothing.',
	},
	{
		q: 'I don’t want to talk in groups. Can I just read?',
		a: 'Yes. Many of the people getting the most out of the room never type at all. They just read, learn, and decide quietly.',
	},
	{
		q: 'Why are you sharing this for free?',
		a: 'Because this is an online opportunity the helped me overcome poverty in the past few months, so i decided to share the good news and i am very sure that this would make a lot of people milloniaires.',
	},
] as const

// ─── Mesh-gradient hero background ───────────────────────────

function MeshGradientBackground() {
	return (
		<div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
			<div
				className="blob blob-1"
				style={{
					top: '-15%',
					left: '-5%',
					width: '500px',
					height: '500px',
					background: 'radial-gradient(circle, rgba(167,139,250,0.50) 0%, transparent 70%)',
				}}
			/>
			<div
				className="blob blob-2"
				style={{
					top: '5%',
					right: '-10%',
					width: '450px',
					height: '450px',
					background: 'radial-gradient(circle, rgba(34,211,238,0.36) 0%, transparent 70%)',
				}}
			/>
			<div
				className="blob blob-3"
				style={{
					top: '40%',
					left: '40%',
					width: '380px',
					height: '380px',
					background: 'radial-gradient(circle, rgba(244,114,182,0.28) 0%, transparent 70%)',
				}}
			/>
		</div>
	)
}

// ─── Reusable CTA buttons ────────────────────────────────────

function WhatsAppButton({ size = 'md' }: { size?: 'md' | 'lg' }) {
	const big = size === 'lg'
	return (
		<MagneticButton>
			<a
				href={WHATSAPP_HREF}
				target="_blank"
				rel="noopener noreferrer"
				className={`cta-pulse-wa inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white font-bold transition ${
					big ? 'h-13 sm:h-14 px-7 sm:px-9 text-base' : 'h-12 sm:h-14 px-5 sm:px-7 text-[15px] sm:text-base'
				}`}
			>
				<IconWhatsApp className={big ? 'size-5' : 'size-4 sm:size-5'} />
				Join WhatsApp Group
				<IconArrowRight className="size-4" />
			</a>
		</MagneticButton>
	)
}

function TelegramButton({ size = 'md' }: { size?: 'md' | 'lg' }) {
	const big = size === 'lg'
	return (
		<MagneticButton>
			<a
				href={TELEGRAM_HREF}
				target="_blank"
				rel="noopener noreferrer"
				className={`cta-pulse-tg inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#2AABEE] to-[#229ED9] text-white font-bold transition ${
					big ? 'h-13 sm:h-14 px-7 sm:px-9 text-base' : 'h-12 sm:h-14 px-5 sm:px-7 text-[15px] sm:text-base'
				}`}
			>
				<IconTelegram className={big ? 'size-5' : 'size-4 sm:size-5'} />
				Join Telegram Group
				<IconArrowRight className="size-4" />
			</a>
		</MagneticButton>
	)
}

// ─── Page ────────────────────────────────────────────────────

export function App() {
	const [openFaq, setOpenFaq] = useState<number>(0)

	return (
		<div className="text-[var(--color-fg)]">
			<ScrollProgressBar />

			{/* ─── Header (anonymous mark) ─── */}
			<header className="sticky top-0 z-30 border-b border-[var(--color-border)] bg-[#0a0d0c]/80 backdrop-blur">
				<div className="mx-auto max-w-[1180px] px-5 sm:px-8 h-14 flex items-center">
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
						className="grid size-7 place-items-center rounded-lg bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-brand-strong)] shadow-[0_0_12px_var(--color-brand-glow)]"
					>
						<span className="size-2.5 rounded-full bg-[#052e1f]" />
					</motion.div>
				</div>
			</header>

			{/* ─── Hero ─── */}
			<section className="relative overflow-hidden">
				<MeshGradientBackground />
				<div aria-hidden className="hero-glow pointer-events-none absolute inset-x-0 top-0 h-[600px]" />

				<div className="relative mx-auto max-w-[1180px] px-5 sm:px-8 pt-8 sm:pt-24 pb-12 sm:pb-24 text-center flex flex-col items-center">
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
						className="eyebrow-bob inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-panel)] px-3 py-1.5 text-[11px] font-medium text-[var(--color-fg-mute)] mb-4 sm:mb-6"
					>
						<span className="size-1.5 rounded-full bg-[var(--color-brand)] shadow-[0_0_8px_var(--color-brand-glow)] animate-brand-pulse" />
						Free to join · Active community
					</motion.div>

					<h1 className="text-[clamp(28px,6vw,68px)] font-extrabold tracking-[-0.025em] leading-[1.15] pb-1 max-w-4xl">
						<WordReveal
							text="Less hustle."
							delayBase={0.15}
							wordClassName="leading-[1.2]"
						/>
						<br />
						<WordReveal
							text="More signal."
							delayBase={0.45}
							wordClassName="text-gradient-brand leading-[1.2] pb-1"
						/>
					</h1>

					<FadeUp delay={1} className="w-full flex justify-center">
						<p className="mt-3 sm:mt-7 text-[14px] sm:text-lg lg:text-xl text-[var(--color-fg-mute)] max-w-2xl">
							Make $1000 - $5000 every month by using this an AI automated bot
							No fees, no pressure, no nonsense. Walk in, see for yourself.
						</p>
					</FadeUp>

					<FadeUp delay={1.15} className="w-full flex justify-center">
						<div className="mt-5 sm:mt-10 flex flex-col sm:flex-row gap-3 justify-center">
							<WhatsAppButton />
							<TelegramButton />
						</div>
					</FadeUp>

					<FadeUp delay={1.3} className="w-full flex justify-center">
						<div className="mt-6 sm:mt-10 flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-7 gap-y-2.5 text-[11px] sm:text-[13px] text-[var(--color-fg-mute)]">
							<span className="inline-flex items-center gap-1.5">
								<IconCheck className="size-3.5 sm:size-4 text-[var(--color-brand)]" />
								100% free
							</span>
							<span className="inline-flex items-center gap-1.5">
								<IconHeart className="size-3.5 sm:size-4 text-[var(--color-brand)]" />
								Active community
							</span>
							<span className="inline-flex items-center gap-1.5">
								<IconWhisper className="size-3.5 sm:size-4 text-[var(--color-brand)]" />
								No pitching, no pressure
							</span>
						</div>
					</FadeUp>
				</div>
			</section>

			{/* ─── Why now (bento grid) ─── */}
			<section className="border-t border-[var(--color-border)] py-16 sm:py-24">
				<div className="mx-auto max-w-[1180px] px-5 sm:px-8">
					<FadeUp>
						<div className="text-center mb-12 sm:mb-16">
							<p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[var(--color-brand)] mb-3">
								Why this is different
							</p>
							<h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold tracking-tight">
								No fee. No drama. Just smart people.
							</h2>
						</div>
					</FadeUp>

					<div className="grid gap-5 lg:grid-cols-2 lg:grid-rows-2">
						{WHY_NOW.map(({ title, body, Icon, span }, i) => (
							<FadeUp key={title} delay={i * 0.1} className={span}>
								<TiltCard className="glass-card rounded-2xl p-6 sm:p-7 h-full">
									<div className="grid size-11 place-items-center rounded-xl bg-[var(--color-brand-soft)] text-[var(--color-brand)] mb-5">
										<Icon className="size-6" />
									</div>
									<h3 className="text-lg sm:text-xl font-bold tracking-tight mb-2">
										{title}
									</h3>
									<p className="text-[14px] sm:text-[15px] text-[var(--color-fg-mute)] leading-relaxed">
										{body}
									</p>
								</TiltCard>
							</FadeUp>
						))}
					</div>
				</div>
			</section>

			{/* ─── Who it's for ─── */}
			<section className="border-t border-[var(--color-border)] py-16 sm:py-24 bg-gradient-to-b from-[#0a0d0c] to-[rgba(16,185,129,0.04)]">
				<div className="mx-auto max-w-[1180px] px-5 sm:px-8">
					<FadeUp>
						<div className="text-center mb-12 sm:mb-16">
							<p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[var(--color-brand)] mb-3">
								If this is you
							</p>
							<h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold tracking-tight leading-tight">
								If this sounds like you.
							</h2>
						</div>
					</FadeUp>

					<StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{WHO_ITS_FOR.map(({ title, body, Icon }) => (
							<StaggerItem key={title}>
								<motion.div
									whileHover={{ y: -4 }}
									transition={{ type: 'spring', stiffness: 300, damping: 20 }}
									className="glass-card rounded-2xl p-5 sm:p-6 h-full"
								>
									<motion.div
										whileHover={{ scale: 1.1, rotate: 5 }}
										transition={{ type: 'spring', stiffness: 300, damping: 15 }}
										className="grid size-10 place-items-center rounded-lg bg-[var(--color-brand-soft)] text-[var(--color-brand)] mb-4"
									>
										<Icon className="size-5" />
									</motion.div>
									<h3 className="text-[15px] font-bold tracking-tight mb-1.5">{title}</h3>
									<p className="text-[13px] text-[var(--color-fg-mute)]">{body}</p>
								</motion.div>
							</StaggerItem>
						))}
					</StaggerGroup>
				</div>
			</section>

			{/* ─── Trust band with count-up + aurora ─── */}
			<section className="border-t border-[var(--color-border)] py-14 sm:py-20">
				<div className="mx-auto max-w-[1180px] px-5 sm:px-8">
					<FadeUp>
						<div className="aurora-bg rounded-2xl border border-[var(--color-border-strong)] p-8 sm:p-12 relative overflow-hidden">
							<div className="grid gap-8 sm:grid-cols-3 text-center sm:text-left">
								<div>
									<IconCheck className="size-7 text-[var(--color-brand)] mx-auto sm:mx-0 mb-3" />
									<div className="text-2xl sm:text-3xl font-extrabold tracking-tight tabular-nums">
										<CountUp prefix="$" targetValue={0} /> <span className="text-base font-semibold text-[var(--color-fg-mute)]">to enter</span>
									</div>
									<p className="text-[13px] text-[var(--color-fg-mute)] mt-1">
										No registration fee, no "starter pack", no hidden charges. Genuinely free.
									</p>
								</div>
								<div>
									<IconHeart className="size-7 text-[var(--color-brand)] mx-auto sm:mx-0 mb-3" />
									<div className="text-2xl sm:text-3xl font-extrabold tracking-tight tabular-nums">
										<CountUp targetValue={500} suffix="+" /> <span className="text-base font-semibold text-[var(--color-fg-mute)]">members inside</span>
									</div>
									<p className="text-[13px] text-[var(--color-fg-mute)] mt-1">
										Real people, real participation. Not bots, not subscribers, not lurkers-only.
									</p>
								</div>
								<div>
									<IconWhisper className="size-7 text-[var(--color-brand)] mx-auto sm:mx-0 mb-3" />
									<div className="text-2xl sm:text-3xl font-extrabold tracking-tight tabular-nums">
										<CountUp targetValue={0} /> <span className="text-base font-semibold text-[var(--color-fg-mute)]">sales pitches</span>
									</div>
									<p className="text-[13px] text-[var(--color-fg-mute)] mt-1">
										No "double your money in 7 days". No recruitment. Just real conversation.
									</p>
								</div>
							</div>
						</div>
					</FadeUp>
				</div>
			</section>

			{/* ─── FAQ ─── */}
			<section className="border-t border-[var(--color-border)] py-16 sm:py-24">
				<div className="mx-auto max-w-3xl px-5 sm:px-8">
					<FadeUp>
						<div className="text-center mb-12">
							<p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[var(--color-brand)] mb-3">
								Wahala-free answers
							</p>
							<h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold tracking-tight">
								The real questions everyone asks first.
							</h2>
						</div>
					</FadeUp>

					<StaggerGroup className="space-y-3">
						{FAQ.map((item, i) => {
							const open = openFaq === i
							return (
								<StaggerItem key={i}>
									<div
										className={`rounded-xl border bg-[var(--color-panel)] overflow-hidden ${
											open
												? 'border-pulse'
												: 'border-[var(--color-border)]'
										}`}
									>
										<button
											type="button"
											onClick={() => setOpenFaq(open ? -1 : i)}
											className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left hover:bg-white/[0.025] transition"
										>
											<span className="text-[15px] sm:text-base font-semibold">{item.q}</span>
											<motion.span
												animate={{ rotate: open ? 180 : 0 }}
												transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
												className="text-[var(--color-fg-mute)] shrink-0"
											>
												<IconChevronDown className="size-4" />
											</motion.span>
										</button>
										<AnimatePresence initial={false}>
											{open && (
												<motion.div
													key="content"
													initial={{ height: 0, opacity: 0 }}
													animate={{ height: 'auto', opacity: 1 }}
													exit={{ height: 0, opacity: 0 }}
													transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
													className="overflow-hidden"
												>
													<div className="px-5 sm:px-6 pb-5 text-[14px] text-[var(--color-fg-mute)] leading-relaxed">
														{item.a}
													</div>
												</motion.div>
											)}
										</AnimatePresence>
									</div>
								</StaggerItem>
							)
						})}
					</StaggerGroup>
				</div>
			</section>

			{/* ─── Final CTA with cursor spotlight + animated gradient ─── */}
			<SpotlightSection className="relative overflow-hidden border-t border-[var(--color-border)] py-16 sm:py-24">
				<div aria-hidden className="cta-glow pointer-events-none absolute inset-0 opacity-50" />
				<div className="relative mx-auto max-w-3xl px-5 sm:px-8 text-center">
					<FadeUp>
						<h2 className="text-[clamp(32px,4.5vw,48px)] font-extrabold tracking-[-0.025em] leading-tight">
							Free to join.
							<br />
							Free to <span className="text-gradient-animated">leave anytime</span>.
						</h2>
					</FadeUp>
					<FadeUp delay={0.1}>
						<p className="mt-5 text-[15px] sm:text-lg text-[var(--color-fg-mute)] max-w-xl mx-auto">
							Same people in both groups. Same conversations. Pick whichever app
							you already use — WhatsApp or Telegram, your choice.
						</p>
					</FadeUp>
					<FadeUp delay={0.2}>
						<div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ type: 'spring', stiffness: 250, damping: 18, delay: 0.3 }}
							>
								<WhatsAppButton size="lg" />
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ type: 'spring', stiffness: 250, damping: 18, delay: 0.4 }}
							>
								<TelegramButton size="lg" />
							</motion.div>
						</div>
					</FadeUp>
					<FadeUp delay={0.4}>
						<p className="mt-6 text-[11px] text-[var(--color-fg-soft)] max-w-md mx-auto">
							House rules: respect the room, no pitching, no screenshots out of
							context. That’s it. No fees, no obligations, no pressure.
						</p>
					</FadeUp>
				</div>
			</SpotlightSection>

			{/* ─── Footer ─── */}
			<footer className="border-t border-[var(--color-border)] py-8">
				<div className="mx-auto max-w-[1180px] px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
					<div className="grid size-7 place-items-center rounded-lg bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-brand-strong)]">
						<span className="size-2.5 rounded-full bg-[#052e1f]" />
					</div>
					<div className="text-[11px] text-[var(--color-fg-soft)]">
						© Independent community · Not financial advice · Your results won’t match anyone else’s
					</div>
				</div>
			</footer>
			<Analytics />
		</div>
	)
}
