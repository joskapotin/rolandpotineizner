import { Outlet } from "react-router-dom"
import Footer from "../footer/footer"
import Header from "../header/header"
import OrnateLineBreakSvg from "../svg/ornate-line-break-svg"

function Layout() {
  return (
    <>
      <Header />
      <main
        id="main-content"
        className="container grid content-start flex-grow px-2 pt-10 mx-auto justify-items-center gap-y-24 sm:px-0 md:grid-cols-2 md:gap-x-6 lg:gap-x-7 xl:gap-x-8 2xl:gap-x-9"
      >
        <Outlet />
      </main>
      <div className="w-full max-w-screen-md mx-auto my-24 text-gray-400">
        <OrnateLineBreakSvg />
      </div>
      <Footer />
    </>
  )
}

export default Layout
