import type { ReactNode } from "react"

interface Props {
  id: string
  title: string
  children: ReactNode
  action?: ReactNode
}

const Section = ({ id, title, children, action }: Props) => {
  return (
    <section id={id} className="scroll-mt-24 flex flex-col gap-8">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="font-cormorantGaramond text-4xl text-neutral-900">
          {title}
        </h2>
        {action}
      </div>
      {children}
    </section>
  )
}

export default Section
