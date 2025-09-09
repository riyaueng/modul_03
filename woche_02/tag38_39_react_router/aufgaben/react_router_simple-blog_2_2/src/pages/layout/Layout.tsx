import { Outlet, useLocation } from "react-router"
import Header from "../../components/header/Header"
import "./Layout.css"

export default function Layout() {
  const location = useLocation()
  const onHomePage = location.pathname === "/"
  console.log(onHomePage)
  return (
    <>
      <div className={onHomePage ? "homepage_bg" : ""}>
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
    </>
  )
}
