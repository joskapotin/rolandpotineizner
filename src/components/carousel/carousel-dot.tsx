type CarouselDotProps = {
  title: string
  handleClick: () => void
  isCurrent: boolean
}

function CarouselDot({ title, handleClick, isCurrent }: CarouselDotProps) {
  return (
    <button
      title={title}
      type="button"
      onClick={handleClick}
      className={`${isCurrent ? "bg-gray-900" : "bg-gray-400 "} h-6 w-6 rounded-full`}
    >
      <span className="sr-only">{title}</span>
    </button>
  )
}
export default CarouselDot
