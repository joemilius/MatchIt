import React, {useState} from 'react'

const Card = ({card, cardNumber, cardId, setCardId, matches, setMatches, flipCount, setFlipCount}) => {
    const [unflippedCard, setUnflippedCard] = useState(false)

    function handleClick(){
        if (cardId === ''){
            setCardId(card.id)
            setFlipCount([...flipCount, cardNumber])
        } else if (cardId === card.id){
            setCardId('')
            setFlipCount([...flipCount, cardNumber])
            setMatches(matches + 1)
        } else {
            setCardId('')
            setFlipCount([...flipCount, cardNumber])
            setTimeout(removeCards, 1000)
        
        }

    }

    function removeCards(){
        setFlipCount(flipCount.splice(0, flipCount.length - 1))
    }

    return (
        <div className='each-card' onClick={!flipCount.includes(cardNumber)? handleClick : null}>
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
