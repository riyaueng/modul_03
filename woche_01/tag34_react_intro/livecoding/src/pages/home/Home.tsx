// ? Simple React Snippets => sfc
// ? ES7 + Reacts/Redux => rfc

import React from "react"
import Liste from "../../components/liste/Liste"
import Header from "../../components/header/Header"

export default function Home() {
  // * selbstgeschriebene Komponente wie z. B. Liste werden groß geschrieben um sie von eingebauten HTML-Elemente zu unterscheiden

  return (
    <>
      <Header />
      <main>
        <h2>Ich bin auf der Home-Seite</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium velit possimus, ad magni expedita,
          molestiae voluptate labore ab tempore animi ipsam odio et amet delectus quasi, incidunt excepturi quod?
        </p>

        <Liste />

        <ol>
          <li>Ich bin das erste Element</li>
          <li>Ich bin das zweite Element</li>
          <li>Ich bin das dritte Element</li>
        </ol>
      </main>
    </>
  )
}
