import useSWR from "swr"
import { getWorks } from "../services/api"
import { fallbackWork } from "./useWork"

function useWorks() {
  const { data, error } = useSWR("getWorks", getWorks)

  return {
    works: data ?? [fallbackWork],
    isLoading: !error && !data,
    isError: error,
  }
}

export default useWorks
