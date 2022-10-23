import { useMemo } from "react"
import useSWR from "swr"
import { paintingFactory } from "../helpers/factories"
import { getPaintings } from "../services/api"

function usePaintings() {
  const { data, error } = useSWR("getWorks", getPaintings, { suspense: true })

  const { paintings, isLoading, isError } = useMemo(
    () => ({
      paintings: data?.map(painting => paintingFactory(painting)) ?? [paintingFactory()],
      isLoading: !error && !data,
      isError: error,
    }),
    [data, error]
  )

  return {
    paintings,
    isLoading,
    isError,
  }
}

export default usePaintings
