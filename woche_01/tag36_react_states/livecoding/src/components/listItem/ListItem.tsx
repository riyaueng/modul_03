import React from "react"
import type { ICar } from "../../interfaces/ICars"
import CardItem from "../carItem/CardItem"

interface ListItemProps {
  carsArray: ICar[]
}

export default function ListItem({ carsArray }: ListItemProps) {
  console.log(carsArray)
  return (
    <>
      {carsArray.map((car: ICar) => {
        console.log(car)
        return (
          <>
            <CardItem car={car} />
          </>
        )
      })}
    </>
  )
}
