import type { PaintingInterface } from "../hooks/usePaintings"
import type { IncomingData } from "../services/api"

interface FormatPaintingsSheetResponse {
  id: string
  slug: string
  title: string
  year: string
  height: string
  width: string
  filename: string
  order: string
  visible: string
  imageBlurhash: string
  imageWidth: string
  imageHeight: string
  thumbWidth: string
  thumbHeight: string
  thumbBlurhash: string
}

export const formatPaintingsSheet = (data: IncomingData) => {
  const labels = data.values[0] as (keyof FormatPaintingsSheetResponse)[] // I need to explicitly specified the type. TS can't know that
  const entries = data.values.slice(1)

  return entries.map(entry =>
    entry.reduce((acc, current, index) => {
      const property = labels[index]
      acc[property] = current
      return acc
    }, {} as FormatPaintingsSheetResponse)
  )
}

const fallbackPainting: PaintingInterface = {
  id: "0",
  slug: "fallback-slug",
  title: "This is a fallback",
  year: "nc",
  height: "nc",
  width: "nc",
  order: 1,
  visible: true,
  filename: "attitude_politique-2001-46x61.jpg", // TODO: replace with real fallback image
  imageBlurhash: "UBGIGx^%0h9x?wrpRoJ80O9Y=^$i0MIqVXjD",
  imageWidth: 400,
  imageHeight: 400,
  thumbBlurhash: "UBIDH+5=re-:Bz#9,]so4T}s$i9u$*s*0~Fe",
  thumbWidth: 200,
  thumbHeight: 200,
}

const paintingFactory = (painting: FormatPaintingsSheetResponse): PaintingInterface => {
  const order = typeof painting.order === "number" ? painting.order : parseInt(painting.order, 10)
  const visible = painting.visible === "true"
  const imageWidth =
    typeof painting.imageWidth === "number"
      ? painting.imageWidth
      : parseInt(painting.imageWidth, 10)
  const imageHeight =
    typeof painting.imageHeight === "number"
      ? painting.imageHeight
      : parseInt(painting.imageHeight, 10)
  const thumbWidth =
    typeof painting.thumbWidth === "number"
      ? painting.thumbWidth
      : parseInt(painting.thumbWidth, 10)
  const thumbHeight =
    typeof painting.thumbHeight === "number"
      ? painting.thumbHeight
      : parseInt(painting.thumbHeight, 10)

  return {
    ...fallbackPainting,
    ...painting,
    order,
    visible,
    imageWidth,
    imageHeight,
    thumbWidth,
    thumbHeight,
  }
}

export const paintingsFactory = (data: IncomingData) =>
  formatPaintingsSheet(data).map(painting => paintingFactory(painting))
