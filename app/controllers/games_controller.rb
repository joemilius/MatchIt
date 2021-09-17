class GamesController < ApplicationController
    wrap_parameters format: []

    def index
        games = Game.where("completed = false and solo_game = false")
        render json: games, status: :ok
    end

    def create
        game = Game.create(game_params)
        render json: game, status: :created
    end

    def destroy
        game = Game.find(params[:id])
        game.destroy
        head :no_content
    end

    private

    def game_params
        params.permit(:game_name, :level, :solo_game, :completed, chairs_attributes: [:user_id, :chair_number], )
    end
end
