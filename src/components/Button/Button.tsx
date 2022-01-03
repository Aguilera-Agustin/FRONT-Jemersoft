import './styles.css'

interface Props {
    onClick: () => void
}

export const Button = ( { onClick }:Props ) => {
    return (
        <div className='buttonContainer'>
            <button onClick={onClick} className='button'>
                Ver más
            </button>
        </div>
    )
}
