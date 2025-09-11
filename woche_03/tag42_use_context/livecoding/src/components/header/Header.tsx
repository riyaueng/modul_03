import React, { useContext } from "react"
import Nav from "../nav/Nav"
import { mainContext, type MainProviderProps } from "../../context/MainProvider"

export default function Header() {
  const { darkMode, setDarkMode } = useContext(mainContext) as MainProviderProps

  return (
    <>
      <button onClick={() => setDarkMode(!darkMode)}>{darkMode ? "Light" : "Dark"}</button>
      <Nav />
    </>
  )
}
