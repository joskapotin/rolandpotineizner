import { useParams } from "react-router-dom"
import Blurhash from "../../../components/blurhash/blurhash"
import { PATH } from "../../../constants/constants"
import usePainting from "../../../hooks/usePainting"

function Painting() {
  const { slug } = useParams()
  const { painting } = usePainting(slug as string)

  const { title, year, width, height, filename, imageBlurhash, imageWidth, imageHeight } = painting

  return (
    <>
      <h1>{title}</h1>

      <div className="container grid justify-center mx-auto lg:gap-10 lg:grid-cols-2 lg:items-center lg:justify-items-end">
        <div className="mt-10">
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
    </>
  )
}

export default Painting
