import useSWR from "swr"
import { getWorkById, getWorkBySlug } from "../services/api"

export interface WorkInterface {
  id: number
  slug: string
  title: string
  year: number
  height: number
  width: number
  filename: string
  order: number
  visible: boolean
}

export const fallbackWork: WorkInterface = {
  id: 0,
  slug: "fallback-slug",
  title: "This is a fallback",
  year: 0,
  height: 0,
  width: 0,
  filename: "attitude_politique-2001-46x61.jpg", // TODO: replace with real fallback image
  order: 1,
  visible: true,
}

function useWork(slug: number | string) {
  const { data, error } =
    typeof slug === "number"
      ? useSWR("getWorkById", () => getWorkById(slug))
      : useSWR("getWorkBySlug", () => getWorkBySlug(slug))

  return {
    work: data ?? fallbackWork,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useWork
