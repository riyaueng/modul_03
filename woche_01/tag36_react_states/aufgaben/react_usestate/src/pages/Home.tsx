import React from "react"
import "../pages/Home.css"
import FaqSection from "../components/faqSection/FaqSection"
import CounterSection from "../components/counterSection/CounterSection"

export default function Home() {
  return (
    <>
      <FaqSection />
      <CounterSection />
    </>
  )
}
