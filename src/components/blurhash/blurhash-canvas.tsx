import { decode } from "blurhash"
import { HTMLAttributes, useCallback, useEffect, useMemo, useRef } from "react"

type BlurhashCanvasProps = HTMLAttributes<HTMLDivElement> & {
  hash: string
  isLoaded?: boolean
  width: number
  height: number
}

function BlurhashCanvas(props: BlurhashCanvasProps) {
  const { hash, isLoaded = false, width = 32, height = 32 } = props
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const { resolutionX, resolutionY }: { resolutionX: number; resolutionY: number } = useMemo(() => {
    const res = 32
    const ratio = height / width

    return {
      resolutionX: res,
      resolutionY: Math.round(res * ratio),
    }
  }, [width, height])

  const draw = useCallback(() => {
    if (canvasRef?.current) {
      const pixels = decode(hash, resolutionX, resolutionY, 1)
      const ctx = canvasRef.current.getContext("2d")
      if (ctx) {
        const imageData = ctx.createImageData(resolutionX, resolutionY)
        imageData.data.set(pixels)
        ctx.putImageData(imageData, 0, 0)
      }
    }
  }, [hash, canvasRef])

  useEffect(() => {
    draw()
  }, [canvasRef, draw])

  return (
    <canvas
      className={`col-span-full row-span-full w-full h-full transition-opacity duration-500 ease-in-out ${
        isLoaded ? "opacity-0" : "opacity-100"
      }`}
      width={resolutionX}
      height={resolutionY}
      ref={canvasRef}
    />
  )
}

export default BlurhashCanvas

BlurhashCanvas.defaultProps = {
  isLoaded: false,
}
