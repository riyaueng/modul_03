import React, { useState } from "react"
import "./FormularSection.css"

export default function FormularSection() {
  const [vorName, setVorName] = useState<string>("")
  const [nachName, setNachName] = useState<string>("")
  const [email, setEmail] = useState<string>("")

  return (
    <>
      <section className="section_formular">
        <form action="" className="wrapper_form">
          <div className="form_box">
            <input
              type="text"
              value={vorName}
              onChange={(event) => setVorName(event.target.value)}
              placeholder="Vorname"
            />
            <input
              type="text"
              value={nachName}
              onChange={(event) => setNachName(event.target.value)}
              placeholder="Nachname"
            />
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
          </div>

          <div className="output_box">
            <p>Vorname: {vorName}</p>
            <p>Nachname: {nachName} </p>
            <p>Email: {email} </p>
          </div>
        </form>
      </section>
    </>
  )
}
