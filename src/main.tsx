import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorBoundary from "./components/error-boundary/error-boundary"
import Layout from "./components/layout/layout"
import Loader from "./components/Loader/loader"
import { ROUTES } from "./constants/constants"
import "./index.css"
import About from "./pages/about"
import Home from "./pages/home"
import NotFound from "./pages/not-found"
import Paintings from "./pages/paintings"
import Painting from "./pages/paintings/painting"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: Loader,
    errorElement: <ErrorBoundary />,
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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
)
