import React, { useState } from "react"

export default function CounterComponent() {
  // * Was ist ein Hook in React?
  // * Ein Hook ist eine Funktion, die uns bestimmte Funktionen von React ausgibt, z. B. State (Daten merken oder speichern), Effekte (Etwas ausführen, wenn sich etwas ändert) oder Refs (Sachen langfristig speichern ohne neu zu rendern)

  // ! No-go: const pizzaVariante = "funghi"
  // Stattdessen -> UseState

  // # ----- UseState -----
  // Schreibweise von useState
  const [counter, setCounter] = useState<number>(0)

  // Der erste Wert "counter" ist wie der getter, wo ich mir die Daten holen kann
  // Der zweite Wert "setCounter" ist wie der setter, sollte immer mit set beginnen und ist die Funktion mit der wir den Wert ändern können.

  // ? Entweder Funktion auslagern und dann in JSX/TSX Bereich aufrufen
  const plus = () => {
    setCounter(counter + 1)
  }

  return (
    // * Ab hier ist der JSX- und TSX-Bereich
    <>
      <p>Das ist der Counter: {counter}</p>
      <button onClick={plus}>+1</button>
      <button onClick={() => setCounter(counter - 1)}>-1</button>
      <div></div>
    </>
  )
}
