import Loader from "../../components/Loader/loader"
import { ROUTES } from "../../constants/constants"

function Home() {
  return (
    <>
      <h1>{ROUTES.HOME.NAME}</h1>
      <Loader />
    </>
  )
}

export default Home
