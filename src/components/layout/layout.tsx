import { Outlet } from "react-router-dom"
import Footer from "../footer/footer"
import Header from "../header/header"

function Layout() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
