var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1 ;
var image1Address = "images/dice"+randomNumber1+".png";
var image2Address = "images/dice"+randomNumber2+".png";

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];
image1.setAttribute("src",image1Address);
image2.setAttribute("src",image2Address);
var winner = document.querySelector("h1");
if (randomNumber1>randomNumber2){
  winner.innerHTML = "🚩Player 1 Wins !!";
}else if (randomNumber1<randomNumber2){
  winner.innerHTML = "🚩Player 2 Wins !!";
}else{
  winner.innerHTML = "Draw!";
}
