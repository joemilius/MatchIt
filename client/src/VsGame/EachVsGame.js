import React from 'react'

const Game = ({userId, gameId, gameName, level, vsGame, identifier, setShowCards, setCurrentGame, setYourTurn, setFlipCount, resetGame, handleClick}) => {

    function joinGame(){
        if(!vsGame.current){


        let socketGame = new WebSocket(`ws://localhost:3000/cable`)
        vsGame.current = socketGame
        identifier.current = {channel: "GameChannel", id: gameId, user_id: userId}

        socketGame.onopen = (e) => {
            let game = {
                command: "subscribe",
                identifier: JSON.stringify(identifier.current)
            }
            socketGame.send(JSON.stringify(game))
        }
        socketGame.onmessage = (e) => {
            const serverResponse = JSON.parse(e.data)
            if (serverResponse.type === "ping") return
            const data = serverResponse.message
            if (data && data.type === 'joined') {
                setCurrentGame(data.game)
                setShowCards(true)
                setYourTurn(true)
            }
            if (data && data.type === 'flipped') {
                handleClick( data.card_id, data.card_index, data.current_card, socketGame)
            }
        }
        socketGame.onclose = (e) => {
            setTimeout(resetGame, 3000)
        }
        }
    }

    return (
        <div className="vsgames" onClick={joinGame}>
            <div>
                <h3>{gameName}</h3>
            </div>
        </div>
    )
}

export default Game
