import React from "react"
import NaviLink from "../naviLink/NaviLink"
import "./Header.css"

export default function Header() {
  return (
    <header>
      <div className="blog_logo">
        <h4>My Life</h4>
      </div>

      <nav>
        <NaviLink to="/" text="Home" />
        <NaviLink to="/blog" text="Blog" />
      </nav>
    </header>
  )
}
