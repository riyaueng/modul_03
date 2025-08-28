import React from "react"
import "./Hero.css"

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="content">
          <h1>Workout with me</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio ducimus sapiente qui autem nobis culpa,
            eligendi illo, consectetur atque vero earum eos similique perferendis dolorem dolore, beatae quam velit.
            Obcaecati.
          </p>
          <a href="#" className="btn-basic">
            Join Club now
          </a>

          <div>
            <p>As Featured in</p>
            <img src="/logo.png" alt="Fitness Logo" />
          </div>
          <img src="/hero.png" alt="Hero-Bild" />
        </div>
      </section>
    </>
  )
}
