import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router"
import type { IProduct } from "../../interfaces/IProducts"

export default function ProductDetail() {
  const { id } = useParams()

  const [product, setProduct] = useState<IProduct>()

  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get(`https://fakestoreapi.com/products/${id}`)
      setProduct(resp.data)
    }
    fetchData()
  }, [id])
  return (
    <div>
      ProductDetail
      <h3>Title: {product?.title}</h3>
      <p>Price: {product?.price} €</p>
      <p>Description: {product?.description}</p>
      <img src={product?.image} alt="" />
      <Link to={"/shop"}>Back to Shop</Link>
    </div>
  )
}
