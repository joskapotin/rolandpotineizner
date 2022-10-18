import Loader from "../../../components/Loader/loader"
import NotFound from "../../../components/not-found"
import useResume from "../../../hooks/useResume"
import ResumeItem from "./resume-item"

function Resume() {
  const { resume, isLoading, isError } = useResume()

  if (isError) return <NotFound />
  if (isLoading) return <Loader />

  return (
    <section className="mt-40 md:mt-10 flex flex-col gap-10">
      {resume?.map(item => (
        <ResumeItem key={item.years[0]} years={item.years} events={item.events} />
      ))}
    </section>
  )
}
export default Resume
