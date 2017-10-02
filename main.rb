require "sinatra"
require "pry"
require "CSV"
require_relative "functions.rb"

get '/' do
  erb(:game)
end

get '/check' do
	x = params["x"]
	y = params["y"]
	checktrue(x,y)
end

get '/highscores' do
	sentstring = params["saved"]
	saveLine = sentstring.chomp
	open("scores.txt", "a") { |file|
		str = ""
		str << saveLine
		str << "\n"

		file << str
	}
end