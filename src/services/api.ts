import { API } from "../constants/constants"
import { getWithExpiry, setWithExpiry } from "../helpers/storage"
import type { BioInterface } from "../hooks/useBio"
import type { WorkInterface } from "../hooks/useWork"

export const getWorks = async () => {
  // return local data if present and not expired
  const localData = getWithExpiry("works")
  if (localData) return Promise.resolve(JSON.parse(localData)) as Promise<WorkInterface[]>

  // fetch data
  const response = await fetch(API.TABLEAUX)
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

export const getBio = async () => {
  const localData = getWithExpiry("bio")
  if (localData) return Promise.resolve(JSON.parse(localData)) as Promise<BioInterface[]>

  // fetch data
  const response = await fetch(API.BIOGRAPHIE)
  const data = await response.json()

  // store local data
  setWithExpiry({
    key: "bio",
    value: JSON.stringify(data),
  })

  return data as Promise<BioInterface[]>
}
