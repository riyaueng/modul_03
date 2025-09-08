import React, { useEffect, useState } from "react"
import type { IProduct } from "../../interfaces/IProducts"
import axios from "axios"
import ProductItem from "../../components/productItem/ProductItem"

export default function Shop() {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get("https://fakestoreapi.com/products")
      setProducts(resp.data)
    }
    fetchData()
  }, [])
  return (
    <div>
      <h4>Product Liste</h4>

      {products.map((product: IProduct) => {
        return (
          <div key={product.id}>
            <ProductItem product={product} />
          </div>
        )
      })}
    </div>
  )
}
