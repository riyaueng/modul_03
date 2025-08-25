import "./App.css"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"

// # Wie starten wir eine React-App
// 1. npm create vite@lates
// 2. Name aussuchen oder mit . im selben Ordner bleiben
// 3. Eintippen um weiter zu machen
// 4. React und TS+SWC auswählen
// 6. npm i oder npm install
// 7. npm run dev um das Porject zu starten

// # Ordner Struktur in React
// node_modules = Dort befinden sich alle Pakete, die für React benötigt werden (Wir könne auch Pakete hinzufügen  durch npm i "Name des Pakets")
// puplic = Dort werden die Bilder, Fonts hochgeladen/abgelegt. Hier kann man über den Pfad auf die Bilder zugreifen <img src="./puplic/bild.jpg"/>
// src = Hier erstellen wir zwei Ordner (components & pages)
// src / assets = Hier kann ich auch Bilder ablegen, muss sie aber dann über "import" importieren um diese zu benutzen
// app.css = Hier kommen nur die Styles rein, die app.tsx betreffen
// index.css = Hier kommt das globale Styling rein, z. B. <h1>, <p>… usw.

// ? Alles was man importieren soll, wird hier geschrieben!
// z. B. import {header} from "./components.tsx"

function App() {
  // * app.tsx -> Ist wie ein Verwaltungszentrum der App
  // * Hier definieren wir unsere App-Komponente
  // * Wir können unsere React-Komponenten in beliebiger FunctionSyntax auch schreiben
  // Z. B. wäre das auch korrekt => const app = () => {return…}

  // * Hier werden die Funktionen und Hooks(Werkzeuge) geschrieben

  function sayHello() {
    console.log("Hallo world")
  }

  return (
    // ? Das ist ein React Fragment (React benötigt diese Syntax!)
    // * Im DOM wird das Fragment nicht angezeigt. Wir können dem keine Class vergeben
    // * <></>

    <>
      <h2>Ich bin eine H2 Element in der App.tsx</h2>
      <Home />
      <Footer />
    </>
  )
}

export default App
