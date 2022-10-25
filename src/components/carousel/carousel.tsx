import { useEffect, useRef, useState } from "react"
import CarouselDot from "./carousel-dot"
import type { CarouselItemType } from "./carousel-item"
import CarouselItem from "./carousel-item"

type CrouselProps = {
  items: CarouselItemType[]
}

function Carousel({ items }: CrouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const carouselRef = useRef<HTMLDivElement>(null)

  const handleClick = (newIndex: number) => {
    if (newIndex !== currentIndex) setCurrentIndex(newIndex)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isPlaying) {
        const nextIndex = (currentIndex + 1) % items.length
        handleClick(nextIndex)
      }
    }, 3000)
    return () => clearTimeout(timeout)
  }, [isPlaying, currentIndex])

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

      <div
        className="mt-4 grid place-content-center"
        ref={carouselRef}
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        {items.map((item, index) => (
          <CarouselItem key={item.id} item={item} index={index} currentIndex={currentIndex} />
        ))}
      </div>
    </div>
  )
}
export default Carousel
