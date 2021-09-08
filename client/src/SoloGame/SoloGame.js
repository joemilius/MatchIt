import React, {useState} from 'react'
import Card from './Card'

const SoloGame = ({user}) => {
    const [currentGame, setCurrentGame] = useState([])
    const [gameData, setGameData] = useState({
        game_name: "Beginner",
        level: "easy",
        // chairs_attributes: {
        //     user_id: user.id, 
        //     chair_number: 1
        // }
    })
    console.log(currentGame)
    console.log(user.id)

    function createGame(){
        fetch("/games", {
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(gameData)
        })
        .then(response => response.json())
        .then(data => setCurrentGame(data))
    }

    return (
        <div>
            <h3>{user.username}</h3>
            <h4>Matches: </h4>
            <button onClick={createGame}>Start New Game</button>
            <div>
                {currentGame && currentGame.card_matches.map(card => {
                    return(
                        <Card key={card.id} card={card} />
                    )
                })}
            </div>
        </div>
    )
}

export default SoloGame
