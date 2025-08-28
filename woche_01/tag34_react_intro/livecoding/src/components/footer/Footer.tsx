import React from "react"
import Liste from "../liste/Liste"

export default function Footer() {
  return (
    <>
      {/* Inline-Styles müssen in einem Object aufgerufen werden */}
      <footer className="footer_container" style={{ color: "red" }}>
        <p>Ich eine ein Footer-Komponente</p>
        <nav>
          <a href="#">Home</a>
          <a href="#">Contact</a>
        </nav>
        <Liste />
      </footer>
    </>
  )
}
