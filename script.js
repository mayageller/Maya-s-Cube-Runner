document.addEventListener("keydown", movePlayer);

var obstacleBox = document.getElementById("obstacle");
var obstacleCircle = document.getElementById("obstacle2");
var obstacleCircle2 = document.getElementById("obstacle3");

var playerBox = document.getElementById("player");
var playerTop = 200;
var playerLeft = 200;
// 38 up
// 37 left
// 40 down
// 39 right


function movePlayer(event) {
if(event.keyCode == 38) {
  playerTop = playerTop - 10;
playerBox.style.top = playerTop + "px";
} else if(event.keyCode == 40) {
  playerTop = playerTop + 10;
  playerBox.style.top = playerTop + "px";
} else if(event.keyCode == 37) {
  playerLeft = playerLeft - 10;
  playerBox.style.left = playerLeft + "px";
} else if(event.keyCode == 39) {
  playerLeft = playerLeft + 10;
  playerBox.style.left = playerLeft + "px";
 }
}

var obstacleTop = 0;
var oldNumber = 0;


function moveObstacle() {

if(oldNumber < Math.floor (obstacleTop/window.innerHeight)) {
  obstacleBox.style.left = (Math.random() * window.innerWidth) + "px";
}

oldNumber = Math.floor(obstacleTop / window.innerHeight);

  obstacleTop = obstacleTop + 5;
 obstacleBox.style.top = (obstacleTop  % window.innerHeight) + "px";
 setTimeout(moveObstacle, 30);
}

window.addEventListener("load", moveObstacle);



var obstacleTop2 = 0;
var oldNumber2 = 0;

function moveObstacle2() {

  if(oldNumber2 < Math.floor (obstacleTop2/window.innerHeight)) {
  obstacleCircle.style.left = (Math.random() * window.innerWidth) + "px";
}

oldNumber2 = Math.floor(obstacleTop2 / window.innerHeight);

  obstacleTop2 = obstacleTop2 + 5;
 obstacleCircle.style.top = (obstacleTop2  % window.innerHeight) + "px";
 setTimeout(moveObstacle2, 20);
}


window.addEventListener("load", moveObstacle2);

var obstacleTop3 = 0;
var oldNumber3 = 0;

function moveObstacle3() {

  if(oldNumber3 < Math.floor (obstacleTop3/window.innerHeight)) {
  obstacleCircle2.style.left = (Math.random() * window.innerWidth) + "px";
}

oldNumber3 = Math.floor(obstacleTop3 / window.innerHeight);

  obstacleTop3 = obstacleTop3 + 5;
 obstacleCircle2.style.top = (obstacleTop3  % window.innerHeight) + "px";
 setTimeout(moveObstacle3, 40);
}


window.addEventListener("load", moveObstacle3);