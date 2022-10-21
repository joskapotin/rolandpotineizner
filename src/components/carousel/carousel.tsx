import { useState } from "react"
import ArrowNextSvg from "../svg/arrow-next-svg"
import ArrowPrevSvg from "../svg/arrow-prev-svg"
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
    <div className="relative grid grid-flow-col gap-6 px-2 overflow-hidden">
      <button
        type="button"
        onClick={() => handleClick(-1)}
        className="z-10 transition-transform duration-200 ease-in-out translate-x-0 active:-translate-x-2"
      >
        <span className="sr-only">Previous</span>
        <i className="inline-block w-10">
          <ArrowPrevSvg />
        </i>
      </button>
      <div className="grid place-content-center">
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
      <button
        type="button"
        onClick={() => handleClick(1)}
        className="z-10 transition-transform duration-200 ease-in-out translate-x-0 active:translate-x-2"
      >
        <span className="sr-only">Next</span>
        <i className="inline-block w-10">
          <ArrowNextSvg />
        </i>
      </button>
    </div>
  )
}
export default Carousel
