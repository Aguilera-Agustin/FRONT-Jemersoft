import './style.css'
import { PokemonCardContainer } from '../PokemonCard/PokemonCardContainer';
import { useSearcher } from '../../hooks/useSearcher';
export const Searcher = () => {

    const { handleChange, value, searchValue, handleOnSend } = useSearcher()
    
    const handleOnSubmit = ( e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleOnSend();

        
    }

    return (
        <>
        <form className='form' onSubmit={handleOnSubmit}>
            <input onChange={handleChange} className='searchBar' type="text" placeholder="Busca un pokemon ..." />
        </form>
        <h4 className='suggestion'>Resultado</h4>
        <PokemonCardContainer name={searchValue}/>
        </>
    )
}
