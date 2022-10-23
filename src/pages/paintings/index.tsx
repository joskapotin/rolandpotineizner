import { useMemo } from "react"
import { sortByOrder } from "../../helpers/sort"
import usePaintings from "../../hooks/usePaintings"
import PaintingNavItem from "./painting-nav-item"

function Paintings() {
  const { paintings } = usePaintings()

  const paintingsSorted = useMemo(() => sortByOrder(paintings), [paintings])

  return (
    <div className="col-span-full grid w-full grid-cols-autofill gap-4">
      {paintingsSorted.map(painting => (
        <PaintingNavItem
          key={painting.id}
          url={painting.slug}
          painting={painting}
          text="Voir le tableau"
        />
      ))}
    </div>
  )
}

export default Paintings
