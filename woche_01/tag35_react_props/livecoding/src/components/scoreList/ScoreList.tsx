import React from "react"
import { scoresArray } from "../../data/scores"
import ScoreItem from "../scoreItem/ScoreItem"

export default function ScoreList() {
  return (
    <>
      {/* Wenn mit map Array arbeiten wollen, soll jede Komponete ein props "key" mitgegeben werden, der den Eintrag identifiziert. Das kann eine ID sein oder in dem Fallk Index von unserem Array*/}

      <section>
        {scoresArray.map((score, index) => {
          return (
            // ! ----- Variante 1 -----
            // <div key={index}>
            //   <ScoreItem name={score.name} points={score.points} icon={score.icon} />
            // </div>

            // ! ----- Variante 2 -----
            <div key={index}>
              <ScoreItem score={score} />
            </div>
          )
        })}
      </section>
    </>
  )
}
