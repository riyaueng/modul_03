import React from "react"

export default function Liste() {
  // ? Frühere Schreibweise, wie React im Hintergrund funktioniert
  // return React.createElement("ul" {className: "test"} [
  //   React.createElement("li", {}, "Ich bin ein Element in der Liste Komponente"),
  //   React.createElement("li", {}, "Ich bin ein Element in der Liste Komponente"),
  // ])

  return (
    <>
      <ul>
        <li>Ich bin ein Element in der Liste-Komponente</li>
        <li>Ich bin ein Element in der Liste-Komponente</li>
        <li>Ich bin ein Element in der Liste-Komponente</li>
      </ul>
    </>
  )
}
