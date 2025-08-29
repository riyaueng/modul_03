import type { ICar } from "../../interfaces/ICars"

interface cardItemProps {
  car: ICar
}

import React from "react"

export default function CardItem({ car }: cardItemProps) {
  return (
    <div>
      <h2>Modell: {car.modell}</h2>
      <p>Marke: {car.marke}</p>
      <p>PS: {car.ps}</p>
    </div>
  )
}
