import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router"

type Pokemon = {
  id: number
  name: string
  height: number
  weight: number
  cries: {
    latest: string
    legacy: string
  }
  sprites: {
    back_default: string
    front_default: string
  }
}

export default function PokemonDetail() {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await response.json()
        setPokemon(data)
        const audio = new Audio(data.cries.legacy)
        audio.play()
      } catch (e) {
        console.log(e)
      }
    }
    fetchPokemon()
  }, [id])

  if (!pokemon) {
    return "404 Pokemon nicht gefangen!"
  }

  // pixelated

  return (
    <>
      <div className="flex gap-4">
        <img src={pokemon.sprites.front_default} alt="" className="w-48 [image-rendering:pixelated]" />
        <div>
          <h2 className="text-5xl">{pokemon.name}</h2>
          <p>Weight: {pokemon.weight}</p>
          <p>Height: {pokemon.height}</p>
        </div>
      </div>
      <div className="flex justify-between">
        {Number(id) > 1 && <Link to={`/pokemon/${Number(id) - 1}`}>Zurück</Link>}
        {Number(id) < 151 && <Link to={`/pokemon/${Number(id) + 1}`}>Weiter</Link>}
      </div>
    </>
  )
}
