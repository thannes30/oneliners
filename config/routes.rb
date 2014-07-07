Rails.application.routes.draw do

  resources :liners, except: [:new, :edit]

end
