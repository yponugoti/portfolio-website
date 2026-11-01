import type { Experience } from "@/types"
import TechList from "./TechList"

const ExperienceItem = ({ experience }: { experience: Experience }) => {
  const { role, organization, location, start, end, highlights, tech } =
    experience

  return (
    <article className="grid md:grid-cols-[9rem_1fr] gap-2 md:gap-6 font-poppins">
      <p className="text-sm text-neutral-500 pt-1">
        {start} — {end}
      </p>
      <div className="flex flex-col gap-3">
        <div>
          <h3 className="text-lg font-semibold text-neutral-900">{role}</h3>
          <p className="text-neutral-600">
            {organization}
            {location && <span className="text-neutral-400"> · {location}</span>}
          </p>
        </div>
        <ul className="list-disc ml-5 flex flex-col gap-1.5 text-neutral-700">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        {tech && tech.length > 0 && <TechList items={tech} />}
      </div>
    </article>
  )
}

export default ExperienceItem
