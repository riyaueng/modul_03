// Die Funktion hat immer zwei Parameter: state und action

import { useContext } from "react"
import type { IState, TAction } from "../interfaces/Interfaces"
import { mainContext } from "../context/MainProvider"

export const reducer = (state: IState, action: TAction): IState => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null }
    case "FETCH_SUCCESS":
      return { ...state, loading: false, products: action.payload }
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload }
  }
}

export const useProducts = () => {
  const context = useContext(mainContext)
  if (!context) {
    throw new Error("useContext funktioniert nicht")
  }
  return context
}
