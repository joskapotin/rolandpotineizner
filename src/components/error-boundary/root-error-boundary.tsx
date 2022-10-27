import { useRouteError } from "react-router-dom"

function RootErrorBoundary() {
  const error = useRouteError() as Error
  const handleClick = () => {
    window.location.href = "/"
  }

  return (
    <div className="flex flex-col gap-10">
      <h1>Uh oh, something went terribly wrong 😩</h1>
      <pre className="mx-auto whitespace-normal bg-gray-900 p-10 font-mono text-gray-50">
        {error.message || JSON.stringify(error)}
      </pre>
      <button className="link mx-auto" type="button" onClick={handleClick}>
        Click here to reload the app
      </button>
    </div>
  )
}

export default RootErrorBoundary
