import { Divider } from '../Divider/Divider'
import './styles.css'
import { theme } from '../../theme';
import { Button } from '../Button/Button';
export const PokemonCard = () => {
    return (
        <article className="articleContainer">
            <div className='imageContainer'>
                <img className='image' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png' />
            </div>
            <p style={{color:theme.colors.semiBlack}} className='articleTitle'>Diatto</p>
            <p className='articleSubtitle'>Electric</p>
            <Divider/>
            <p>
                <span style={{color:theme.colors.semiBlack}} className='articleKey'>Peso: </span>
                 300kg
            </p>
            <p>
                <span style={{color:theme.colors.semiBlack}} className='articleKey'>Habilidades: </span>
                 static, lightning-rod
            </p>
            <Button onClick={()=>console.log('Hola Mundo')}/>
        </article>
    )
}
