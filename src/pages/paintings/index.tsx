import { useMemo } from "react"
import { Link } from "react-router-dom"
import Blurhash from "../../components/blurhash/blurhash"
import { PATH } from "../../constants/constants"
import { sortByOrder } from "../../helpers/sort"
import usePaintings from "../../hooks/usePaintings"

function Paintings() {
  const { paintings } = usePaintings()

  const paintingsSorted = useMemo(() => sortByOrder(paintings), [paintings])

  return (
    <div className="grid grid-cols-2 gap-2 w-full md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 col-span-full">
      {paintingsSorted.map(painting => (
        <article key={painting.id} className="flex-auto group">
          <Link to={painting.slug} className="relative flex flex-col">
            <Blurhash
              title={painting.title}
              url={`${PATH.PAINTINGS.SQUARE}/${painting.filename}`}
              hash={painting.thumbBlurhash}
              width={painting.thumbWidth}
              height={painting.thumbHeight}
            />
            <div className="absolute flex flex-col p-2 text-center text-gray-700 transition-opacity duration-500 ease-in-out opacity-0 bottom-1 left-1 right-1 bg-gray-50 bg-opacity-90 group-hover:opacity-100">
              <h2>{painting.title}</h2>
              <p>
                <time dateTime={painting.year.toString()}>{painting.year}</time> &middot;{" "}
                {painting.height}
                <small> x </small>
                {painting.width}
              </p>
            </div>
          </Link>
        </article>
      ))}
    </div>
  )
}

export default Paintings
