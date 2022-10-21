import { useState } from "react"
import type { CarouselItemType } from "./carousel-item"
import CarouselItem from "./carousel-item"

type CrouselProps = {
  items: CarouselItemType[]
}

function Carousel({ items }: CrouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClick = (step: number) => {
    setCurrentIndex(prevCurrentIndex => {
      const modulo = items.length
      const number = prevCurrentIndex + step
      return ((number % modulo) + modulo) % modulo // https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
    })
  }

  return (
    <div className="relative grid grid-flow-col gap-6 overflow-hidden">
      <button type="button" onClick={() => handleClick(-1)} className="z-10">
        Previous
      </button>
      <div className="grid">
        {items.map((item, index) => (
          <CarouselItem
            key={item.id}
            item={item}
            index={index}
            currentIndex={currentIndex}
            length={items.length}
          />
        ))}
      </div>
      <button type="button" onClick={() => handleClick(1)} className="z-10">
        Next
      </button>
    </div>
  )
}
export default Carousel
