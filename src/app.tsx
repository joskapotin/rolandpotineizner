import { lazy, Suspense } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Loader from "./components/Loader/loader"
import { ROUTES } from "./constants/constants"
import "./index.css"

const RootErrorBoundary = lazy(() => import("./components/error-boundary/root-error-boundary"))
const Layout = lazy(() => import("./components/layout/layout"))
const Home = lazy(() => import("./pages/home"))
const About = lazy(() => import("./pages/about"))
const Paintings = lazy(() => import("./pages/paintings"))
const Painting = lazy(() => import("./pages/paintings/painting"))
const NotFound = lazy(() => import("./pages/not-found"))

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <Layout />
      </Suspense>
    ),
    loader: Loader,
    errorElement: <RootErrorBoundary />,
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

export default function App() {
  return <RouterProvider router={router} fallbackElement={<Loader />} />
}
