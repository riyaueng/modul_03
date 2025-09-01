import React, { useEffect, useState } from "react"
import type { IProduct } from "../../interfaces/IProduct"
import Loading from "../loading/Loading"
import ProductItem from "../productItem/ProductItem"
import "./Shop.css"

interface ShopProps {
  warenkorb: IProduct[]
  setWarenkorb: React.Dispatch<React.SetStateAction<IProduct[]>>
}

export default function Shop(props: ShopProps) {
  const [megaData, setMegaData] = useState<null | IProduct[]>([])

  useEffect(() => {
    // * Funktion zum Daten Fetchen
    // Der Vorteil hier ist, dass die Daten nur einmal gefetcht werden beim ersten Rendern der Komponente
    // Bitte daran denken, dass async nicht vor der ersten Callback-Funktion in useEffect geschrieben werden darf, wir brauchen dafür eine neue Funktion!

    const fetchData = async (): Promise<void> => {
      const resp = await fetch("https://fakestoreapi.com/products")
      const respInJson = await resp.json()
      // console.log(respInJson)
      setMegaData(respInJson)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h2>Shop</h2>
      {megaData ? (
        <>
          <div className="product_container">
            {megaData.map((itemObj: IProduct) => {
              return (
                <div key={itemObj.id}>
                  <ProductItem pizza={itemObj} warenkorb={props.warenkorb} setWarenkorb={props.setWarenkorb} />
                </div>
              )
            })}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  )
}
