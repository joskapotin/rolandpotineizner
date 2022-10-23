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
        ${isCurrent ? "opacity-100" : "opacity-0"} 
        row-span-full col-span-full transition-opacity ease-in duration-500 flex flex-col justify-start`}
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
