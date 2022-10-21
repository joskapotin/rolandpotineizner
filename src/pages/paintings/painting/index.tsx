import { useMemo } from "react"
import { Link, useParams } from "react-router-dom"
import Blurhash from "../../../components/blurhash/blurhash"
import ArrowNextSvg from "../../../components/svg/arrow-next-svg"
import ArrowPrevSvg from "../../../components/svg/arrow-prev-svg"
import { PATH, ROUTES } from "../../../constants/constants"
import usePaintings from "../../../hooks/usePaintings"

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
      <h1>{title}</h1>

      <div className="container grid justify-center mx-auto lg:gap-10 lg:grid-cols-2 lg:items-center">
        <div className="mt-10 lg:justify-self-end">
          <Blurhash
            title={title}
            url={`${PATH.PAINTINGS.SOURCE}/${filename}`}
            hash={imageBlurhash}
            width={imageWidth}
            height={imageHeight}
          />
        </div>
        <ul className="px-2 mt-10 justify-self-center sm:px-0 ">
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
      </div>
      <nav className="relative grid grid-cols-2 gap-2 mt-24 justify-items-center">
        <Link
          to={`/${ROUTES.PAINTINGS.URL}/${prevPainting.slug}`}
          className="rounded-full items-center justify-items-center overflow-hidden border-4 [&>*]:col-span-full [&>*]:row-span-full border-gray-100 grid shadow-2xl"
        >
          <span className="sr-only">Previous</span>
          <i className="z-10 block w-10 pointer-events-none">
            <ArrowPrevSvg />
          </i>
          <div className="transition-opacity duration-300 ease-in-out opacity-50 hover:opacity-70">
            <Blurhash
              title={prevPainting.title}
              url={`${PATH.PAINTINGS.SQUARE}/${prevPainting.filename}`}
              hash={prevPainting.thumbBlurhash}
              width={prevPainting.thumbWidth}
              height={prevPainting.thumbHeight}
            />
          </div>
        </Link>
        <Link
          to={`/${ROUTES.PAINTINGS.URL}/${nextPainting.slug}`}
          className="rounded-full items-center justify-items-center overflow-hidden border-4 border-gray-100 [&>*]:col-span-full [&>*]:row-span-full grid shadow-2xl"
        >
          <span className="sr-only">Next</span>
          <i className="z-10 block w-10 pointer-events-none">
            <ArrowNextSvg />
          </i>
          <div className="transition-opacity duration-300 ease-in-out opacity-50 hover:opacity-70">
            <Blurhash
              title={nextPainting.title}
              url={`${PATH.PAINTINGS.SQUARE}/${nextPainting.filename}`}
              hash={nextPainting.thumbBlurhash}
              width={nextPainting.thumbWidth}
              height={nextPainting.thumbHeight}
            />
          </div>
        </Link>
      </nav>
    </>
  )
}

export default Painting