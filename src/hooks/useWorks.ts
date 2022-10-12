import useSWR from "swr"
import { getWorks } from "../services/api"

function useWorks() {
  const { data, error } = useSWR("getWorks", getWorks)

  return {
    works: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useWorks
