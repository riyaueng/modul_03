import React, { useState } from "react"
import Example from "../../components/example/Example"
import type { IProduct } from "../../interfaces/IProduct"
import Shop from "../../components/shop/Shop"
import Header from "../../components/header/Header"

export default function Home() {
  const [warenkorb, setWarenkorb] = useState<IProduct[]>([])
  console.log(warenkorb)

  return (
    <>
      <Header warenkorb={warenkorb} setWarenkorb={setWarenkorb} />

      {/* Hier reiche ich Getter und Setter weiter als Props */}
      {/* <Example /> */}
      <Shop warenkorb={warenkorb} setWarenkorb={setWarenkorb} />
    </>
  )
}
