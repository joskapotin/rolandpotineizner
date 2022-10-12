import { lazy, Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { useRoutes } from "react-router-dom"
import { ROUTES } from "./constants/constants"

const Layout = lazy(() => import("./components/layout/layout"))
const Loader = lazy(() => import("./components/loader/loader"))
const NotFound = lazy(() => import("./components/not-found"))
const About = lazy(() => import("./pages/about"))
const Home = lazy(() => import("./pages/home"))
const Works = lazy(() => import("./pages/works"))
const Work = lazy(() => import("./pages/works/work"))
const ErrorFallback = lazy(() => import("./components/error-fallback/error-fallback"))

function App() {
  const element = useRoutes([
    {
      path: ROUTES.ROOT,
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: ROUTES.ABOUT,
          element: <About />,
        },
        {
          path: ROUTES.WORKS,
          children: [
            {
              index: true,
              element: <Works />,
            },
            {
              path: ":slug",
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
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => alert("reset")}>
      <Suspense fallback={<Loader />}>{element}</Suspense>
    </ErrorBoundary>
  )
}

export default App