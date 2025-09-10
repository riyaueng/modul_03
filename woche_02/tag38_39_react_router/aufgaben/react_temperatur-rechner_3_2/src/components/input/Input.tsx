import React from "react"
import "./Input.css"

interface InputProps {
  legend: string
  value: number | string
  // onChange: React.ChangeEventHandler<HTMLInputElement>
  onChange: (value: number) => void
}

export default function Input(prop: InputProps) {
  return (
    <>
      <fieldset className="field_input">
        <legend>{prop.legend}</legend>
        <input type="text" value={prop.value} onChange={(event) => prop.onChange(Number(event.target.value))} />
      </fieldset>
    </>
  )
}
