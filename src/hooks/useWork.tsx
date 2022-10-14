import useSWR from "swr"
import workFactory from "../helpers/formatter"
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
  blurhash: string
  imageWidth: number
  imageHeight: number
}

function useWork(slug: string) {
  const { data, error } = useSWR("getWorkBySlug", () => getWorkBySlug(slug))

  return {
    work: workFactory(data),
    isLoading: !error && !data,
    isError: error,
  }
}

export default useWork
