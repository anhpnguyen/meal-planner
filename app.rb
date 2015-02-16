# app.rb
require 'sinatra'

class MyWebApp < Sinatra::Base
  get '/' do
  	last_modified Time.now
    erb :index
  end
  get '/:day' do
  	layout false
    erb params[:day].to_sym
  end
end