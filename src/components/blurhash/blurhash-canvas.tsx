import { decode } from "blurhash"
import type { HTMLAttributes } from "react"
import { useCallback, useEffect, useRef } from "react"

type BlurhashCanvasProps = HTMLAttributes<HTMLDivElement> & {
  hash: string
  isLoaded?: boolean
}

const resolution = 32

function BlurhashCanvas(props: BlurhashCanvasProps) {
  const { hash, isLoaded = false } = props
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const draw = useCallback(() => {
    if (canvasRef) {
      const pixels = decode(hash, resolution, resolution, 1)
      const ctx = (canvasRef.current as HTMLCanvasElement).getContext(
        "2d"
      ) as CanvasRenderingContext2D
      const imageData = ctx.createImageData(resolution, resolution)
      imageData.data.set(pixels)
      ctx.putImageData(imageData, 0, 0)
    }
  }, [hash, canvasRef])

  useEffect(() => {
    draw()
  }, [canvasRef, draw])

  return (
    <canvas
      className={`absolute top-0 h-full w-full object-cover object-center transition-opacity duration-500 ease-in-out ${
        isLoaded ? "opacity-0" : "opacity-100"
      }`}
      height={resolution}
      width={resolution}
      ref={canvasRef}
    />
  )
}

export default BlurhashCanvas

BlurhashCanvas.defaultProps = {
  isLoaded: false,
}
