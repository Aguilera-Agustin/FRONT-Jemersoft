import { PokemonCard } from './PokemonCard';

export const PokemonCardContainer = () => {
    return (
        <div style={{display:'flex', justifyContent:'center', marginBottom:'2rem'}}>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
        </div>
    )
}
