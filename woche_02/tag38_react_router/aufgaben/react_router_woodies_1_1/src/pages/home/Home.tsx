import { Link } from "react-router"
import "./Home.css"

export default function Home() {
  return (
    <>
      <section className="section_home">
        <div className="div_bg_color"></div>
        <h2>
          Are you looking for <span>woodden furniture</span> for your place?
        </h2>
        <h1>This is the Right Place</h1>
        <Link to="/products" className="link_btn">
          Explore Categories
        </Link>{" "}
      </section>
    </>
  )
}
