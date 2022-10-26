import { lazy } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Loader from "./components/Loader/loader"
import { ROUTES } from "./constants/constants"
import "./index.css"

const RootErrorBoundary = lazy(() => import("./components/error-boundary/root-error-boundary"))
const Root = lazy(() => import("./routes/root"))
const Home = lazy(() => import("./routes/home"))
const About = lazy(() => import("./routes/about"))
const Paintings = lazy(() => import("./routes/paintings"))
const Painting = lazy(() => import("./routes/paintings/painting"))
const NotFound = lazy(() => import("./routes/not-found"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
