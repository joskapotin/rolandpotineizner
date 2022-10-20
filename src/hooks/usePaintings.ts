import useSWR from "swr"
import { paintingFactory } from "../helpers/factories"
import { getPaintings } from "../services/api"

function usePaintings() {
  const { data, error } = useSWR("getWorks", getPaintings, { suspense: true })

  return {
    paintings: data?.map(painting => paintingFactory(painting)) ?? [paintingFactory()],
    isLoading: !error && !data,
    isError: error,
  }
}

export default usePaintings
