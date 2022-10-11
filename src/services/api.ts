import { API } from "../constants/constants"

export interface WorkInterface {
  id: number
  title: string
  year: string
  height: number
  width: number
  filename: string
  order: number
  visible: boolean
}

const getWorkss = async () => {
  const response = await fetch(API.URL)
  const data = await response.json()
  return data as Promise<WorkInterface[]>
}

export default getWorkss
