import { Suspense, useMemo } from "react"
import Carousel from "../../components/carousel/carousel"
import Loader from "../../components/Loader/loader"
import Quote from "../../components/quote/quote"
import { PATH, ROUTES } from "../../constants/constants"
import usePaintings from "../../hooks/usePaintings"

function Home() {
  const paintings = usePaintings()

  const carouselItems = useMemo(
    () =>
      paintings.slice(0, 5).map(painting => ({
        id: painting.id,
        link: `${ROUTES.PAINTINGS.URL}/${painting.slug}`,
        title: painting.title,
        imageUrl: `${PATH.PAINTINGS.SOURCE}/${painting.filename}`,
        imageBlurhash: painting.imageBlurhash,
        imageWidth: painting.imageWidth,
        imageHeight: painting.imageHeight,
      })),
    [paintings]
  )

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Carousel items={carouselItems} />
      </Suspense>

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
