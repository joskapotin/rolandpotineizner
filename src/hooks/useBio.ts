import useSWR from "swr"
import { getBio } from "../services/api"

export interface BioInterface {
  year: string
  events: string[]
}

function useBio() {
  const { data, error } = useSWR("getBio", () => getBio())

  return {
    bio: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useBio
