import { useMemo } from "react"
import { sortByOrder } from "../../helpers/sort"
import useWorks from "../../hooks/useWorks"
import WorkListItem from "./work-list-item"

function WorkList() {
  const { works } = useWorks()

  const worksSorted = useMemo(() => sortByOrder(works), [works])

  return (
    <div className="grid grid-cols-2 gap-2 px-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      {worksSorted.map(work => (
        <WorkListItem key={work.id} work={work} />
      ))}
    </div>
  )
}

export default WorkList
