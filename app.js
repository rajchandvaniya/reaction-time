function startGame(){
	document.body.style.background="white";
  document.getElementById("result").innerHTML="";
	var start = document.getElementById("start");
  start.disabled = true;
  var game = document.getElementById("game");
  setTimeout(function(){
      changeBackground();
      game.disabled = false;
      window.start = new Date().getTime();
      $("#game").removeClass("disabled");
  }, Math.random()*10000);
    
}

function clicked(){
	window.end = new Date().getTime();
  window.diff = (window.end-window.start)/1000;
  var result = document.getElementById("result");
  if(window.diff < 0.2){window.message="Super Human!";}
  else if(window.diff < 0.3){window.message="You are special!"}
  else if(window.diff < 0.35){window.message="Expert!"}
  else if(window.diff < 0.7){window.message="Normal"}
  else {window.message="You can do better!"}
  result.innerHTML = `Reaction Time: ${window.diff} seconds <br>${window.message}`;
  var start = document.getElementById("start");
  start.disabled = false;
  $("#game").addClass("disabled");
    
}

function changeBackground(){
	document.body.style.background=getRandomColor();
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

$('#game').click(function (event) {
  if ($(this).hasClass('disabled')) {
        alert('Cheating not allowed :)');
  } else {
        clicked();
  }
});