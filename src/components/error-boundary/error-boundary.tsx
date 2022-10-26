import { useRouteError } from "react-router-dom"

function ErrorBoundary() {
  const error = useRouteError()

  const message = error instanceof Error ? error.message : "Unknown Error"

  return (
    <div role="alert">
      <h1>Something went wrong:</h1>
      <h2>Error message bellow:</h2>
      <p className="font-mono">{message}</p>
      <pre className="font-mono">{JSON.stringify(error)}</pre>
    </div>
  )
}

export default ErrorBoundary
