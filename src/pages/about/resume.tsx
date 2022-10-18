import { slugify } from "../../helpers/formatters"

type ResumeProps = {
  years: string[]
  events: string[]
}

function Resume({ years, events }: ResumeProps) {
  return (
    <article className="flex">
      <h2 className="px-3 py-1 font-semibold border-t border-gray-500 border-solid">
        {years.map(year => (
          <span key={year} className="block">
            {year}
          </span>
        ))}
      </h2>
      <ul className="flex-grow border-b border-l border-gray-500 border-solid">
        {events.map(event => (
          <li
            className="px-3 py-1"
            key={slugify(event)}
            dangerouslySetInnerHTML={{ __html: event }}
          />
        ))}
      </ul>
    </article>
  )
}
export default Resume
