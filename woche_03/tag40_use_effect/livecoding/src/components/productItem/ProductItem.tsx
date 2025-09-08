import React from "react"
import type { IProduct } from "../../interfaces/IProducts"
import { Link } from "react-router"

interface productProps {
  product: IProduct
}
export default function ProductItem({ product }: productProps) {
  return (
    <div>
      <h3>Title: {product.title}</h3>
      <img src={product.image} alt="" />
      <Link to={`/shop/${product.id}`}>See more details</Link>
    </div>
  )
}
