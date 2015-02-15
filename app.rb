# app.rb
require 'sinatra'

class MyWebApp < Sinatra::Base
  get '/' do
  	last_modified Time.now
    erb :index
    
  end
end