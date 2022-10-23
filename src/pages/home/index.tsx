import { useMemo } from "react"
import Carousel from "../../components/carousel/carousel"
import Quote from "../../components/quote/quote"
import { PATH, ROUTES } from "../../constants/constants"
import { getRandomNumbers } from "../../helpers/math"
import usePaintings from "../../hooks/usePaintings"

function Home() {
  const { paintings } = usePaintings()

  const carouselItems = useMemo(
    () =>
      getRandomNumbers(0, paintings.length - 1, 10).map(number => ({
        id: paintings[number].id,
        link: `${ROUTES.PAINTINGS.URL}/${paintings[number].slug}`,
        title: paintings[number].title,
        imageUrl: `${PATH.PAINTINGS.SOURCE}/${paintings[number].filename}`,
        imageBlurhash: paintings[number].imageBlurhash,
        imageWidth: paintings[number].imageWidth,
        imageHeight: paintings[number].imageHeight,
      })),
    [paintings]
  )

  return (
    <>
      <Carousel items={carouselItems} />

      <div className="mx-auto max-w-md">
        <Quote>
          <p>
            Dans des huiles posées avec précision sur un décor soigné, support en bois ou portail en
            biseau, il décline des ostéomorphes placés plus souvent verticalement sur fond uni noir
            de préférence, fichés sur un tube d&apos;acier ou articulés les uns aux autres, formant
            un monde sculptural étrange.
          </p>
          <p>
            De temps à autre une allusion au vivant comme cette construction dans laquelle se
            détache un bec d&apos;oiseau.
          </p>
          <p>
            Si Hellée, (1999) représente cette peinture dans laquelle la sculpture est implicite, il
            annonce une explicite sculpture de bois, peint, Hellée, (2009).
          </p>
          <p>
            Un portique laisse pendre, ossement acérés, des cadres et des boules dans une allégorie
            létale de tarlatane colorée. 2007
          </p>
          <cite className="mt-10 block">
            <p className="text-end">Le Delarge</p>
          </cite>
        </Quote>
      </div>
    </>
  )
}

export default Home
