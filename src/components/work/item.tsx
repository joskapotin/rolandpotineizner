import { Link } from "react-router-dom"
import type { WorkInterface } from "../../services/api"
import { PATH } from "../../constants/constants"

type Props = {
  work: WorkInterface
}

function Item({ work }: Props) {
  const { slug, title, year, width, height, filename } = work

  return (
    <article className="flex-auto">
      <Link to={slug}>
        <img
          className="object-cover object-center"
          src={`${PATH.WORKS.SMALL}/${filename}`}
          alt={title}
          width={200}
          height={200}
          loading="lazy"
        />
        <h2>Titre: {title}</h2>
        <time dateTime={year.toString() ?? undefined}>Année: {year ?? "nc"}</time>
        <p>
          Format: {height ?? "nc"}&#8593; / {width ?? "nc"}&#8594;
        </p>
      </Link>
    </article>
  )
}

export default Item
