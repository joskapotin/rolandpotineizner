import { lazy } from "react"
import { useParams } from "react-router-dom"
import Blurhash from "../../components/blurhash/blurhash"
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
      <h1>{title}</h1>

      <div className="container mx-auto grid justify-center lg:grid-cols-2 lg:items-center lg:justify-items-end">
        <Blurhash
          title={title}
          url={`${PATH.WORKS.SOURCE}/${filename}`}
          hash={imageBlurhash}
          width={imageWidth}
          height={imageHeight}
        />
        <div className="justify-self-center">
          <p>Titre: {title}</p>
          <p>
            <time dateTime={year}>Année: {year}</time>
          </p>
          <p>
            Format: {height}&#8593; / {width}&#8594;
          </p>
        </div>
      </div>
    </>
  )
}

export default Work
