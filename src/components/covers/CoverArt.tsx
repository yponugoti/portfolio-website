import type { CSSProperties } from "react"
import type { CoverStyle } from "@/types"

/* Generative cover artwork drawn from a single brand color.
 * Every style is seeded from the project's slug, so two projects
 * that share a style still get slightly different compositions. */

const hash = (value: string) => {
  let h = 2166136261
  for (const char of value) {
    h ^= char.charCodeAt(0)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

/** Small deterministic PRNG (mulberry32) so server and client render identically. */
const seededRandom = (seedText: string) => {
  let seed = hash(seedText)
  return () => {
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const tint = (color: string, percent: number) =>
  `color-mix(in srgb, ${color} ${percent}%, white)`

/** Same lightness and chroma, rotated hue — keeps neighbors harmonious. */
const hueShift = (color: string, degrees: number) =>
  `oklch(from ${color} l c calc(h + ${degrees}))`

const round = (n: number) => Math.round(n * 100) / 100

const fill: CSSProperties = { position: "absolute", inset: 0 }

interface ArtProps {
  color: string
  seed: string
  name: string
}

const Gradient = ({ color }: ArtProps) => (
  <div
    style={{
      ...fill,
      background: `linear-gradient(135deg, ${tint(color, 55)}, ${tint(color, 15)})`,
    }}
  />
)

const meshBackground = (color: string, seed: string) => {
  const random = seededRandom(seed)
  const blobColors = [color, hueShift(color, 45), hueShift(color, -40), tint(color, 70)]
  const blobs = blobColors.map(
    (blob) =>
      `radial-gradient(circle at ${round(random() * 100)}% ${round(random() * 100)}%, ${blob} 0%, transparent ${round(45 + random() * 25)}%)`,
  )
  return `${blobs.join(", ")}, ${tint(color, 25)}`
}

const Mesh = ({ color, seed }: ArtProps) => (
  <div style={{ ...fill, background: meshBackground(color, seed) }} />
)

const Grain = ({ color, seed }: ArtProps) => {
  const id = `grain-${hash(seed)}`
  return (
    <>
      <div style={{ ...fill, background: meshBackground(color, seed) }} />
      <svg
        aria-hidden
        style={{ ...fill, width: "100%", height: "100%", mixBlendMode: "overlay", opacity: 0.55 }}
      >
        <filter id={id}>
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#${id})`} />
      </svg>
    </>
  )
}

const Rings = ({ color, seed }: ArtProps) => {
  const random = seededRandom(seed)
  const cx = round(20 + random() * 120)
  const cy = round(random() * 100)
  const radii = Array.from({ length: 24 }, (_, i) => 6 + i * 7)
  return (
    <svg aria-hidden viewBox="0 0 160 100" preserveAspectRatio="xMidYMid slice" style={{ ...fill, width: "100%", height: "100%", background: tint(color, 10) }}>
      {radii.map((r, i) => (
        <circle
          key={r}
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={0.6}
          opacity={round(0.95 - (i / radii.length) * 0.8)}
        />
      ))}
    </svg>
  )
}

const Dots = ({ color, seed }: ArtProps) => {
  const random = seededRandom(seed)
  const id = `dots-${hash(seed)}`
  const fx = round(random() * 100)
  const fy = round(random() * 100)
  return (
    <svg aria-hidden viewBox="0 0 160 100" preserveAspectRatio="xMidYMid slice" style={{ ...fill, width: "100%", height: "100%", background: tint(color, 8) }}>
      <defs>
        <pattern id={`${id}-p`} width="4" height="4" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.75" fill={color} />
        </pattern>
        <radialGradient id={`${id}-g`} cx={`${fx}%`} cy={`${fy}%`} r="75%">
          <stop offset="0" stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id={`${id}-m`}>
          <rect width="160" height="100" fill={`url(#${id}-g)`} />
        </mask>
      </defs>
      <rect width="160" height="100" fill={`url(#${id}-p)`} mask={`url(#${id}-m)`} />
    </svg>
  )
}

const Waves = ({ color, seed }: ArtProps) => {
  const random = seededRandom(seed)
  const amplitude = 8 + random() * 14
  const phase = random() * 20
  const lines = Array.from({ length: 16 }, (_, i) => {
    const y = -6 + i * 7.5
    const a = amplitude * (0.6 + 0.4 * Math.sin(i / 3 + phase))
    return `M -10 ${round(y)} C 45 ${round(y - a)}, 105 ${round(y + a)}, 170 ${round(y - a / 2)}`
  })
  return (
    <svg aria-hidden viewBox="0 0 160 100" preserveAspectRatio="xMidYMid slice" style={{ ...fill, width: "100%", height: "100%", background: tint(color, 10) }}>
      {lines.map((d, i) => (
        <path
          key={d}
          d={d}
          fill="none"
          stroke={color}
          strokeWidth={0.7}
          opacity={round(0.25 + (i / lines.length) * 0.7)}
        />
      ))}
    </svg>
  )
}

const Letter = ({ color, name }: ArtProps) => (
  <svg aria-hidden viewBox="0 0 160 100" preserveAspectRatio="xMidYMid slice" style={{ ...fill, width: "100%", height: "100%", background: tint(color, 16) }}>
    <text
      x="152"
      y="122"
      textAnchor="end"
      fontSize="150"
      fill={color}
      opacity={0.9}
      style={{ fontFamily: "var(--font-newsreader), serif", fontStyle: "italic" }}
    >
      {name.trim().charAt(0).toUpperCase()}
    </text>
  </svg>
)

const COVER_STYLES = {
  gradient: Gradient,
  mesh: Mesh,
  grain: Grain,
  rings: Rings,
  dots: Dots,
  waves: Waves,
  letter: Letter,
} satisfies Record<CoverStyle, (props: ArtProps) => React.ReactNode>

const CoverArt = ({ style, ...props }: ArtProps & { style: CoverStyle }) => {
  const Art = COVER_STYLES[style] ?? Gradient
  return <Art {...props} />
}

export default CoverArt
