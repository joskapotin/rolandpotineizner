import useSWR from "swr"
import { paintingFactory } from "../helpers/factories"
import { getPaintingBySlug } from "../services/api"

export interface PaintingInterface {
  id: number
  slug: string
  title: string
  year: string
  height: string
  width: string
  filename: string
  order: number
  visible: boolean
  imageBlurhash: string
  imageWidth: number
  imageHeight: number
  thumbWidth: number
  thumbHeight: number
  thumbBlurhash: string
}

function usePainting(slug: string) {
  const { data, error } = useSWR("getPaintingBySlug", () => getPaintingBySlug(slug), {
    suspense: true,
  })

  return {
    painting: paintingFactory(data),
    isLoading: !error && !data,
    isError: error,
  }
}

export default usePainting
