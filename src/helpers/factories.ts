/* eslint-disable import/prefer-default-export */
import type { PaintingFromSheetInterface, PaintingInterface } from "../hooks/usePaintings"

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

export const paintingFactory = (painting: PaintingFromSheetInterface): PaintingInterface => {
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
