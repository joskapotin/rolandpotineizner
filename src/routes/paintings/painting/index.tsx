import { Navigate, useParams } from "react-router-dom"
import Blurhash from "../../../components/blurhash/blurhash"
import { PATH, ROUTES } from "../../../constants/constants"
import usePaintings from "../../../hooks/usePaintings"
import PaintingNavItem from "../painting-nav-item"

function Painting() {
  const { slug } = useParams()
  const paintings = usePaintings()

  const currentIndex = paintings.findIndex(painting => painting.slug === slug)
  if (currentIndex === -1) return <Navigate to={ROUTES.NOT_FOUND.URL} replace /> // array.findIndex return -1 if nothing is found

  const currentPainting = paintings[currentIndex]

  const prevPainting =
    currentIndex === 0 ? paintings[paintings.length - 1] : paintings[currentIndex - 1]

  const nextPainting =
    currentIndex === paintings.length - 1 ? paintings[0] : paintings[currentIndex + 1]

  const { title, year, width, height, filename, imageBlurhash, imageWidth, imageHeight } =
    currentPainting

  return (
    <>
      <div className="md:justify-self-end">
        <Blurhash
          title={title}
          url={`${PATH.PAINTINGS.SOURCE}/${filename}`}
          hash={imageBlurhash}
          width={imageWidth}
          height={imageHeight}
        />
      </div>

      <ul className="self-center">
        <li className="mb-2 text-2xl">
          <span className="mb-4 tracking-widest text-amber-900">Titre:</span> {title}
        </li>
        <li>
          <time dateTime={year}>
            <span className="mb-4 tracking-widest text-amber-900">Année:</span> {year}
          </time>
        </li>
        <li>
          <span className="mb-4 tracking-widest text-amber-900">Hauteur:</span> {height} cm
        </li>
        <li>
          <span className="mb-4 tracking-widest text-amber-900">Largeur:</span> {width} cm
        </li>
      </ul>

      <nav className="relative col-span-full flex w-full justify-evenly gap-2">
        <PaintingNavItem
          url={`${ROUTES.PAINTINGS.URL}/${prevPainting.slug}`}
          painting={prevPainting}
          text="Previous"
        />
        <PaintingNavItem
          url={`${ROUTES.PAINTINGS.URL}/${nextPainting.slug}`}
          painting={nextPainting}
          text="Next"
        />
      </nav>
    </>
  )
}

export default Painting
