import { API } from "../constants/constants"

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

const getWorks = async () => {
  const response = await fetch(API.URL)
  const data = await response.json()
  return data as Promise<WorkInterface[]>
}

export default getWorks
