import React from "react"
import Product from "../product/Products"
import "./Articles.css"

export default function Articles() {
  return (
    <>
      <h1>Unsere besten Produkte</h1>
      <section className="section_articles">
        <Product img="/product_coconut_oil.jpg" title="Coconut Oil" price={30} />

        <Product img="/product_camera.avif" title="Polaroid Camera" price={60} />

        <Product img="/product_shampoo.avif" title="Bamboo Shampoo" price={20} />
      </section>
    </>
  )
}
