def checktrue(x, y)
	xcoord = x.to_i
	ycoord = y.to_i
	if (xcoord > 905) && (xcoord < 945) && (ycoord > 55) && (ycoord < 90)
		return "true"
	else
		return "false"
	end
end