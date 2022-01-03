import { Header } from './components/Header/Header'
import { Divider } from './components/Divider/Divider';
import { Searcher } from './components/Searcher/Searcher';
import './styles.css'
import { PokemonCardContainer } from './components/PokemonCard/PokemonCardContainer';


function App() {

  return (
  <>
    <Header/>
    <Divider/>
    <Searcher/>
    <h4 className='suggestion'>Sugerencias</h4>
    <PokemonCardContainer/> 
  </>
  )
}

export default App
