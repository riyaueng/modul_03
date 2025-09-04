import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"

import "./App.css"
import { HomePage } from "./pages/Home"
import ContactPage from "./pages/Contact"
import AboutPage from "./pages/About"
import Layout from "./components/layout/Layout"
import BlogOverview from "./pages/BlogOverview"
import BlogDetail from "./pages/BlogDetail"
import PokemonOverview from "./pages/PokemonOverview"
import PokemonDetail from "./pages/PokemonDetail"

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/contact",
        Component: ContactPage,
      },
      {
        path: "/about",
        Component: AboutPage,
      },
      {
        path: "*",
        element: <div>Sorry 404, alles kaputt!</div>,
      },
      {
        path: "/blog",
        Component: BlogOverview,
        // children: [
        //   {
        //     path: "/blog/:slug",
        //     element: <div>Detailseite</div>,
        //   },
        // ],
      },
      {
        path: "/blog/:slug",
        Component: BlogDetail,
      },
      {
        path: "/pokemon",
        Component: PokemonOverview,
      },
      {
        path: "/pokemon/:id",
        Component: PokemonDetail,
      },
    ],
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
