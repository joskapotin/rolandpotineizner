import { Link } from "react-router-dom"
import Blurhash from "../blurhash/blurhash"

export type CarouselItemProps = {
  link: string
  title: string
  imageUrl: string
  imageBlurhash: string
  imageWidth: number
  imageHeight: number
}

function CarouselItem({
  link,
  title,
  imageUrl,
  imageBlurhash,
  imageWidth,
  imageHeight,
}: CarouselItemProps) {
  return (
    <Link to={link} className="flex-shrink-0">
      <h4>{title}</h4>
      <Blurhash
        title={title}
        url={imageUrl}
        hash={imageBlurhash}
        width={imageWidth}
        height={imageHeight}
      />
    </Link>
  )
}
export default CarouselItem
