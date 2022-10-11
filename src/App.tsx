import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import Layout from "./components/layout/layout"

import { ROUTES } from "./constants/constants"

const Loader = lazy(() => import("./components/loader/loader"))
const NotFound = lazy(() => import("./components/not-found/not-found"))
const About = lazy(() => import("./pages/about/about"))
const Home = lazy(() => import("./pages/home/home"))
const Work = lazy(() => import("./pages/work/work"))

function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.ABOUT}
          element={
            <Suspense fallback={<Loader />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.WORK}
          element={
            <Suspense fallback={<Loader />}>
              <Work />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
