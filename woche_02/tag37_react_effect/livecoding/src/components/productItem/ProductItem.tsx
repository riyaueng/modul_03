import React from "react"
import type { IProduct } from "../../interfaces/IProduct"
import "./ProductItem.css"

interface ProductItemProps {
  pizza: IProduct
  warenkorb: IProduct[]
  setWarenkorb: React.Dispatch<React.SetStateAction<IProduct[]>>
}

export default function ProductItem({ pizza, warenkorb, setWarenkorb }: ProductItemProps) {
  // ! Funtkion: In Warenkorb hinzufügen
  const addToCardFunction = (item: IProduct) => {
    console.log(item)
    if (!item) return
    // Der Warenkorb darf nicht überschrieben werden, es soll nur ein einzelnes Produkt jedes mal neu hinzugefügt
    setWarenkorb([...warenkorb, item])
  }

  return (
    <div>
      <h5>Product Item</h5>
      <h6>Title: {pizza.title}</h6>
      <p>Price: {pizza.price}</p>
      <p>Category: {pizza.category}</p>
      <img src={pizza.image} alt="" />
      <button onClick={() => addToCardFunction(pizza)}>Add to card</button>
    </div>
  )
}
