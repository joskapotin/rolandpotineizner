import { useCallback, useState } from "react"

function useToggle(initialState = false) {
  const [state, setState] = useState(initialState)
  const toggleState = useCallback(() => setState(prevState => !prevState), [setState])

  return [state, toggleState] as const
}
export default useToggle
