import React, { useState } from "react"
import "./CounterSection.css"

export default function CounterSection() {
  let [counter, setCounter] = useState<number>(0)

  const addCount = () => {
    setCounter(counter + 1)
  }

  const subCount = () => {
    setCounter(counter - 1)
  }

  const resetCount = () => {
    setCounter((counter = 0))
  }

  return (
    <>
      <section className="section_counter">
        <div className="wrapper_counter">
          <div className="counter_box">
            <button className="btn_counter" onClick={addCount}>
              +
            </button>
            <div className="counterNumber">{counter}</div>
            <button className="btn_counter" onClick={subCount}>
              –
            </button>
          </div>
          <div className="reset_box">
            <button className="btn_reset" onClick={resetCount}>
              Reset
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
