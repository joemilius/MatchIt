import React, {useState, useRef, useEffect} from 'react'
import VsCard from './VsCard'
import EachVsGame from './EachVsGame'
import {Button} from 'react-bootstrap'

const VsGame = ({user}) => {
    const [matches, setMatches] = useState([])
    const [showCards, setShowCards] = useState(false)
    const [vsGames, setVsGames] = useState([])
    const [currentGame, setCurrentGame] = useState([])
    const [cardId, setCardId] = useState('')
    const [flipCount, setFlipCount] = useState([])
    const [yourTurn, setYourTurn] = useState(false)

    console.log(currentGame)
    console.log(cardId)
    
    const vsGame = useRef(null)
    const identifier = useRef(null)

    useEffect(() => {
        fetch('/games')
        .then(response => response.json())
        .then(data => setVsGames(data))
    }, [currentGame])
    
    function handleCreateGame(e){
        if (!vsGame.current) {
        let socketGame = new WebSocket(`ws://localhost:3000/cable`)
        identifier.current = {channel: "GameChannel", create: true, user_id: user.id}
        vsGame.current = socketGame
        
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
            }
            if (data && data.type === 'flipped') {
                handleClick( data.card_id, data.card_index, data.current_card, socketGame)
            }
            console.log(serverResponse)
        }
        socketGame.onclose = (e) => {
            setShowCards(false)
            setCurrentGame([])
            setYourTurn(false)
            setFlipCount([])

            vsGame.current = null
        }
        }
    }


        function handleClick(card_id, card_index, current_card, socketGame){
            if (current_card === ''){
                setCardId(card_id)
                setFlipCount((flipCount) => [...flipCount, card_index])
            } else if (current_card === card_id){
                setCardId('')
                setFlipCount((flipCount) => [...flipCount, card_index])
                let currentYourTurn = ''
                setYourTurn((yourTurn) => {
                    currentYourTurn = yourTurn
                    return !yourTurn})
                    if(currentYourTurn){
                        console.log( "increase score by 1")
                    } else {
                        console.log("increase opponets score by 1")
                    }
                     endGame(socketGame)
            } else {
                setCardId('')
                setFlipCount((flipCount) => {
                    console.log(flipCount)
                    return [...flipCount, card_index]})
                setTimeout(removeCards, 1000)
                setYourTurn((yourTurn) => !yourTurn)
            }

    
        }
        console.log(yourTurn)
        

        function removeCards(){
            setFlipCount((flipCount) => flipCount.slice(0, flipCount.length - 2))
        }

        function endGame(socketGame){
            let cardMatchesLength
            let flipCountLength
            setFlipCount((flipCount) => {
                flipCountLength = flipCount.length
                return flipCount
            })
            setCurrentGame((currentGame) => {
                cardMatchesLength = currentGame.card_matches.length
                return currentGame
            })
            if(cardMatchesLength === flipCountLength){
                socketGame.close()
            }
        }

        console.log(flipCount)

    
    return (
        <div className="vsgame">
            <div>
                <h3>{user.username}</h3>
                <h4>Matches: </h4>
                <style type="text/css">
                    {`
                    .btn-custom {
                        background-color: #FFFAFA;
                        color: #66CDAA;
                    }
                    .btn-custom:hover {
                        background-color: #CD853F;
                        color: #66CDAA
                        border: .2em solid #66CDAA;
                    }
                    
                    `}
                </style>
                <Button variant="custom" onClick={handleCreateGame}>Start New Game</Button>
            </div>
            <div>{currentGame.users?.find(player => {
                    return player.id !== user.id
                    })?.username}
            </div>
            <div className='game-container'>
                <div className="cards" >
                    {showCards
                    &&
                    currentGame.card_matches.map((card, index) => {
                        return(
                            <VsCard 
                                key={index}
                                cardNumber={index} 
                                card={card} 
                                cardId={cardId}
                                userId={user.id}
                                gameId={currentGame.id}
                                yourTurn={yourTurn}
                                vsGame={vsGame}
                                setCardId={setCardId}
                                socketGame={vsGame.current}
                                identifier={identifier}
                                flipCount={flipCount}
                                handleClick={handleClick}
                                setFlipCount={setFlipCount}
                                />
                        )
                    })
                    }
                </div >
            </div>
            <div>
                {vsGames?.map(game => {
                    return (
                    <EachVsGame 
                        key={game.id}
                        userId={user.id}
                        gameId={game.id}
                        gameName={game.game_name}
                        level={game.level}
                        vsGame={vsGame}
                        handleClick={handleClick}
                        setCurrentGame={setCurrentGame}
                        identifier={identifier}
                        setShowCards={setShowCards}
                        setYourTurn={setYourTurn}
                        setFlipCount={setFlipCount}
                    />
                    )
                })}
            </div>
        </div>
    )
}

export default VsGame
