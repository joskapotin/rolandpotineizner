import { useState } from "react"
import CarouselDot from "./carousel-dot"
import type { CarouselItemType } from "./carousel-item"
import CarouselItem from "./carousel-item"

type CrouselProps = {
  items: CarouselItemType[]
}

function Carousel({ items }: CrouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClick = (newIndex: number) => {
    if (newIndex !== currentIndex) setCurrentIndex(newIndex)
  }

  // TODO make it pausable
  // useEffect(() => {
  //   let count = 0
  //   const interval = setInterval(() => {
  //     count = (count + 1) % items.length
  //     handleClick(count)
  //   }, 3000)
  //   return () => clearInterval(interval)
  // }, [items])

  return (
    <div className="max-w-md">
      <div className="flex flex-wrap justify-center gap-3 py-3">
        {items.map((item, index) => (
          <CarouselDot
            key={item.id}
            isCurrent={index === currentIndex}
            title={item.title}
            handleClick={() => handleClick(index)}
          />
        ))}
      </div>

      <div className="grid place-content-center mt-4">
        {items.map((item, index) => (
          <CarouselItem key={item.id} item={item} index={index} currentIndex={currentIndex} />
        ))}
      </div>
    </div>
  )
}
export default Carousel
