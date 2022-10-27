import { Suspense } from "react"
import { Outlet, ScrollRestoration } from "react-router-dom"
import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import Loader from "../../components/Loader/loader"
import SkipToMainContent from "../../components/skip-to-main-content/skip-to-main-content"

function Layout() {
  return (
    <>
      <SkipToMainContent />
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
      <ScrollRestoration />
    </>
  )
}

export default Layout
