import { RouterProvider } from "react-router"
import { createBrowserRouter } from "react-router"

import "./App.css"
import Home from "./pages/home/Home"
import Layout from "./components/layout/Layout"
import About from "./pages/about/About"
import Products from "./pages/products/Products"
import Jenson from "./pages/jenson/Jenson"
import Deon from "./pages/deon/Deon"
import Krisha from "./pages/Krisha/Krisha"
// import Jenson from "./components/jenson/Jenson"
// import Deon from "./components/deon/Deon"
// import Krisha from "./components/Krisha/Krisha"

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/products",
        Component: Products,
      },
      {
        path: "/jenson",
        Component: Jenson,
      },
      {
        path: "/deon",
        Component: Deon,
      },
      {
        path: "/krisha",
        Component: Krisha,
      },
    ],
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
