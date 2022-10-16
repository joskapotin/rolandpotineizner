import Spinner from "../../components/spinner/spinner"
import { ROUTES } from "../../constants/constants"

function Home() {
  return (
    <>
      <h1>{ROUTES.HOME.NAME}</h1>
      <Spinner />
    </>
  )
}

export default Home
