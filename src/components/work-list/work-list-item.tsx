import { Link } from "react-router-dom"
import { PATH } from "../../constants/constants"
import type { WorkInterface } from "../../hooks/useWork"
import Blurhash from "../blurhash/blurhash"

type WorkListItemProps = {
  work: WorkInterface
}

function WorkListItem({ work }: WorkListItemProps) {
  const { slug, title, year, width, height, filename, thumbBlurhash, thumbWidth, thumbHeight } =
    work

  return (
    <article className="flex-auto group">
      <Link to={slug} className="relative flex flex-col">
        <Blurhash
          title={title}
          url={`${PATH.WORKS.SMALL}/${filename}`}
          hash={thumbBlurhash}
          width={thumbWidth}
          height={thumbHeight}
        />
        <div className="absolute flex flex-col p-2 text-center text-gray-700 transition-opacity duration-500 ease-in-out opacity-0 bottom-1 left-1 right-1 bg-gray-50 bg-opacity-90 group-hover:opacity-100">
          <h2>{title}</h2>
          <p>
            <time dateTime={year.toString()}>{year}</time> &middot; {height}
            <small> x </small>
            {width}
          </p>
        </div>
      </Link>
    </article>
  )
}

export default WorkListItem
