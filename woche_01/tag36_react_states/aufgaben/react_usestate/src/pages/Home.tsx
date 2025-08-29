import React from "react"
import "../pages/Home.css"
import FaqSection from "../components/faqSection/FaqSection"
import CounterSection from "../components/counterSection/CounterSection"
import FormularSection from "../components/formularSection/FormularSection"
import DarkModeSection from "../components/darkModeSection/DarkModeSection"

export default function Home() {
  return (
    <>
      <FaqSection />
      <CounterSection />
      <FormularSection />
      <DarkModeSection />
    </>
  )
}
