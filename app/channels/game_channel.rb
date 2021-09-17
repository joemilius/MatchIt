class GameChannel < ApplicationCable::Channel
    def subscribed
        if params[:create]
            @game = Game.create(game_name: Faker::FunnyName.name, level: 'easy', solo_game: false, completed: false)
            response = "Game Created.  Waiting for Opponent..."
        else
            @game = Game.find(params[:id])
            user = User.find(params[:user_id])
            response = "#{user.username} has joined the game."
        end
        
        stream_for @game

        broadcast_to(@game, {type: "joined", message: response, game:GameSerializer.new(@game)})
    end

    def card_flipped(data)
        broadcast_to(@game, {type: "flipped", card_id: data['card_id'], card_index: data['card_index'], current_card: data['current_card']})
    end

    def unsubscribed
        @game.destroy
    end
end