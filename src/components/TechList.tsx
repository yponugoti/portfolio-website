const TechList = ({ items }: { items: string[] }) => {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="font-poppins text-xs text-neutral-700 bg-neutral-200/70 px-2.5 py-1 rounded-full"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export default TechList
