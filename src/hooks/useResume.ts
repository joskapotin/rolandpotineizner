import useSWR from "swr"
import { getResume } from "../services/api"

export interface ResumeInterface {
  years: string[]
  events: string[]
}

const useResume = () => {
  const { data, error } = useSWR("getResume", () => getResume(), { suspense: true })

  return {
    resume: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useResume
