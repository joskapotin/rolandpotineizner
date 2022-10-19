import WorkList from "../../components/work-list/work-list"
import { ROUTES } from "../../constants/constants"

function Work() {
  return (
    <>
      <h1>{ROUTES.WORKS.NAME}</h1>
      <div className="container grid mx-auto">
        <div className="mt-10">
          <WorkList />
        </div>
      </div>
    </>
  )
}

export default Work
