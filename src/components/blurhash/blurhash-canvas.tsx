import { decode } from "blurhash"
import type { HTMLAttributes } from "react"
import { useEffect, useRef } from "react"

type BlurhashCanvasProps = HTMLAttributes<HTMLDivElement> & {
  hash: string
  isLoaded?: boolean
}

const resolution = 32

function BlurhashCanvas(props: BlurhashCanvasProps) {
  const { hash, isLoaded = false } = props
  const canvas = useRef<HTMLCanvasElement>(null)

  const draw = () => {
    if (canvas) {
      const pixels = decode(hash, resolution, resolution, 1)
      const ctx = (canvas.current as HTMLCanvasElement).getContext("2d") as CanvasRenderingContext2D
      const imageData = ctx.createImageData(resolution, resolution)
      imageData.data.set(pixels)
      ctx.putImageData(imageData, 0, 0)
    }
  }

  useEffect(() => {
    draw()
  }, [canvas])

  return (
    <canvas
      className={`absolute top-0 h-full w-full object-cover object-center transition-opacity duration-500 ease-in-out ${
        isLoaded ? "opacity-0" : "opacity-100"
      }`}
      height={resolution}
      width={resolution}
      ref={canvas}
    />
  )
}

export default BlurhashCanvas

BlurhashCanvas.defaultProps = {
  isLoaded: false,
}
