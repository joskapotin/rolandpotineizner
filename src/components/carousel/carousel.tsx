import { useState } from "react"
import { Link } from "react-router-dom"
import Blurhash from "../blurhash/blurhash"

type CrouselProps = {
  items: {
    link: string
    title: string
    imageUrl: string
    imageBlurhash: string
    imageWidth: number
    imageHeight: number
  }[]
}

function Carousel({ items }: CrouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    if (currentIndex === 0) setCurrentIndex(items.length - 1)
    setCurrentIndex(prevCurrentIndex => prevCurrentIndex - 1)
  }

  const handleNext = () => {
    if (currentIndex === items.length - 1) setCurrentIndex(0)
    setCurrentIndex(prevCurrentIndex => prevCurrentIndex + 1)
  }

  return (
    <div className="relative grid grid-flow-col gap-6 overflow-hidden">
      <button type="button" onClick={handlePrevious} className="z-10">
        Previous
      </button>
      <div className="grid">
        {items.map((item, index) => (
          <Link
            key={item.imageBlurhash}
            to={item.link}
            className={`${
              currentIndex === index ? "scale-100 opacity-100" : "scale-0 opacity-0"
            } row-span-full col-span-full [&>div]:h-full [&_img]:h-full [&_img]:w-auto [&_canvas]:h-full [&_img]:md:max-w-md  [&_canvas]:md:max-w-md [&_canvas]:w-auto flex-grow w-full mx-auto h-96 transition ease-in-out duration-300`}
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
        ))}
      </div>
      <button type="button" onClick={handleNext} className="z-10">
        Next
      </button>
    </div>
  )
}
export default Carousel
