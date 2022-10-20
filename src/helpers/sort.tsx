/* eslint-disable import/prefer-default-export */
import type { PaintingInterface } from "../hooks/usePainting"

export const sortByOrder = (works: PaintingInterface[]) => works.sort((a, b) => a.order - b.order)
