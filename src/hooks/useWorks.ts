import useSWR from "swr"
import { workFactory } from "../helpers/factories"
import { getWorks } from "../services/api"

function useWorks() {
  const { data, error } = useSWR("getWorks", getWorks, { suspense: true })

  return {
    works: data?.map(work => workFactory(work)) ?? [workFactory()],
    isLoading: !error && !data,
    isError: error,
  }
}

export default useWorks
