import { lazy } from "react"
import { Blurhash } from "react-blurhash"
import { useParams } from "react-router-dom"
import { PATH } from "../../constants/constants"
import useWork from "../../hooks/useWork"

const Loader = lazy(() => import("../../components/loader/loader"))
const NotFound = lazy(() => import("../../components/not-found"))

function Work() {
  const { slug } = useParams()

  const { work, isLoading, isError } = useWork(slug as string)

  if (isError) return <NotFound />
  if (isLoading) return <Loader />

  const { title, year, width, height, filename, blurhash, imageWidth, imageHeight } = work

  return (
    <>
      <img
        className="object-cover object-center"
        src={`${PATH.WORKS.SOURCE}/${filename}`}
        alt={title}
        width={imageWidth}
        height={imageHeight}
        loading="lazy"
      />
      <Blurhash
        hash={blurhash}
        width={imageWidth}
        height={imageHeight}
        resolutionX={32}
        resolutionY={32}
        punch={1}
      />
      <h2>Titre: {title}</h2>
      <time dateTime={year.toString() ?? undefined}>Année: {year ?? "nc"}</time>
      <p>
        Format: {height ?? "nc"}&#8593; / {width ?? "nc"}&#8594;
      </p>
    </>
  )
}

export default Work
