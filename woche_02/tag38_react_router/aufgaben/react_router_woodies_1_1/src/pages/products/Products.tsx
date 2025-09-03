import { Link } from "react-router"
import "./Products.css"

export default function Products() {
  return (
    <>
      <section className="section_intro">
        <img src="../../../public/img/icon_flower.svg" alt="Icon Blume" />
        <h2>What we have</h2>
        <h3>Products</h3>
      </section>
      <section className="section_products product_jenson">
        <div className="wrapper_product">
          <p>Jenson</p>
          <img src="../../../public/img/tisch.png" alt="Tisch mit Topfpflanze" />
          <Link to="/jenson">Shop Now</Link>{" "}
        </div>

        <div className="wrapper_product product_deon">
          <p>Deon</p>
          <img src="../../../public/img/stuhl.png" alt="Blauer Stuhl" />
          <Link to="/deon">Shop Now</Link>{" "}
        </div>

        <div className="wrapper_product product_krisha">
          <p>Deon</p>
          <img src="../../../public/img/schuesseln.png" alt="Zwei Holzschüsseln" />
          <Link to="/krisha">Shop Now</Link>{" "}
        </div>
      </section>
    </>
  )
}
