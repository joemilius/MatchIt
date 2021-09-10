import React, {useState} from 'react'

const Card = ({card, cardNumber, cardId, setCardId, createMatch, flipCount, setFlipCount}) => {
    const [flipCard, setFlipCard] = useState(false)
    console.log(cardNumber)
    
    function handleClick(){
        setFlipCard(!flipCard)
        if (cardId === ''){
            setCardId(card.id)
            setFlipCount([...flipCount, cardNumber])
        } else if (cardId === card.id){
            createMatch()
            setCardId('')
            setFlipCount([...flipCount, cardNumber])
        } else {
            setCardId('')
            setFlipCount([...flipCount, cardNumber])
            setTimeout(setFlipCount([flipCount.slice(0, -2)]), 3000)
        
        }

    }

    return (
        <div className='each-card' onClick={handleClick}>
            <div className='each-card-inner' style={flipCount.includes(cardNumber) ? {transform: 'rotateY(180deg)'}:{transform: null}}>
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
