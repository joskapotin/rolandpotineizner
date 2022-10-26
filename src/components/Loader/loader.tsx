import SpinnerSvg from "../svg/spinner-svg"

function Loader() {
  return (
    <div
      aria-label="Loading..."
      role="status"
      className="z-20 col-span-full row-span-full grid h-full w-full flex-grow place-content-center p-10"
    >
      <SpinnerSvg />
    </div>
  )
}

export default Loader
