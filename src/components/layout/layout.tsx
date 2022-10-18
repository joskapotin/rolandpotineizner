import { Outlet } from "react-router-dom"
import Footer from "../footer/footer"
import Header from "../header/header"
import OrnateLineBreakSvg from "../svg/ornate-line-break-svg"

function Layout() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <OrnateLineBreakSvg />
      <Footer />
    </>
  )
}

export default Layout
