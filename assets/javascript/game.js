console.log("this page works!");

//Global Variables
//-----------------------------------------------------
var randomNumber = 0;
var gems= {
	red: 0,
	blue: 0,
	yellow: 0,
	green: 0

};
var wins = 0;
var losses = 0;
var totalScore = 0;

//console.log(gems.red * randomNumber);
//console.log(wins+2 , losses + 2, totalScore +2);


//functions to use in the code
//-----------------------------------------------------------

function compRandomNumber () {  //function generates a random number and puts in the div ID computer number

randomNumber= Math.floor((Math.random() * 120) + 12);
var compRandomNumber = "<h3>"+ randomNumber +"</h3>";
document.querySelector("#computerNumber").innerHTML=compRandomNumber;
totalScore= 0;
//console.log (randomNumber);
};





// function userChoicesNumber(){ //this function sets a specfic number for each gem

function gemsNumber() {
	var gemsNumberRed = Math.floor((Math.random() * 12) + 1);
	var gemsNumberBlue = Math.floor((Math.random() * 12) + 1);
	var gemsNumberYellow = Math.floor((Math.random() * 12) + 1);
	var gemsNumberGreen = Math.floor((Math.random() * 12) + 1);
	gems.red=gemsNumberRed;
	gems.blue=gemsNumberBlue;
	gems.yellow=gemsNumberYellow;
	gems.green=gemsNumberGreen;
	console.log(gems.red, gems.blue, gems.yellow, gems.green);

};



function gemClick (){  //function adds the click choices togetther and diplays on html
		$("#red").click(function(){
			totalScore = gems.red+totalScore;
			$("#currentScore").html(totalScore);
			console.log(totalScore);
			winsLosses();

		});

		$("#blue").click(function(){
			totalScore = gems.blue+totalScore;
			$("#currentScore").html(totalScore);
			console.log(totalScore);
			winsLosses();
		});
		$("#yellow").click(function(){
			totalScore = gems.yellow+totalScore;
			$("#currentScore").html(totalScore);
			console.log(totalScore);
			winsLosses();
		});
		$("#green").click(function(){
			totalScore = gems.green+totalScore;
			$("#currentScore").html(totalScore);
			console.log(totalScore);
			winsLosses();
		});


				

};



function winsLosses(){ //counts wins and losses
	 if (totalScore === randomNumber){
		alert("You Win!");
		wins++;
		console.log(wins);
		var winCount = "<p>Wins&nbsp;&nbsp;&nbsp;"+wins+"</p>" + "<p>Losses:" +losses+ "</p>";
		document.querySelector("#winsLosses").innerHTML=winCount;
		alert("If you want to play again, just click the play Again Box");
		$("#playAgain").click(function(){
		var newTotalScore = "<h2>0</h2>";
		document.querySelector("#currentScore").innerHTML=newTotalScore;
		game();
		});

		
	}else if (totalScore > randomNumber){
		alert ("you lost");
		losses++;
		var lossCount = "<p>Wins&nbsp;&nbsp;&nbsp;"+wins+"</p>" + "<p>Losses: "+losses+ "</p>";
		document.querySelector("#winsLosses").innerHTML=lossCount;
		alert("If you want to play again, just click the play Again Box");
		$("#playAgain").click(function(){
		var newTotalScore = "<h2>0</h2>";
		document.querySelector("#currentScore").innerHTML=newTotalScore;
		game();
		});
	}

};
//functions for the game
//---------------------------------------------------------------


function game(){
	totalScore = 0;
	randomNumber = 0;
	compRandomNumber();
	gemsNumber();
console.log(totalScore);

}

game();
gemClick();





