import { PokemonCard } from './PokemonCard';
import { usePokemonsFeatures } from '../../hooks/usePokemonsFeatures';


interface Props {
    name: string;
}

export const PokemonCardContainer = ({name}: Props) => {
    const { error, loading, pokemon } = usePokemonsFeatures(name)
    const getPokemon = () => {
        if(pokemon) {
            const { name, picture, type, weight, abilities } = pokemon;
                return  <PokemonCard name={name}  
                            image={picture}
                            type={type}
                            onClick={()=>{}}
                            weight={weight as unknown as string}
                            abilities={abilities} 
                        />
        }
    }
    return (
        <div style={{display:'flex', justifyContent:'center', marginBottom:'2rem'}}>
            {!loading &&( 
                getPokemon()
            )}
        </div>
    )
}
