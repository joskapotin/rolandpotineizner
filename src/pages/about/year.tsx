import { slugify } from "../../helpers/formatters"

type YearProps = {
  year: string
  events: string[]
}

function Year({ year, events }: YearProps) {
  return (
    <article>
      <h2>{year}</h2>
      <ul>
        {events.map(event => (
          <li key={slugify(event)}>{event}</li>
        ))}
      </ul>
    </article>
  )
}
export default Year
