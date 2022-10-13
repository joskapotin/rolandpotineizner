import useSWR from "swr"
import workFactory from "../helpers/formatter"
import { getWorks } from "../services/api"

function useWorks() {
  const { data, error } = useSWR("getWorks", getWorks)

  return {
    works: data?.map(work => workFactory(work)) ?? [workFactory()],
    isLoading: !error && !data,
    isError: error,
  }
}

export default useWorks
