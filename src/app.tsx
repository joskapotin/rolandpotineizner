import { lazy, Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { useRoutes } from "react-router-dom"
import { ROUTES } from "./constants/constants"

const Layout = lazy(() => import("./components/layout/layout"))
const Loader = lazy(() => import("./components/Loader/loader"))
const NotFound = lazy(() => import("./pages/not-found"))
const About = lazy(() => import("./pages/about"))
const Home = lazy(() => import("./pages/home"))
const Paintings = lazy(() => import("./pages/paintings"))
const Painting = lazy(() => import("./pages/paintings/painting"))
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
          path: ROUTES.PAINTINGS.URL,
          children: [
            {
              index: true,
              element: <Paintings />,
            },
            {
              path: ROUTES.PAINTING.URL,
              element: <Painting />,
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
