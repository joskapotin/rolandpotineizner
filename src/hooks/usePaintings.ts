import useSWR from "swr"
import paintingsFactory from "../helpers/paintingsFactory"
import { getPaintings } from "../services/api"

export interface PaintingInterface {
  id: string
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

function usePaintings() {
  const { data } = useSWR("getPaintings", getPaintings, { suspense: true })

  return data ? paintingsFactory(data) : []
}
export default usePaintings
