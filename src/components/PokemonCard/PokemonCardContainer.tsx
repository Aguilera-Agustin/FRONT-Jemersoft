import { PokemonCard } from './PokemonCard';

export const PokemonCardContainer = () => {
    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
        </div>
    )
}
