import React, { useState } from "react"
import "./FaqSection.css"

// # ------- Aufgabe React useState 1_1 und 1_2 -------

// ? useState für Zustandsänderung nutzen
export default function FaqSection() {
  const [answer1, setAnswer1] = useState<boolean>(false)
  const [answer2, setAnswer2] = useState<boolean>(false)
  console.log(answer1)
  console.log(answer2)

  // ! -> dreht den boolean-Wert um!
  const displayAnswer1 = () => {
    setAnswer1(!answer1)
  }

  const displayAnswer2 = () => {
    setAnswer2(!answer2)
  }

  // ? Border-Styling abhängig von Änderung machen

  const boxBorder = answer1 ? { borderBottom: " 1px solid white" } : {}

  return (
    <>
      <section className="faq_section">
        <div className="faq_box faq1" style={boxBorder}>
          <div className="question">
            <p>Why is React great?</p>
            <button onClick={displayAnswer1} className="btn_faq">
              {/* Tenary-Operator Abfrage für Zustandswechsel nutzen */}
              {answer1 ? "–" : "+"}
            </button>
          </div>
        </div>
        {answer1 && (
          <div className="faq_box ">
            <div className="question">
              <p>Fast Learning Curve</p>
              <button onClick={displayAnswer2} className="btn_faq">
                {answer2 ? "–" : "+"}
              </button>
            </div>
            {answer2 && (
              <div className="answer">
                <p>
                  React is very a simple and lightweight library that only deals with the view layer. It is not a beast
                  like other MV* frameworks such as Angular or Ember. Any Javascript developer can understand the basics
                  and start developing an awesome web application after only a couple of days reading tutorial. As the
                  React guide says ‘Thinking in React’ may be a little different than you used to since it brings a new
                  approach to the table, but it will become much easier and natural as you gain experience with it.
                </p>
              </div>
            )}
          </div>
        )}
      </section>
    </>
  )
}
