class ProfilesController < ApplicationController

    def create_profile
        profile = Profile.create!(profile_params)
        if profile.valid?
            render json: profile, status: :created
        else
            render json: { errors: profile.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        profile = Profile.find(params[:id])
        profile.update(profile_params)
        ender json: profile, status: :accepted
    end

    private

    def profile_params
        params.permit(:first_name, :last_name, :email, :phone_number, :image, :user_id)
    end
end
