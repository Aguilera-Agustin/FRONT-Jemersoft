import './style.css'
export const Searcher = () => {
    return (
        <form className='form' onSubmit={(e : React.FormEvent<HTMLFormElement>)=>e.preventDefault()}>
            <input className='searchBar' type="text" placeholder="Busca un pokemon ..." />
        </form>
    )
}
