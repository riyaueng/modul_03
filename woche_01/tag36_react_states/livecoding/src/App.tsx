import { useState } from "react"
import "./App.css"
import CounterComponent from "./components/counterComponent/CounterComponent"
import Formular from "./pages/formular/Formular"
import type { ICar } from "./interfaces/ICars"
import cars from "./data/cars"
import ListItem from "./components/listItem/ListItem"
import { Notifications, UserProfil } from "./Recap"

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  console.log(darkMode)

  const [data] = useState<ICar[]>(cars)
  console.log(data)

  return (
    // ? Alternative -> className={darkMode ? "dark" : "light"}
    <div className={`${darkMode ? "dark" : "light"}`}>
      <button onClick={() => setDarkMode(!darkMode)}>
        <img src="../public/icon_dark-light-mode.png" alt="Icon" />
      </button>
      <CounterComponent />
      <Formular />
      <ListItem carsArray={data} />

      <br />
      <br />
      <br />

      <UserProfil name="Joe" />
      <UserProfil name={null} />
      <UserProfil />
      <UserProfil name="" />

      <br />
      <br />
      <br />

      <Notifications count={3} />
      <Notifications count={0} />
      <Notifications count={null} />
    </div>
  )
}

export default App
