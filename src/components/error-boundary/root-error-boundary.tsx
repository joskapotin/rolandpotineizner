import { useRouteError } from "react-router-dom"

function RootErrorBoundary() {
  const error = useRouteError() as Error
  console.error(error)
  const handleClick = () => {
    window.location.href = "/"
  }

  return (
    <>
      <h1>Uh oh, something went terribly wrong 😩</h1>
      <pre className="whitespace-normal font-mono">{error.message || JSON.stringify(error)}</pre>
      <button type="button" onClick={handleClick}>
        Click here to reload the app
      </button>
    </>
  )
}

export default RootErrorBoundary
