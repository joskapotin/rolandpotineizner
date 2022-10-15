import { useState } from "react"
import { Blurhash } from "react-blurhash"
import { Link } from "react-router-dom"
import { PATH } from "../../constants/constants"
import type { WorkInterface } from "../../hooks/useWork"

type Props = {
  work: WorkInterface
}

function workDetails({ work }: Props) {
  const { slug, title, year, width, height, filename, imageWidth, imageHeight, blurhash } = work
  const [isLoaded, setIsLoaded] = useState(false)

  const handleOnLoad = () => {
    setIsLoaded(true)
  }

  return (
    <article className="group flex-auto">
      <Link to={slug} className="relative flex flex-col">
        <img
          className={`absolute aspect-square w-full  object-cover object-center transition-opacity duration-300 ease-in-out ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          src={`${PATH.WORKS.SMALL}/${filename}`}
          alt={title}
          width={imageWidth}
          height={imageHeight}
          loading="lazy"
          onLoad={handleOnLoad}
        />
        <Blurhash
          className={`aspect-square w-full  object-cover object-center transition-opacity duration-300 ease-in-out ${
            isLoaded ? "opacity-0" : "opacity-100"
          }`}
          hash={blurhash}
          width="100%"
          height="100%"
        />
        <div className="absolute bottom-1 left-1 right-1 flex flex-col bg-gray-50 bg-opacity-90 p-2 text-center text-gray-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <h2>{title}</h2>
          <p>
            <time dateTime={year.toString()}>{year}</time> &middot; {height}
            <small>x</small>
            {width}
          </p>
        </div>
      </Link>
    </article>
  )
}

export default workDetails
