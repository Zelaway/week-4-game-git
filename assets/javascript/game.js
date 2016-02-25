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
//console.log (randomNumber);
}





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



function gemClick (){
		$("#red").click(function(){
			totalScore = gems.red+totalScore;
			$("#currentScore").html(totalScore);
			console.log(totalScore);
		});

		$("#blue").click(function(){
			totalScore = gems.blue+totalScore;
			$("#currentScore").html(totalScore);
			console.log(totalScore);
		});
		$("#yellow").click(function(){
			totalScore = gems.yellow+totalScore;
			$("#currentScore").html(totalScore);
			console.log(totalScore);
		});
		$("#green").click(function(){
			totalScore = gems.green+totalScore;
			$("#currentScore").html(totalScore);
			console.log(totalScore);
		});


				

};



function winsLosses(){
	if (totalScore === randomNumber){
		alert("You Win!");
		wins++;
		var winCount = "<p>Wins&nbsp;&nbsp;&nbsp;"+wins+"</p>" + "<p>Losses: 0 </p>";
		document.querySelector("#winsLosses").innerHTML=winCount;

		
	}else if (totalScore > randomNumber){
		alert ("you lost");
		losses++;
		var lossCount = "<p>Wins&nbsp;&nbsp;&nbsp;"+wins+"</p>" + "<p>Losses: "+losses+ "</p>";
		document.querySelector("#winsLosses").innerHTML=lossCount;
		
	}

};


 

//functions for the game
//---------------------------------------------------------------

function game(){
	compRandomNumber();
	gemsNumber();
	gemClick();
	winsLosses();

}

game();






