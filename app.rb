# app.rb
require 'sinatra'

class MyWebApp < Sinatra::Base
  get '/' do
  	last_modified Time.now
    erb :index
    erb :monday
    erb :tuesday
    erb :wednesday
    erb :thursday
    erb :friday
  end
end