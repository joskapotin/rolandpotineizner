import { Link } from "react-router-dom"
import Blurhash from "../blurhash/blurhash"

export type CarouselItemType = {
  id: string
  link: string
  title: string
  imageUrl: string
  imageBlurhash: string
  imageWidth: number
  imageHeight: number
}

type CarouselItemProps = {
  item: CarouselItemType
  index: number
  currentIndex: number
  length: number
}

function CarouselItem({ item, index, currentIndex, length }: CarouselItemProps) {
  const isBefore = index === currentIndex - 1 || (currentIndex === 0 && index === length - 1)
  const isCurrent = index === currentIndex
  const isAfter = index === currentIndex + 1 || (currentIndex === length - 1 && index === 0)

  return (
    <Link
      to={item.link}
      className={`
        ${isBefore ? "-translate-x-full" : "translate-x-0"} 
        ${isCurrent ? "opacity-100 scale-100" : "opacity-0 scale-0"} 
        ${isAfter ? "translate-x-full" : "translate-x-0"} 
        row-span-full col-span-full [&>div]:h-full [&_img]:h-full [&_img]:w-auto [&_canvas]:h-full [&_img]:md:max-w-md  [&_canvas]:md:max-w-md [&_canvas]:w-auto flex-grow w-full mx-auto h-96 transition ease-in-out duration-500`}
    >
      <Blurhash
        title={item.title}
        url={item.imageUrl}
        hash={item.imageBlurhash}
        width={item.imageWidth}
        height={item.imageHeight}
      />
      {/* <h4>{item.title}</h4> */}
    </Link>
  )
}
export default CarouselItem
