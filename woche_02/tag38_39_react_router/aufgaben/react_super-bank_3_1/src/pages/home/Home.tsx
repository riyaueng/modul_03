import React, { useState } from "react"
import { CreditCard } from "react-kawaii"

export default function Home() {
  // const kawaiEmoji = () => <Browser size={200} mood="happy" color="#72ceff" />

  const [giro, setGiro] = useState<number>(0)
  const [inputNumber, setInputNumber] = useState<string>("")

  const addGiro = () => {
    const money = Number(inputNumber)
    setGiro(giro + money)
    setInputNumber("")
  }

  const subGiro = () => {
    const money = Number(inputNumber)
    setGiro(giro - money)
    setInputNumber("")
  }

  const changeMoodCard = () => {
    if (giro < 0) return "sad"
    if (giro < 2000 && giro > 0) return "happy"
    if (giro > 2000) return "blissful"
  }

  return (
    <>
      <header className="flex justify-center flex-col items-center relative">
        <div className="wrapper_emoji">
          <CreditCard size={360} mood={changeMoodCard()} color="#72ceff" className="w-full h-auto" />
        </div>
        <h1 className="text-white text-4xl absolute top-75 font-robotSerif uppercase">Super Bank</h1>
      </header>
      <main>
        <form className="flex justify-center flex-col items-center gap-4 rounded-lg bg-[#72ceff] w-96 h-64 ">
          <h2 className="font-bold">Dein Girokonto</h2>

          <div className="output_giro text-4xl">{giro} €</div>

          <input
            value={inputNumber}
            onChange={(event) => setInputNumber(event.target.value)}
            type="text"
            min="1"
            required
            placeholder="Gib deinen Betrag ein"
            className="bg-white rounded-sm w-72 h-12 border-1 pl-2"
          />

          <div className="flex justify-center items-center gap-2">
            <button className="w-32 h-8 border-1 border-r-2 border-b-2 rounded-sm" onClick={addGiro}>
              Einzahlen
            </button>
            <button className="w-32 h-8 border-1 border-r-2 border-b-2 rounded-sm" onClick={subGiro}>
              Auszahlen
            </button>
          </div>
        </form>
      </main>
    </>
  )
}
