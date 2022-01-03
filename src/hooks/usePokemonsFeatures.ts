import { useEffect, useState } from "react"
import { Pokemon } from '../typescript/Pokemon';

export const usePokemonsFeatures = (name: string) => {
    const [pokemon, setPokemon] = useState<Pokemon>()
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState()
    
    const fetchPokemons = async () => {
        setLoading(true)
        try {
        const response = await fetch(`http://localhost:8080/api/pokemon/features/${name.toLowerCase()}`)
        const data = await response.json()
        setPokemon(data)
        } catch (error) {
        //setError(error)
            console.log(error)
        }
        setLoading(false)
    }
    
    useEffect(() => {
        fetchPokemons()
    }, [name])
    
    return { pokemon, loading, error }
}