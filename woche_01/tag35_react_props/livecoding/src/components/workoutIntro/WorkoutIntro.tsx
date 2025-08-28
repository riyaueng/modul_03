import React from "react"
import "./WorkoutIntro.css"

interface IntroProps {
  title: string
  text: string
  urlImg: string
  reverse?: boolean
}

export default function WorkoutIntro(props: IntroProps) {
  return (
    <>
      <section className={`intro ${props.reverse && "spiegelverkehrt"}`}>
        <div>
          <h2>{props.title}</h2>
          <p>{props.text}</p>
          <a href="#">See more</a>
        </div>
        <img src={props.urlImg} alt="" />
      </section>
    </>
  )
}
