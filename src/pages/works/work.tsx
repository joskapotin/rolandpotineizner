import { lazy } from "react"
import { useParams } from "react-router-dom"
import Blurhash from "../../components/blurhash/blurhash"
import Heading from "../../components/heading/heading"
import { PATH } from "../../constants/constants"
import useWork from "../../hooks/useWork"

const Loader = lazy(() => import("../../components/spinner/spinner"))
const NotFound = lazy(() => import("../../components/not-found"))

function Work() {
  const { slug } = useParams()
  const { work, isLoading, isError } = useWork(slug as string)

  if (isError) return <NotFound />
  if (isLoading) return <Loader />

  const { title, year, width, height, filename, imageBlurhash, imageWidth, imageHeight } = work

  return (
    <>
      <Heading>{title}</Heading>

      <div className="grid justify-center">
        <Blurhash
          title={title}
          url={`${PATH.WORKS.SOURCE}/${filename}`}
          hash={imageBlurhash}
          width={imageWidth}
          height={imageHeight}
        />
      </div>

      <div className="text-center">
        <p>Titre: {title}</p>
        <p>
          <time dateTime={year}>Année: {year}</time>
        </p>
        <p>
          Format: {height}&#8593; / {width}&#8594;
        </p>
      </div>
    </>
  )
}

export default Work
