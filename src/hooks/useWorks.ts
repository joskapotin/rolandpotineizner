import useSWR from 'swr'
import getImages from '../services/api'

function useWorks () {
    const { data, error } = useSWR("api", getImages)
  
    return {
      works: data,
      isLoading: !error && !data,
      isError: error
    }
  }

  export default useWorks