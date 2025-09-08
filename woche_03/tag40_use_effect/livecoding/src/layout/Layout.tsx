import React from "react"
import { Outlet, useLocation } from "react-router"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

export default function Layout() {
  // Wir brauchen die Layout-Seite, damit wir das Outlet von React Router benutzen können
  // Outlet ist dafür zuständig, dass alles was sich innerhalb der Seite Home, Porduktliste, Dashboard etc. befindet, die ganze Zeit den User gezeigt wird

  // ist ein Hook von React router um die aktuelle URL aufzurufen
  const location = useLocation()
  const hideFooter = location.pathname === "/login"

  return (
    <>
      <Header />
      <Outlet />
      {!hideFooter && <Footer />}
    </>
  )
}
