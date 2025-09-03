import { Link } from "react-router"
import "./Home.css"

export default function Home() {
  return (
    <>
      <section>
        <h2>
          Are you looking for <span>woodden furniture</span> for your place?
        </h2>
        <h1>This is the Right Place</h1>
        <Link to="/products">Explore Categories</Link>{" "}
      </section>
    </>
  )
}
