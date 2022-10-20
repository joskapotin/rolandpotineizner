import type { CarouselItemProps } from "./carousel-item"
import CarouselItem from "./carousel-item"

type CrouselProps = {
  items: CarouselItemProps[]
}

function Carousel({ items }: CrouselProps) {
  return (
    <div className="relative flex">
      {items.map(item => (
        <CarouselItem
          key={item.title}
          link={item.link}
          title={item.title}
          imageUrl={item.imageUrl}
          imageBlurhash={item.imageBlurhash}
          imageWidth={item.imageWidth}
          imageHeight={item.imageHeight}
        />
      ))}
    </div>
  )
}
export default Carousel
