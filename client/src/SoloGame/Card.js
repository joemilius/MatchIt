import React from 'react'

const Card = ({card}) => {
    return (
        <div style={{borderColor: card.color}}>
            <h1>{card.icon}</h1>
        </div>
    )
}

export default Card
