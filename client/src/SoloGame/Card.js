import React, {useState} from 'react'

const Card = ({card, cardId, setCardId}) => {
    const [flipCard, setFlipCard] = useState(false)
    
    function handleClick(){
        setFlipCard(!flipCard)
    }

    return (
        <div className='each-card' onClick={handleClick}>
            <div className='each-card-inner' style={flipCard ? {transform: 'rotateY(180deg)'}:{transform: null}}>
                <div className='each-card-front'>

                </div>
                <div className='each-card-back' style={{border: `.5em solid ${card.color}`}}>
                    <h1>{card.icon}</h1>
                </div>
                
            </div>
        </div>
    )
}

export default Card
