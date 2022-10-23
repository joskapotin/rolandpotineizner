import SpinnerSvg from "../svg/spinner-svg"

type BlurhashSpinnerProps = {
  isLoaded: boolean
}

function BlurhashSpinner({ isLoaded = false }: BlurhashSpinnerProps) {
  return (
    <div
      aria-label="Loading..."
      role="status"
      className={`z-10 col-span-full row-span-full grid place-content-center transition-opacity duration-500 ease-in-out ${
        isLoaded ? "opacity-0" : "opacity-50"
      }`}
    >
      <SpinnerSvg />
    </div>
  )
}
export default BlurhashSpinner
