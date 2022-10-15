import { API } from "../constants/constants"
import { getWithExpiry, setWithExpiry } from "../helpers/storage"
import type { ResumeInterface } from "../hooks/useResume"
import type { WorkInterface } from "../hooks/useWork"

export const getWorks = async () => {
  // return local data if present and not expired
  const localData = getWithExpiry("works")
  if (localData) return Promise.resolve(JSON.parse(localData)) as Promise<WorkInterface[]>

  // fetch data
  const response = await fetch(API.WORKS)
  const data = await response.json()

  // store local data
  setWithExpiry({
    key: "works",
    value: JSON.stringify(data),
  })

  return data as Promise<WorkInterface[]>
}

export const getWorkBySlug = async (slug: string) => {
  const works = await getWorks()
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
