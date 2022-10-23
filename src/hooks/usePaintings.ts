import { useMemo } from "react"
import useSWR from "swr"
import { paintingFactory } from "../helpers/factories"
import { sortByDate } from "../helpers/sort"
import { getPaintings } from "../services/api"

function usePaintings() {
  const { data, error } = useSWR("getWorks", getPaintings, { suspense: true })

  const { paintings, isLoading, isError } = useMemo(
    () => ({
      paintings: sortByDate(
        data?.map(painting => paintingFactory(painting)) ?? [paintingFactory()]
      ),
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
