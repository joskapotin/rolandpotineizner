import { useMemo } from "react"
import useSWR from "swr"
import { paintingFactory } from "../helpers/factories"
import { sortByDate } from "../helpers/sort"
import { getPaintings } from "../services/api"

export interface PaintingFromSheetInterface {
  id: string
  slug: string
  title: string
  year: string
  height: string
  width: string
  filename: string
  order: string
  visible: string
  imageBlurhash: string
  imageWidth: string
  imageHeight: string
  thumbWidth: string
  thumbHeight: string
  thumbBlurhash: string
}
export interface PaintingInterface {
  id: string
  slug: string
  title: string
  year: string
  height: string
  width: string
  filename: string
  order: number
  visible: boolean
  imageBlurhash: string
  imageWidth: number
  imageHeight: number
  thumbWidth: number
  thumbHeight: number
  thumbBlurhash: string
}

type Keys = keyof PaintingFromSheetInterface

type Labels = Keys[]

function usePaintings() {
  const { data, error } = useSWR("getPaintings", getPaintings, { suspense: true })

  const { paintings, isLoading, isError } = useMemo(() => {
    const labels = data?.values[0] as Labels // I need to explicitly specified the type. TS can't know that
    const entries = data?.values.slice(1)

    const paintingsArr = entries?.map(entry =>
      entry.reduce((acc, current, index) => {
        const property = labels[index]
        acc[property] = current
        return acc
      }, {} as PaintingFromSheetInterface)
    )

    const paintingsFormatted = paintingsArr?.map(painting => paintingFactory(painting)) ?? []

    const paintingsSorted = sortByDate(paintingsFormatted)

    return {
      paintings: paintingsSorted,
      isLoading: !error && !data,
      isError: error,
    }
  }, [data])

  return {
    paintings,
    isLoading,
    isError,
  }
}
export default usePaintings
