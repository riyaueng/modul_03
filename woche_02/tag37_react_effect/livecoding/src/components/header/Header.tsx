import React, { useState } from "react"
import type { IProduct } from "../../interfaces/IProduct"
import Cart from "../../assets/SVG/Cart"
import "./Header.css"

interface HeaderProps {
  warenkorb: IProduct[]
  setWarenkorb: React.Dispatch<React.SetStateAction<IProduct[]>>
}

export default function Header({ warenkorb, setWarenkorb }: HeaderProps) {
  const [warenkorbModal, setWarenkorbModal] = useState<boolean>(false)

  const pay = () => {
    setWarenkorb([])
    alert("Vielen Dabk für deinen Einkauf")
    setWarenkorbModal(false)
  }

  const deleteProductFunction = (productId: number): void => {
    const deletedProductArray: IProduct[] = warenkorb.filter((product: IProduct) => product.id !== productId)
    console.log(deletedProductArray)
    setWarenkorb(deletedProductArray)
  }

  const closeWarenkorbFunction = () => {
    setWarenkorbModal(false)
  }

  return (
    <header>
      <h2>Logo</h2>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>

        <div className="cart-icon" onClick={() => setWarenkorbModal(!warenkorbModal)}>
          <Cart />
          <p className="num">{warenkorb.length}</p>
        </div>

        {/* Logik für Warenkorb-Anzeige: Mit dem && Frage ich nach true ab */}
        {warenkorbModal && (
          <div className="cart">
            <h3>WarenKorb</h3>
            <button onClick={closeWarenkorbFunction}>Close</button>
            {warenkorb.length !== 0 ? (
              <>
                {warenkorb.map((product: IProduct) => {
                  return (
                    <div key={product.id}>
                      <p>
                        {product.title} {product.price}
                      </p>
                      <button onClick={() => deleteProductFunction(product.id)}>❌</button>
                    </div>
                  )
                })}
                <button onClick={pay}>Bezahlen</button>
              </>
            ) : (
              <>
                <p onClick={pay}>Dein Warenkorb ist leer…</p>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  )
}
