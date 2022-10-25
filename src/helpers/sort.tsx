import type { PaintingInterface } from "../hooks/usePaintings"

export const sortByOrder = (paintings: PaintingInterface[]) =>
  paintings.sort((a, b) => a.order - b.order)

export const sortByDate = (paintings: PaintingInterface[], direction: "ASC" | "DSC" = "DSC") => {
  if (direction === "ASC")
    return paintings.sort((a, b) => parseInt(a.year, 10) - parseInt(b.year, 10))
  return paintings.sort((a, b) => parseInt(b.year, 10) - parseInt(a.year, 10))
}
