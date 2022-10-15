import image from "../../assets/images/roland.jpg"
import Heading from "../../components/heading/heading"
import Loader from "../../components/loader/loader"
import NotFound from "../../components/not-found"
import Youtube from "../../components/youtube/youtube"
import { YOUTUBE_ID } from "../../constants/constants"
import useResume from "../../hooks/useResume"
import Story from "./story"
import Year from "./year"

function About() {
  const { bio, isLoading, isError } = useResume()

  if (isError) return <NotFound />
  if (isLoading) return <Loader />

  return (
    <>
      <Heading>About me</Heading>
      <img src={image} alt="Roland souriant devant des tableaux" className="w-full object-cover" />
      <Story />
      <Youtube embedId={YOUTUBE_ID.STORY} />
      {bio?.map(item => (
        <Year key={item.year} year={item.year} events={item.events} />
      ))}
    </>
  )
}

export default About
