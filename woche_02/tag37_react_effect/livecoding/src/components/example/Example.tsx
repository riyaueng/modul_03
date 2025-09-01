import React, { useEffect, useState } from "react"

// *? Was ist UserEffect?
// * Ein userEffect ist dafür um einen Seiteneffekt auszulösen. Es wird immer ausgeführt, wenn sich ein Wert ändert.Es wird dann natürlich nur die Komponente gerendert.

// ? Schreibweise:
// Zuerst useEffect, dann als erstes Argument eine Callback-Funktion und dann eine Dependencie als  leeres Array []
// useEffect(()=> {
// }, [])

export default function Example() {
  const [counter, setCounter] = useState<number>(0)
  const [slider, setSlider] = useState<string>("0")

  const changeCounter = () => {
    setCounter(counter + 1)
    console.log(counter)
  }

  const changeSlider = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(slider)
    setSlider(event.target.value)
  }

  // ? Fetch gehört immer innerhalb eines useEffects!
  // * Innerhalb des useEffectskann ich unendlich viele Abhängigkeiten haben
  // * No-Go: Bitte den Setter nie innerhalb des userEffects schreiben
  // *set(counter +1)

  // Ich kann alles mögliche hier reinschreiben, z. B. ID von einer URL extrahieren, das könnte das leere Array als Dependencie geschrieben werden

  useEffect(() => {
    console.log(counter)
    console.log(slider)
  }, [counter, slider])

  return (
    <div>
      <p>{counter}</p>
      <button onClick={changeCounter}>+1</button>

      <p>Slider: {slider}</p>
      <input type="range" name="" id="" value={slider} onChange={changeSlider} />
    </div>
  )
}
