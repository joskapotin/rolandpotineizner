import type { WorkInterface } from "../../services/api"
import { PATH } from "../../constants/constants"

type Props = {
  work: WorkInterface
}

function Item({ work }: Props) {
  const { title, year, width, height, filename } = work

  return (
    <article className="flex-auto">
      <img
        className="object-cover object-center"
        src={`${PATH.WORKS.SMALL}/${filename}`}
        alt={title}
        width={200}
        height={200}
        loading="lazy"
      />
      <h2>Titre: {title}</h2>
      <time dateTime={year}>Année: {year}</time>
      <p>
        Format: {height}&#8593; / {width}&#8594;
      </p>
    </article>
  )
}

export default Item
