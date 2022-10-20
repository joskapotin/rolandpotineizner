import { API } from "../constants/constants"
import { getWithExpiry, setWithExpiry } from "../helpers/storage"
import type { PaintingInterface } from "../hooks/usePainting"
import type { ResumeInterface } from "../hooks/useResume"

export const getPaintings = async () => {
  // return local data if present and not expired
  const localData = getWithExpiry("paintings")
  if (localData) return Promise.resolve(JSON.parse(localData)) as Promise<PaintingInterface[]>

  // fetch data
  const response = await fetch(API.PAINTINGS)
  const data = await response.json()

  // store local data
  setWithExpiry({
    key: "paintings",
    value: JSON.stringify(data),
  })

  return data as Promise<PaintingInterface[]>
}

export const getPaintingBySlug = async (slug: string) => {
  const works = await getPaintings()
  const work = works.find(item => item.slug === slug)
  if (!work) throw new Error("Introuvable")
  return work
}

export const getResume = async () => {
  const localData = getWithExpiry("resume")
  if (localData) return Promise.resolve(JSON.parse(localData)) as Promise<ResumeInterface[]>

  // fetch data
  const response = await fetch(API.RESUME)
  const data = await response.json()

  // store local data
  setWithExpiry({
    key: "resume",
    value: JSON.stringify(data),
  })

  return data as Promise<ResumeInterface[]>
}
