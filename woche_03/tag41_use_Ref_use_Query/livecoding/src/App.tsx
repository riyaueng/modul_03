import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import "./App.css"
import Layout from "./layout/Layout"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import SignUp from "./pages/signUp/SignUp"
import PostList from "./pages/postList/PostList"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="posts" element={<PostList />} />
        </Route>
      </>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
