/** The little "[1]" reference marker in monospace. */
const Marker = ({ n }: { n: number }) => (
  <span className="font-mono text-[11px] text-neutral-700 tabular-nums">
    [{n}]
  </span>
)

export default Marker
