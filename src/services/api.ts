import { API } from "../constants/constants"
import { setWithExpiry, getWithExpiry } from "../helpers/storage"

export interface WorkInterface {
  id: number
  slug: string
  title: string
  year: number
  height: number
  width: number
  filename: string
  order: number
  visible: boolean
}

export const getWorks = async () => {
  // return local data if present and not expired
  const localData = getWithExpiry("works")
  if (localData) return Promise.resolve(JSON.parse(localData)) as Promise<WorkInterface[]>

  // fetch data
  const response = await fetch(API.URL)
  const data = await response.json()

  // store local data
  setWithExpiry({
    key: "works",
    value: JSON.stringify(data),
  })

  return data as Promise<WorkInterface[]>
}

export const getWorkById = async (id: number) => {
  const works = await getWorks()
  return works.find(work => work.id === id)
}
