import useSWR from "swr"
import getWorks from "../services/api"

function useWorks() {
  const { data, error } = useSWR("api", getWorks)

  return {
    works: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useWorks
