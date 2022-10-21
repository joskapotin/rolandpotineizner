import { useMemo } from "react"
import image from "../../assets/images/helle-1999-73x60.jpg"
import Blurhash from "../../components/blurhash/blurhash"
import Carousel from "../../components/carousel/carousel"
import Quote from "../../components/quote/quote"
import { PATH, ROUTES } from "../../constants/constants"
import usePaintings from "../../hooks/usePaintings"

function Home() {
  const { paintings } = usePaintings()

  const carouselItems = useMemo(
    () =>
      paintings.map(painting => ({
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
      <h1>{ROUTES.HOME.NAME}</h1>
      <div className="container grid grid-cols-1 px-2 mx-auto sm:px-0 md:grid-cols-2 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-9">
        <div className="max-w-md mx-auto mt-10 ">
          <Quote>
            <p>
              Dans des huiles posées avec précision sur un décor soigné, support en bois ou portail
              en biseau, il décline des ostéomorphes placés plus souvent verticalement sur fond uni
              noir de préférence, fichés sur un tube d&apos;acier ou articulés les uns aux autres,
              formant un monde sculptural étrange.
            </p>
            <p>
              De temps à autre une allusion au vivant comme cette construction dans laquelle se
              détache un bec d&apos;oiseau.
            </p>
            <p>
              Si Hellée, (1999) représente cette peinture dans laquelle la sculpture est implicite,
              il annonce une explicite sculpture de bois, peint, Hellée, (2009).
            </p>
            <p>
              Un portique laisse pendre, ossement acérés, des cadres et des boules dans une
              allégorie létale de tarlatane colorée. 2007
            </p>
            <cite className="block mt-10">
              <p className="text-end">Le Delarge</p>
            </cite>
          </Quote>
        </div>
        <div className="max-w-sm mx-auto mt-10 md:self-center">
          <Blurhash
            hash="UFChWYS$0*bIWBSNbHo20js,}qn%aLxFs.Nc"
            url={image}
            title="Roland souriant devant des tableaux"
            width={393}
            height={480}
          />
        </div>
      </div>
      <div className="hidden md:container md:mx-auto md:mt-24 md:grid md:place-content-center">
        <Carousel items={carouselItems} />
      </div>
    </>
  )
}

export default Home
