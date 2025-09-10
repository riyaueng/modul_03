import React, { useEffect, useState } from "react"
import "./Home.css"
import Input from "../components/input/Input"
import WaterInfo from "../components/waterInfo/WaterInfo"

export default function Home() {
  const [celsius, setCelcius] = useState<number | string>(0)
  const [fahrenheit, setFahrenheit] = useState<number | string>(0)
  const [waterInfo, setWaterInfo] = useState<string>("")

  const celiusToFahrenheit = (celsius: number) => {
    setCelcius(celsius)
    setFahrenheit(((celsius * 9) / 5 + 32).toFixed(2))
  }

  const fahrenheittoCelcius = (fahrenheit: number) => {
    setFahrenheit(fahrenheit)
    setCelcius((((fahrenheit - 32) * 5) / 9).toFixed(2))
  }

  useEffect(() => {
    if (Number(celsius) >= 100) {
      setWaterInfo("The water is boiling!")
    } else {
      setWaterInfo("The water is not boiling.")
    }
  }, [celsius])

  const waterColor = waterInfo === "The water is boiling!" ? "water_red" : ""

  return (
    <>
      <section>
        <Input legend="Schreibe Temperatur in Celcius:" value={celsius} onChange={celiusToFahrenheit} />
        <Input legend="Schreibe Temperatur in Fahrenheit:" value={fahrenheit} onChange={fahrenheittoCelcius} />
        <WaterInfo waterInfo={waterInfo} className={waterColor} />
      </section>
    </>
  )
}
