import WorkList from "../../components/work-list/work-list"
import { ROUTES } from "../../constants/constants"

function Work() {
  return (
    <>
      <h1>{ROUTES.WORKS.NAME}</h1>
      <div className="container mx-auto">
        <WorkList />
      </div>
    </>
  )
}

export default Work
