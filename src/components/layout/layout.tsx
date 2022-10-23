import { Outlet } from "react-router-dom"
import Footer from "../footer/footer"
import Header from "../header/header"

function Layout() {
  return (
    <>
      <Header />
      <main
        id="main-content"
        className="container grid content-start flex-grow px-2 mx-auto justify-items-center gap-y-24 sm:px-0 md:grid-cols-2 md:gap-x-6 lg:gap-x-7 xl:gap-x-8 2xl:gap-x-9"
      >
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
