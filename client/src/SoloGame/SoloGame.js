import React, {useState} from 'react'
import Card from './Card'

const SoloGame = ({user}) => {
    const [showCards, setShowCards] = useState(false)
    const [flipCount, setFlipCount] = useState([])
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
    console.log(cardId)
    console.log(flipCount)

    

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
          setFlipCount([])
          setShowCards(true)
        })
        }

        function createMatch(){

        }
        

    return (
        <div className="sologame">
            <div>
                <h3>{user.username}</h3>
                <h4>Matches: </h4>
                <button onClick={createGame}>Start New Game</button>
            </div>
            <div className='game-container'>
                {showCards 
                && 
                currentGame.card_matches.length === flipCount.length 
                ? 
                <h6>🌟 Congratulations! You won the game! 🌟</h6>
                :
                null
                }
                <div className="cards" >
                    {showCards
                    &&
                    currentGame.card_matches.map((card, index) => {
                        return(
                            <Card 
                                key={index}
                                cardNumber={index} 
                                card={card} 
                                cardId={cardId} 
                                setCardId={setCardId}
                                createMatch={createMatch}
                                flipCount={flipCount}
                                setFlipCount={setFlipCount}/>
                        )
                    })
                    }
                </div >
            </div>
        </div>
    )
}

export default SoloGame
