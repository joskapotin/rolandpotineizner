import { useState } from "react"
import BlurhashCanvas from "./blurhash-canvas"

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
    <div className="pointer-events-none isolate grid w-full justify-items-center">
      <img
        className={`col-span-full row-span-full h-auto w-full object-cover object-center transition-opacity duration-500 ease-in-out ${
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
    </div>
  )
}
export default Blurhash
