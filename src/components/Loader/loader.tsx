import SpinnerSvg from "../svg/spinner-svg"

function Loader() {
  return (
    <div
      aria-label="Loading..."
      role="status"
      className="fixed inset-0 grid w-full h-full opacity-50 place-content-center"
    >
      <SpinnerSvg />
    </div>
  )
}

export default Loader
