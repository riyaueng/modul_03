// 1. Zuerst wird hier mit Methode createContext ein Kontext erstellt und direkt exportiert.
// 2. Die erstellte Variable hat eine Eigenschaft namens "Provider"
// 3. Der Provider isrt wie eine Teleportstation, in der die Daten ausgelagert werden und können jederzeit sich hin und her bewegen ohne Einschränkungen
// 4. Danach sollte in dieser Datei eine Funktion erstellt werden bzw. eine Komponente
// 5. Die Funktion hat einen Parameter als Obj, die normalerweise als children geschrieben wird von Type her ist es ReactNode
// 6. Der Parameter children sollte zwischen erstellten Variablen und mainContext gewrappt werden
// 7. Der mainContext.Provider besitzt noch eine andere Eigenschaft und zwar "value"
// 8. Am Ende dieser Datei sollte in main.tsx importiert werden

import { createContext, useEffect, useState } from "react"
import type { ICharacter, IEpisode, ILocation } from "../interfaces/Interfaces"
import axios from "axios"

// eslint-disable-next-line react-refresh/only-export-components
export const mainContext = createContext<MainProviderProps | null>(null)

type DataType = ICharacter | ILocation | IEpisode

export interface MainProviderProps {
  items: DataType[]
  setLink: React.Dispatch<React.SetStateAction<string | undefined>>
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MainProvider({ children }: { children: React.ReactNode }) {
  const [link, setLink] = useState<string | undefined>("")
  const [items, setItems] = useState<any>([]) // eslint-disable-line @typescript-eslint/no-explicit-any
  const [darkMode, setDarkMode] = useState<boolean>(false)

  console.log(link)

  useEffect(() => {
    const getData = async () => {
      let url = ""
      if (link) {
        if (link === "character") {
          url = "https://rickandmortyapi.com/api/character"
        } else if (link === "location") {
          url = "https://rickandmortyapi.com/api/location"
        } else if (link === "episode") {
          url = "https://rickandmortyapi.com/api/episode"
        }
        try {
          const resp = await axios.get(url)
          if (resp.data.results) {
            setItems(resp.data.results)
          }
        } catch (error) {
          console.error("Irgendwas ist schief gelaufen.", error)
        }
      }
    }
    getData()
  }, [link])

  // ? Hier werden unsere States als value übergeben oder werden in einer "Teleportstation" gespeichert
  return <mainContext.Provider value={{ items, setLink, darkMode, setDarkMode }}>{children}</mainContext.Provider>
}
