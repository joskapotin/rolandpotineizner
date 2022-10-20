import { useMemo } from "react"
import { ROUTES } from "../../constants/constants"
import { sortByOrder } from "../../helpers/sort"
import usePaintings from "../../hooks/usePaintings"
import PaintingCard from "./painting-card"

function Paintings() {
  const { paintings } = usePaintings()

  const paintingsSorted = useMemo(() => sortByOrder(paintings), [paintings])

  return (
    <>
      <h1>{ROUTES.PAINTINGS.NAME}</h1>
      <div className="container grid grid-cols-2 gap-2 px-2 mx-auto mt-10 sm:px-0 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {paintingsSorted.map(painting => (
          <PaintingCard key={painting.id} painting={painting} />
        ))}
      </div>
    </>
  )
}

export default Paintings
