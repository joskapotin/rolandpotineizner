import { useState } from "react"
import BlurhashCanvas from "./blurhash-canvas"
import BlurhashSpinner from "./blurhash-spinner"

type BlurhashProps = {
  title: string
  url: string
  hash: string
  width: number
  height: number
}

function Blurhash(props: BlurhashProps) {
  const { title, url, hash, width, height } = props
  const [isLoaded, setIsLoaded] = useState(false)

  const handleOnLoad = () => {
    setIsLoaded(true)
  }

  return (
    <div className="relative grid w-full isolate">
      <img
        className={`row-span-full col-span-full w-full mx-auto object-cover object-center transition-opacity duration-500 ease-in-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        src={url}
        alt={title}
        width={width}
        height={height}
        loading="lazy"
        onLoad={handleOnLoad}
      />
      <BlurhashCanvas hash={hash} isLoaded={isLoaded} width={width} height={height} />
      <BlurhashSpinner isLoaded={isLoaded} />
    </div>
  )
}
export default Blurhash
