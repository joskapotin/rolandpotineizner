/* eslint-disable import/prefer-default-export */
import type { PaintingInterface } from "../hooks/usePainting"

export const sortByOrder = (works: PaintingInterface[]) => works.sort((a, b) => a.order - b.order)

export const sortByDate = (works: PaintingInterface[], direction: "ASC" | "DSC" = "DSC") => {
  if (direction === "ASC") return works.sort((a, b) => parseInt(a.year, 10) - parseInt(b.year, 10))
  return works.sort((a, b) => parseInt(b.year, 10) - parseInt(a.year, 10))
}
