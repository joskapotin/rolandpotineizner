import type { ImageInterface } from "../../services/api"
import { PATH } from "../../constants/constants"

type Props = {
  work: ImageInterface
}

function Item({ work }: Props) {
  const { title, year, width, height, filename } = work

  return (
    <article>
      <img
        className="object-cover"
        src={`${PATH.WORKS.SMALL}/${filename}`}
        alt={title}
        width={200}
        height={200}
        loading="lazy"
      />
      <h2>Titre: {title}</h2>
      <time dateTime={year}>Année: {year}</time>
      <p>
        Format: {height}/{width} (hauteur/largeur)
      </p>
    </article>
  )
}

export default Item
