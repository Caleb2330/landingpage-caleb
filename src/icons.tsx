/**
 * Inlined SVG icons — no icon library dependency. Each is a typed React
 * component that accepts standard SVG props (className, etc.).
 */
import type { SVGProps } from 'react'

const stroke = {
	viewBox: '0 0 24 24',
	fill: 'none',
	stroke: 'currentColor',
	strokeWidth: 2,
	strokeLinecap: 'round',
	strokeLinejoin: 'round',
} as const

export function IconArrowRight(p: SVGProps<SVGSVGElement>) {
	return (
		<svg {...stroke} strokeWidth={2.5} {...p}>
			<line x1="5" y1="12" x2="19" y2="12" />
			<polyline points="12 5 19 12 12 19" />
		</svg>
	)
}

export function IconChevronDown(p: SVGProps<SVGSVGElement>) {
	return (
		<svg {...stroke} strokeWidth={2.5} {...p}>
			<polyline points="6 9 12 15 18 9" />
		</svg>
	)
}

export function IconClock(p: SVGProps<SVGSVGElement>) {
	return (
		<svg {...stroke} {...p}>
			<circle cx="12" cy="12" r="10" />
			<polyline points="12 6 12 12 16 14" />
		</svg>
	)
}

export function IconSeed(p: SVGProps<SVGSVGElement>) {
	return (
		<svg {...stroke} {...p}>
			<path d="M12 2C8 6 8 12 12 16c4-4 4-10 0-14Z" />
			<path d="M12 16v6" />
		</svg>
	)
}

export function IconWhisper(p: SVGProps<SVGSVGElement>) {
	return (
		<svg {...stroke} {...p}>
			<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
		</svg>
	)
}

export function IconBriefcase(p: SVGProps<SVGSVGElement>) {
	return (
		<svg {...stroke} {...p}>
			<rect x="2" y="7" width="20" height="14" rx="2" />
			<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
		</svg>
	)
}

export function IconLightbulb(p: SVGProps<SVGSVGElement>) {
	return (
		<svg {...stroke} {...p}>
			<path d="M9 18h6" />
			<path d="M10 22h4" />
			<path d="M12 2a7 7 0 0 0-4 12.7c.5.4 1 1.1 1 1.8v.5h6v-.5c0-.7.5-1.4 1-1.8A7 7 0 0 0 12 2Z" />
		</svg>
	)
}

export function IconHourglass(p: SVGProps<SVGSVGElement>) {
	return (
		<svg {...stroke} {...p}>
			<path d="M5 22h14" />
			<path d="M5 2h14" />
			<path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
			<path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
		</svg>
	)
}

export function IconHeart(p: SVGProps<SVGSVGElement>) {
	return (
		<svg {...stroke} {...p}>
			<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
		</svg>
	)
}

export function IconChat(p: SVGProps<SVGSVGElement>) {
	return (
		<svg {...stroke} {...p}>
			<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
		</svg>
	)
}

export function IconCheck(p: SVGProps<SVGSVGElement>) {
	return (
		<svg {...stroke} strokeWidth={2.5} {...p}>
			<polyline points="20 6 9 17 4 12" />
		</svg>
	)
}

export function IconGift(p: SVGProps<SVGSVGElement>) {
	return (
		<svg {...stroke} {...p}>
			<polyline points="20 12 20 22 4 22 4 12" />
			<rect x="2" y="7" width="20" height="5" />
			<line x1="12" y1="22" x2="12" y2="7" />
			<path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
			<path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
		</svg>
	)
}

/* ── Brand logos ─────────────────────────────── */

export function IconWhatsApp(p: SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" {...p}>
			<path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.514 5.27l.001.001-.999 3.648 3.973-1.018zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.711.306 1.265.489 1.697.626.713.226 1.362.194 1.875.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
		</svg>
	)
}

export function IconTelegram(p: SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" {...p}>
			<path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
		</svg>
	)
}
