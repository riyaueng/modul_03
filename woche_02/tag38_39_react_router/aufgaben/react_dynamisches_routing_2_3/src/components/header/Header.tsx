import { Link } from "react-router"
import "./Header.css"

export default function Header() {
  return (
    <>
      <header>
        <h1>SuperCarList</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
    </>
  )
}
