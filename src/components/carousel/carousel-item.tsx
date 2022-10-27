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
}

function CarouselItem({ item, index, currentIndex }: CarouselItemProps) {
  const isCurrent = index === currentIndex

  return (
    <Link
      to={item.link}
      title={item.title}
      className={`
        ${isCurrent ? "opacity-100" : "pointer-events-none opacity-0"} 
        col-span-full row-span-full flex flex-col justify-start transition-opacity duration-500 ease-in`}
    >
      <Blurhash
        title={item.title}
        url={item.imageUrl}
        hash={item.imageBlurhash}
        width={item.imageWidth}
        height={item.imageHeight}
      />
    </Link>
  )
}
export default CarouselItem
