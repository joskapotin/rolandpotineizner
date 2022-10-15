import useSWR from "swr"
import { getResume } from "../services/api"

export interface ResumeInterface {
  year: string
  events: string[]
}

function useResume() {
  const { data, error } = useSWR("getResume", () => getResume())

  return {
    bio: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useResume
