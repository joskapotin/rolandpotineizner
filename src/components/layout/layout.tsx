import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import Footer from "../footer/footer"
import Header from "../header/header"
import OrnateLineBreakSvg from "../svg/ornate-line-break-svg"

function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Optional if you want to skip the scrolling animation
    })
  }, [pathname])

  return (
    <>
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <div className="overflow-hidden [&>*]:min-w-[500px] [&>*]:max-w-[1000px] flex justify-center">
        <OrnateLineBreakSvg />
      </div>
      <Footer />
    </>
  )
}

export default Layout
