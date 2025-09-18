import React, { createContext, useEffect, useReducer } from "react"
import type { IState, TAction } from "../interfaces/Interfaces"
import { reducer } from "../functions/Functions"
import axios from "axios"

export interface MainProviderProps {
  states: IState
  dispatch: React.Dispatch<TAction>
}

// eslint-disable-next-line react-refresh/only-export-components
export const mainContext = createContext<MainProviderProps | undefined>(undefined)

export default function MainProvider({ children }: { children: React.ReactNode }) {
  // useReducer => ist die optimierte Version von useState
  // useReducer besteht aus drei Sachen:

  // * states => Das aktuelle Menü von einem Restaurant (Products)
  // * dispatch => Der kellner, der die Anfrage bzw. Bestellung an die Küche weiterleiten und dann das essen zurück an den Tisch
  // * reducer => ist die Küche, wo entschieden wird, was genau gekocht an

  const [states, dispatch] = useReducer(reducer, { products: [], loading: false, error: null })

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_START" })
      try {
        const resp = await axios.get("https://fakestoreapi.com/products")
        dispatch({ type: "FETCH_SUCCESS", payload: resp.data })
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: "Fehler beim Fetchen." })
      }
    }
    fetchData()
  }, [])

  return <mainContext.Provider value={{ states, dispatch }}>{children}</mainContext.Provider>
}
