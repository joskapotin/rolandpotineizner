import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import Footer from "../footer/footer"
import Header from "../header/header"
import OrnateLineBreakSvg from "../svg/ornate-line-break-svg"

function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    const mainContentEl = document.getElementById("main-content")
    if (mainContentEl)
      mainContentEl.scrollIntoView({
        behavior: "smooth",
      })
  }, [pathname])

  return (
    <>
      <Header />
      <main
        id="main-content"
        className="container grid justify-center flex-grow px-2 pt-10 mx-auto gap-y-24 sm:px-0 md:grid-cols-2 md:gap-x-6 lg:gap-x-7 xl:gap-x-8 2xl:gap-x-9"
      >
        <Outlet />
      </main>
      <div className="w-full max-w-screen-md mx-auto my-24">
        <OrnateLineBreakSvg />
      </div>
      <Footer />
    </>
  )
}

export default Layout
