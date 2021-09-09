import React, {useState} from 'react'
import Card from './Card'

const SoloGame = ({user}) => {
    const [showCards, setShowCards] = useState(false)
    const [currentGame, setCurrentGame] = useState([])
    const [cardId, setCardId] = useState('')
    const [gameData, setGameData] = useState({
        game_name: "Beginner",
        level: "easy",
        // chairs_attributes: {
        //     user_id: user.id, 
        //     chair_number: 1
        // }
    })
    console.log(currentGame.card_matches)
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
        .then(data => {
          setCurrentGame(data)
          setShowCards(true)
        })
        }
        

    return (
        <div>
            <div>
                <h3>{user.username}</h3>
                <h4>Matches: </h4>
                <button onClick={createGame}>Start New Game</button>
            </div>
            <div className="cards" >
                {showCards
                &&
                currentGame.card_matches.map((card, index) => {
                    return(
                        <Card key={index} card={card} cardId={cardId} setCardId={setCardId}/>
                    )
                })
                }
            </div >
        </div>
    )
}

export default SoloGame
