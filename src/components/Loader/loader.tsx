import SpinnerSvg from "../svg/spinner-svg"

function Loader() {
  return (
    <div
      aria-label="Loading..."
      role="status"
      className="fixed inset-0 grid h-full w-full place-content-center opacity-50"
    >
      <SpinnerSvg />
    </div>
  )
}

export default Loader
