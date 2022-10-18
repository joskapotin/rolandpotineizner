/* eslint-disable import/prefer-default-export */
import type { WorkInterface } from "../hooks/useWork"

export const sortByOrder = (works: WorkInterface[]) => works.sort((a, b) => a.order - b.order)
