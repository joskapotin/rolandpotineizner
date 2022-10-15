import Heading from "../../components/heading/heading"
import Loader from "../../components/loader/loader"
import NotFound from "../../components/not-found"
import useBio from "../../hooks/useBio"
import Year from "./year"

function About() {
  const { bio, isLoading, isError } = useBio()

  if (isError) return <NotFound />
  if (isLoading) return <Loader />

  return (
    <>
      <Heading>About me</Heading>
      {bio?.map(item => (
        <Year key={item.year} year={item.year} events={item.events} />
      ))}
    </>
  )
}

export default About
