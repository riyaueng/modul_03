import Footer from "../footer/Footer"
import Header from "../header/Header"
import { Outlet } from "react-router"

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
