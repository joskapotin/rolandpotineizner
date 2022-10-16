import { lazy, useState } from "react"
import { useParams } from "react-router-dom"
import Blurhash from "../../components/blurhash/blurhash"
import Heading from "../../components/heading/heading"
import { PATH } from "../../constants/constants"
import useWork from "../../hooks/useWork"

const Loader = lazy(() => import("../../components/loader/loader"))
const NotFound = lazy(() => import("../../components/not-found"))

function Work() {
  const { slug } = useParams()
  const { work, isLoading, isError } = useWork(slug as string)
  const [isLoaded, setIsLoaded] = useState(false)

  const handleOnLoad = () => {
    setIsLoaded(true)
  }

  if (isError) return <NotFound />
  if (isLoading) return <Loader />

  const { title, year, width, height, filename, blurhash, imageWidth, imageHeight } = work

  return (
    <>
      <Heading>{title}</Heading>

      <div className="flex flex-col justify-center">
        <picture className="relative border-gray-900">
          <img
            className={`mx-auto object-cover object-center transition-opacity duration-500 ease-in-out ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            src={`${PATH.WORKS.SOURCE}/${filename}`}
            alt={title}
            width={imageWidth}
            height={imageHeight}
            loading="lazy"
            onLoad={handleOnLoad}
          />
          <Blurhash
            className={`absolute top-0 mx-auto h-full w-full object-cover object-center transition-opacity duration-500 ease-in-out ${
              isLoaded ? "opacity-0" : "opacity-100"
            }`}
            hash={blurhash}
          />
        </picture>
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
