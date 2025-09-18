import { useProducts } from "../../functions/Functions"
import type { IProduct } from "../../interfaces/Interfaces"

export default function Home() {
  const { states } = useProducts()

  if (states.error) {
    return (
      <>
        <p>Error ist da!</p>
      </>
    )
  }

  if (states.loading) {
    return (
      <>
        <p>Loading…</p>
      </>
    )
  }

  return (
    <div>
      <h2>My Products</h2>
      {states.products.map((product: IProduct) => {
        return (
          <>
            <div key={product.id}>
              <p>Title: {product.title}</p>
              <p>Price: {product.price}</p>
            </div>
          </>
        )
      })}
    </div>
  )
}
