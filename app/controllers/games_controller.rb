class GamesController < ApplicationController
    wrap_parameters format: []

    def create
        game = Game.create(game_params)
        render json: game, status: :created
    end

    private

    def game_params
        params.permit(:game_name, :level, chairs_attributes: [:user_id, :chair_number], )
    end
end
