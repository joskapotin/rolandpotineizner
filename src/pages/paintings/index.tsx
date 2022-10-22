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
    <div className="grid w-full gap-4 grid-cols-autofill col-span-full">
      {paintingsSorted.map(painting => (
        <article
          key={painting.id}
          className="overflow-hidden transition duration-300 ease-in-out scale-100 border-4 border-gray-100 rounded-full shadow-2xl opacity-70 aspect-square hover:opacity-100 hover:scale-105"
        >
          <Link to={painting.slug}>
            <Blurhash
              title={painting.title}
              url={`${PATH.PAINTINGS.SQUARE}/${painting.filename}`}
              hash={painting.thumbBlurhash}
              width={painting.thumbWidth}
              height={painting.thumbHeight}
            />
          </Link>
        </article>
      ))}
    </div>
  )
}

export default Paintings
