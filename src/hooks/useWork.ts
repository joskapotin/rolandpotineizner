import useSWR from "swr"
import { workFactory } from "../helpers/factories"
import { getWorkBySlug } from "../services/api"

export interface WorkInterface {
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

function useWork(slug: string) {
  const { data, error } = useSWR("getWorkBySlug", () => getWorkBySlug(slug), { suspense: true })

  return {
    work: workFactory(data),
    isLoading: !error && !data,
    isError: error,
  }
}

export default useWork
