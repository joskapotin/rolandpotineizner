import usePaintings from "../../hooks/usePaintings"
import PaintingNavItem from "./painting-nav-item"

function Paintings() {
  const { paintings } = usePaintings()

  return (
    <ul className="col-span-full grid w-full grid-cols-autofill justify-items-center gap-4">
      {paintings.map(painting => (
        <li key={painting.id}>
          <PaintingNavItem url={painting.slug} painting={painting} text="Voir le tableau" />
        </li>
      ))}
    </ul>
  )
}

export default Paintings
