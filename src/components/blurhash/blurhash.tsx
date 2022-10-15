import { decode } from "blurhash"
import type { HTMLAttributes } from "react"
import { useEffect, useRef } from "react"

type BlurhashProps = HTMLAttributes<HTMLDivElement> & {
  hash: string
  punch?: number
  resolutionX?: number
  resolutionY?: number
  className?: string
}

function Blurhash(props: BlurhashProps) {
  const { resolutionX = 32, resolutionY = 32, punch = 1, hash, className = "" } = props

  if (resolutionX && resolutionX <= 0) {
    throw new Error("resolutionX must be larger than zero")
  }

  if (resolutionY && resolutionY <= 0) {
    throw new Error("resolutionY must be larger than zero")
  }
  const canvas = useRef<HTMLCanvasElement>(null)

  const draw = () => {
    if (canvas) {
      const pixels = decode(hash, resolutionX, resolutionY, punch)
      const ctx = (canvas.current as HTMLCanvasElement).getContext("2d") as CanvasRenderingContext2D
      const imageData = ctx.createImageData(resolutionX, resolutionY)
      imageData.data.set(pixels)
      ctx.putImageData(imageData, 0, 0)
    }
  }

  useEffect(() => {
    draw()
  }, [canvas])

  return <canvas className={className} height={resolutionX} width={resolutionY} ref={canvas} />
}

export default Blurhash

Blurhash.defaultProps = {
  resolutionX: 32,
  resolutionY: 32,
  punch: 1,
  className: "",
}
