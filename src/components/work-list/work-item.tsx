import { useState } from "react"
import { Link } from "react-router-dom"
import { PATH } from "../../constants/constants"
import type { WorkInterface } from "../../hooks/useWork"
import Blurhash from "../blurhash/blurhash"

type Props = {
  work: WorkInterface
}

function workDetails({ work }: Props) {
  const { slug, title, year, width, height, filename, blurhashSquare } = work
  const [isLoaded, setIsLoaded] = useState(false)

  const handleOnLoad = () => {
    setIsLoaded(true)
  }

  return (
    <article className="group flex-auto">
      <Link to={slug} className="relative flex flex-col">
        <img
          className={`w-full  object-cover object-center transition-opacity duration-300 ease-in-out ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          src={`${PATH.WORKS.SMALL}/${filename}`}
          alt={title}
          width={200}
          height={200}
          loading="lazy"
          onLoad={handleOnLoad}
        />
        <Blurhash
          className={`absolute h-full w-full object-cover object-center transition-opacity duration-300 ease-in-out ${
            isLoaded ? "opacity-0" : "opacity-100"
          }`}
          hash={blurhashSquare}
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
