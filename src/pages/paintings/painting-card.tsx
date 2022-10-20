import { Link } from "react-router-dom"
import Blurhash from "../../components/blurhash/blurhash"
import { PATH } from "../../constants/constants"
import type { PaintingInterface } from "../../hooks/usePainting"

type PaintingCardProps = {
  painting: PaintingInterface
}

function PaintingCard({ painting }: PaintingCardProps) {
  const { slug, title, year, width, height, filename, thumbBlurhash, thumbWidth, thumbHeight } =
    painting

  return (
    <article className="flex-auto group">
      <Link to={slug} className="relative flex flex-col">
        <Blurhash
          title={title}
          url={`${PATH.PAINTINGS.SQUARE}/${filename}`}
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

export default PaintingCard
