class GameChannel < ApplicationCable::Channel
    def subscribe
        if params[:user_id]
            game = Game.create(game_name: 'beginner', level: 'easy')
        else
        game = Game.find(params[:id])
        end
        stream_for game
    end

    def card_flipped(data)
        flipped = Match.create(data[:])
        ActionCable.server.broadcast("message_channel", {type: "", game_name: 'beginner'})
    end

    def unsubscribe

    end
end