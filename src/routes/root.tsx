import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import Loader from "../components/Loader/loader"

function Layout() {
  return (
    <>
      <Header />
      <main
        id="main-content"
        className="container mx-auto grid flex-grow content-start justify-items-center gap-y-24 px-2 sm:px-0 md:grid-cols-2 md:gap-x-6 lg:gap-x-7 xl:gap-x-8 2xl:gap-x-9"
      >
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default Layout
