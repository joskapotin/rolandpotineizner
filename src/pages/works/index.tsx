import Heading from "../../components/heading/heading"
import WorkList from "../../components/work-list/work-list"

function Work() {
  return (
    <>
      <Heading>Works</Heading>
      <div className="container mx-auto">
        <WorkList />
      </div>
    </>
  )
}

export default Work
