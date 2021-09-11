import React from 'react'

const VsGame = ({user}) => {
    return (
        <div>
            <div>
                <h3>{user.username}</h3>
                <h4>Matches: </h4>
                <button onClick={null}>Start New Game</button>
            </div>
        </div>
    )
}

export default VsGame
