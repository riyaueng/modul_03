import React, { useState } from "react"
import "./DarkModeSection.css"

export default function DarkModeSection() {
  const [day, setDay] = useState<boolean>(false)

  return (
    <>
      <section className={`${"section_darkmode"} ${day ? "day" : "night"}`}>
        <div className="wrapper_darkmode">
          <h1>{day ? "Day" : "Night"}</h1>
          <button
            className={`${"btn_change"} ${day ? "btn_day" : "btn_night"} `}
            onClick={() => {
              setDay(!day)
            }}>
            {day ? "Change to night" : "Change to day"}
          </button>
        </div>
      </section>
    </>
  )
}
