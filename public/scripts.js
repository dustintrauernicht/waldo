window.addEventListener("load", function(){

	var starttime = Date.now();
	var picclick = document.getElementById("picture");

	var coordinates = function(event){
		clickcoordinates = [];
		clickcoordinates[0] = event.offsetX;
		clickcoordinates[1] = event.offsetY;
		var request = new XMLHttpRequest();
		request.open('GET', 'http://localhost:4567/check?x=' + clickcoordinates[0] + '&y=' + clickcoordinates[1]);
		request.send();

		request.addEventListener("load", getscore)
	}

	var getscore = function(event){
      var response = "false";
  
      if (event.target.response === "true"){
        response = "true";
      }
      if (response === "true"){
      	displayModal(event);
      }
	}

	function stoptimer(event){
		var endtime = Date.now();
		var totaltime = endtime - starttime;
		return totaltime;
	}

	function displayModal(event){
		var time = stoptimer(event)
  		var modal = document.getElementById("modal");
  		var modalcontent = document.getElementById("modalcontent");
  		var modaltime = document.getElementById("modalTimer").childNodes[1];
  		modal.style.display = "block";
  		modalcontent.style.display = "block";
  		modaltime.innerHTML = time/1000 + "seconds";
  		clearTimeout(t);
  		get_dom_data();
	}

	window.addEventListener("click", function() {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	});

	picclick.addEventListener("click", function(event){
		coordinates(event);
	});

	var p = document.getElementsByTagName('p')[0],
    seconds = 0, minutes = 0, hours = 0,
    t;
	function add() {
    	seconds++;
    	if (seconds >= 60) {
        	seconds = 0;
        	minutes++;
        	if (minutes >= 60) {
          		minutes = 0;
           		hours++;
        	}
    	}
    	p.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
		timer();
	}

	function timer() {
    	t = setTimeout(add, 1000);
	}

	timer();

	var get_dom_data = function() {
		var time = stoptimer(event)
		var score = ""
		score += time/1000
		var query = "?saved=" + score;
		var request = new XMLHttpRequest();
		request.open("GET", "/highscores" + query);
		request.send()
		return httpRequest.responseText;
	};
});