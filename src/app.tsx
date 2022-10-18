import { lazy, Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { useRoutes } from "react-router-dom"
import { ROUTES } from "./constants/constants"

const Layout = lazy(() => import("./components/layout/layout"))
const Loader = lazy(() => import("./components/Loader/loader"))
const NotFound = lazy(() => import("./components/not-found"))
const About = lazy(() => import("./pages/about"))
const Home = lazy(() => import("./pages/home"))
const Works = lazy(() => import("./pages/works"))
const Work = lazy(() => import("./pages/works/work"))
const ErrorBoundaryFallback = lazy(() => import("./components/error-boundary-fallback"))

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: ROUTES.ABOUT.URL,
          element: <About />,
        },
        {
          path: ROUTES.WORKS.URL,
          children: [
            {
              index: true,
              element: <Works />,
            },
            {
              path: ROUTES.WORK.URL,
              element: <Work />,
            },
          ],
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ])

  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
      <Suspense fallback={<Loader />}>{element}</Suspense>
    </ErrorBoundary>
  )
}

export default App
