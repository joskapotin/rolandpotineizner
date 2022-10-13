import { Link } from "react-router-dom"
import { PATH } from "../../constants/constants"
import type { WorkInterface } from "../../hooks/useWork"

type Props = {
  work: WorkInterface
}

function Item({ work }: Props) {
  const { slug, title, year, width, height, filename } = work

  return (
    <article className="group flex-auto">
      <Link to={slug} className="relative block">
        <img
          className="aspect-square w-full  object-cover object-center"
          src={`${PATH.WORKS.SMALL}/${filename}`}
          alt={title}
          width={400}
          height={400}
          loading="lazy"
        />
        <div className="absolute bottom-1 left-1 right-1 flex flex-col bg-gray-50 bg-opacity-90 p-2 text-center text-gray-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <h2>{title}</h2>
          <p>
            <time dateTime={year.toString()}>{year}</time> &middot; {height}
            <small>x</small>
            {width}
          </p>
        </div>
      </Link>
    </article>
  )
}

export default Item
