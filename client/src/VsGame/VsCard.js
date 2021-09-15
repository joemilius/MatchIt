import React from 'react'


const VsCard = ({card, cardNumber, userId, gameId, cardId, setCardId, yourTurn, vsGame, identifier, flipCount, setFlipCount, socketGame, handleClick}) => {
    
    const handleCardFlip = (e) => {
        e.preventDefault()
        console.log('handle card flip')
        let cardFlip = {
            command: 'message',
            identifier: JSON.stringify(identifier.current),
            data: JSON.stringify({
                action: "card_flipped",
                card_index: cardNumber,
                card_id: card.id,
                current_card: cardId,
            })
        }
        vsGame.current.send(JSON.stringify(cardFlip))
    }
    


        

    return (
        <div className='each-card' onClick={yourTurn && !flipCount.includes(cardNumber) ? handleCardFlip : null}>
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


export default VsCard
