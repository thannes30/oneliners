class LinersController < ApplicationController

# liners GET    /liners(.:format)     liners#index
#        POST   /liners(.:format)     liners#create
# liner GET    /liners/:id(.:format) liners#show
#        PATCH  /liners/:id(.:format) liners#update
#        PUT    /liners/:id(.:format) liners#update
#        DELETE /liners/:id(.:format) liners#destroy

  def index
    liners = Liner.all
    render json: liners.to_json
  end

  def show
    liner = Liner.find(params[:id])
    render json: liner.to_json
  end

  def create
    liner = Liner.create(liner_params)
    render json: liner.to_json
  end

  def update
    liner = Liner.find(params[:id])
    liner.update(liner_params)
    render json: liner.to_json
  end

  def destroy
    liner = Liner.find(params[:id])
    liner.destroy
    render json: liner.to_json
  end

  private

  def liner_params
    params.require(:liner).permit(:liner)
  end

end
