import { useMemo } from "react"
import { useParams } from "react-router-dom"
import Blurhash from "../../../components/blurhash/blurhash"
import { PATH, ROUTES } from "../../../constants/constants"
import usePaintings from "../../../hooks/usePaintings"
import PaintingNavItem from "./painting-nav-item"

function Painting() {
  const { slug } = useParams()
  const { paintings } = usePaintings()

  const { prevPainting, currentPainting, nextPainting } = useMemo(() => {
    const currentIndex = paintings.findIndex(painting => painting.slug === slug)

    return {
      currentPainting: paintings[currentIndex],
      prevPainting:
        currentIndex === 0 ? paintings[paintings.length - 1] : paintings[currentIndex - 1],
      nextPainting:
        currentIndex === paintings.length - 1 ? paintings[0] : paintings[currentIndex + 1],
    }
  }, [slug, paintings])

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

      <nav className="relative flex w-full gap-2 justify-evenly col-span-full">
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
