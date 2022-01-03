import { Divider } from '../Divider/Divider'
import './styles.css'
import { theme } from '../../theme';
import { Button } from '../Button/Button';

interface Props {
    name: string;
    image: string;
    type: string[];
    onClick: () => void;
    weight: string;
    abilities: string[];
}

export const PokemonCard = ( { name, image, type, onClick, weight, abilities }:Props ) => {
    return (
        <article className="articleContainer">
            <div className='imageContainer'>
                <img className='image' src={image} />
            </div>
            <p style={{color:theme.colors.semiBlack}} className='articleTitle'>{name}</p>
            <p className='articleSubtitle'>{type.join(',')}</p>
            <Divider/>
            <p>
                <span style={{color:theme.colors.semiBlack}} className='articleKey'>Peso: </span>
                 {`${weight}kg`}
            </p>
            <p>
                <span style={{color:theme.colors.semiBlack}} className='articleKey'>Habilidades: </span>
                 {abilities.join('-')}
            </p>
            <Button onClick={onClick}/>
        </article>
    )
}
