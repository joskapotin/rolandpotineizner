import { useCallback } from "react"

type ErrorBoundaryFallbackProps = {
  error: Error
}

function ErrorBoundaryFallback({ error }: ErrorBoundaryFallbackProps) {
  const resetErrorBoundary = useCallback(
    () => console.error("Oop's something went wrong", error),
    [error],
  )
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button type="button" onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  )
}

export default ErrorBoundaryFallback
