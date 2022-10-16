import useWorks from "../../hooks/useWorks"
import NotFound from "../not-found"
import Loader from "../spinner/spinner"
import WorkListItem from "./work-list-item"

function WorkList() {
  const { works, isLoading, isError } = useWorks()

  if (isError) return <NotFound />
  if (isLoading) return <Loader />

  return (
    <div className="grid grid-cols-2 gap-2 px-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      {works.map(work => (
        <WorkListItem key={work.id} work={work} />
      ))}
    </div>
  )
}

export default WorkList
