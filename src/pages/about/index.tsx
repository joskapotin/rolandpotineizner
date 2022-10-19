import { ROUTES } from "../../constants/constants"
import Resume from "./resume/resume"
import Story from "./story"

function About() {
  return (
    <>
      <h1>{ROUTES.ABOUT.NAME}</h1>
      <div className="container px-2 mx-auto sm:px-0 md:grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-9">
        <Story />
        <Resume />
      </div>
    </>
  )
}

export default About
