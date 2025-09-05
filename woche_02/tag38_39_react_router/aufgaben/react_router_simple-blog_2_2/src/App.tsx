import { RouterProvider } from "react-router"
import { createBrowserRouter } from "react-router"
import "./App.css"

import Layout from "./pages/layout/Layout"
import Home from "./pages/home/Home"
import Blog from "./pages/blog/Blog"
import Article from "./pages/article/Article"
import ErrorPage from "./pages/errorPage/ErrorPage"

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      { path: "/blog", Component: Blog },
      {
        path: "/blog/:articleId",
        Component: Article,
      },
      {
        path: "*",
        errorElement: <ErrorPage />,
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
