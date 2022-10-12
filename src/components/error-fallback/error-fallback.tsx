type ErrorFallbackProps = {
  error: Error
  resetErrorBoundary: (...args: Array<unknown>) => void
}

function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
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

export default ErrorFallback
