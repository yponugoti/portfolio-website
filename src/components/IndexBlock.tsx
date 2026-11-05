import type { ReactNode } from "react"
import Marker from "./Marker"

interface Props {
  title: string
  n: number
  children: ReactNode
}

/** A titled list with a "[n]" marker on the right, e.g. Contact or Experience. */
const IndexBlock = ({ title, n, children }: Props) => (
  <section className="flex-1 min-w-0 flex flex-col gap-1.5">
    <div className="flex items-baseline justify-between">
      <h2>{title}</h2>
      <Marker n={n} />
    </div>
    <ul className="flex flex-col leading-[1.15]">{children}</ul>
  </section>
)

export default IndexBlock
