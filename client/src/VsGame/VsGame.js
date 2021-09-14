import React, {useState} from 'react'
import {Button} from 'react-bootstrap'

const VsGame = ({user}) => {
    const [matches, setMatches] = useState([])
    // let socketGame = new WebSocket(`ws://localhost:3000/cable`)

    // const handleCardFlip = (e) => {
    //     e.preventDefault()

    //     let cardFlip = {
    //         command: 'message',
    //         identifier: JSON.stringify({channel: "GameChannel", }),
    //         data: JSON.stringify({
    //             action: "card_flipped",
    //             card_id: e.target
    //         })
    //     }
    //     socketGame.send(JSON.stringify(cardFlip))
    // }

    // function handleCreateGame(e){
        
    //     socketGame.onopen = (e) => {
    //         let message = {
    //             command: "subscribe",
    //             identifier: JSON.stringify({channel: "GameChannel", user_id: user.id})
    //         }
    //         socketGame.send(JSON.stringify(game))
    //     }
    //     socketGame.onmessage = (e) => {
    //         const serverResponse = JSON.parse(e.data)
    //         if (serverResponse.type === "ping") return
    //         const data = serverResponse.message
    //         if (data && data.type === 'new_match') {
    //             setMatches((pairs) => [...pairs, data.new_match.content])
    //         }
    //     }
    // }
    // return (
    //     <div className="vsgame">
    //         <div>
    //             <h3>{user.username}</h3>
    //             <h4>Matches: </h4>
    //             <style type="text/css">
    //                 {`
    //                 .btn-custom {
    //                     background-color: #FFFAFA;
    //                     color: #66CDAA;
    //                 }
    //                 .btn-custom:hover {
    //                     background-color: #CD853F;
    //                     color: #66CDAA
    //                     border: .2em solid #66CDAA;
    //                 }
                    
    //                 `}
    //             </style>
    //             <Button variant="custom" onClick={handleCreateGame}>Start New Game</Button>
    //         </div>
    //     </div>
    // )
}

export default VsGame
