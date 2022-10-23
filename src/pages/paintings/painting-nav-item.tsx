import { Link } from "react-router-dom"
import Blurhash from "../../components/blurhash/blurhash"
import { PATH } from "../../constants/constants"
import type { PaintingInterface } from "../../hooks/usePainting"

type PaintingNavItemProps = {
  url: string
  painting: PaintingInterface
  text: string
}

function PaintingNavItem({ url, painting, text }: PaintingNavItemProps) {
  return (
    <Link
      title={`Cliquez pour voir "${painting.title}"`}
      to={url}
      className="grid w-40 items-center justify-items-center overflow-hidden rounded-full border-4 border-gray-100 shadow-2xl [&>*]:col-span-full [&>*]:row-span-full"
    >
      <span className="sr-only">{text}</span>
      <div className="opacity-60 transition-opacity duration-300 ease-in-out hover:opacity-100">
        <Blurhash
          title={painting.title}
          url={`${PATH.PAINTINGS.SQUARE}/${painting.filename}`}
          hash={painting.thumbBlurhash}
          width={painting.thumbWidth}
          height={painting.thumbHeight}
        />
      </div>
    </Link>
  )
}
export default PaintingNavItem
