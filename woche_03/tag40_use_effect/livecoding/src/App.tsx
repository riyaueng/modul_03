import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import "./App.css"
import Layout from "./layout/Layout"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Shop from "./pages/shop/Shop"
import ProductDetail from "./pages/productDetail/ProductDetail"

function App() {
  //  npm i react-router
  //  Wir deklarieren eine Variable mit dem Namen "router"
  //  Die wird mit der Methode createBrowserRouter erstellt
  //  innerhalb dieser Methode bzw. Funktion wird noch eine andere Funktion und zwar createRoutesFromElements
  //  Danach kommt das Element Route
  //  Die Eltern Route haben einen offenen und schließenden Tag
  //  Die Kinder Route haben nur einen einzelnen Tag
  //  Die Route haben zwei Eigrnschaften Attribute "path" und "element"
  //  Am Ende brauchen wir noch RouterProvider mit den Attribute router

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="shop" element={<Shop />} />
          {/* Nach : Eine selbst ernannte Bezeichnung für useParams() */}
          <Route path="shop/:id" element={<ProductDetail />} />
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
