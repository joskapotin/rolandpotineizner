import image from "../../assets/images/roland01.jpg"
import Blurhash from "../../components/blurhash/blurhash"
import NotFound from "../../components/not-found"
import Loader from "../../components/spinner/spinner"
import Youtube from "../../components/youtube/youtube"
import { ROUTES, YOUTUBE_ID } from "../../constants/constants"
import useResume from "../../hooks/useResume"
import Resume from "./resume"
import Story from "./story"

function About() {
  const { resume, isLoading, isError } = useResume()

  if (isError) return <NotFound />
  if (isLoading) return <Loader />

  return (
    <>
      <h1>{ROUTES.ABOUT.NAME}</h1>
      <div className="container mx-auto px-2 sm:px-0">
        <Blurhash
          hash="LOIhjQ_Nx[%NMbRP%LIVOtkW%Mtm"
          url={image}
          title="Roland souriant devant des tableaux"
          width={604}
          height={403}
        />
        <Story />
        <Youtube embedId={YOUTUBE_ID.STORY} />
        <div className="mt-10 flex flex-col gap-10">
          {resume?.map(item => (
            <Resume key={item.years[0]} years={item.years} events={item.events} />
          ))}
        </div>
      </div>
    </>
  )
}

export default About
