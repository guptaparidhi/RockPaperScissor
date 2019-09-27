let userScore = 0; 
let compScore = 0;
let userScore_span = document.getElementById("user-score"); 
let compScore_span = document.getElementById("comp-score");
let scoreBoard_div = document.querySelector(".score-board"); 
let result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock"); 
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor"); 

function getCompChoice(){
	const choices = ["Rock", "Paper", "Scissor"];
	const index = Math.floor(Math.random()*3);
	return choices[index];
}

function win(user, comp){
	userScore++;
	userScore_span.innerHTML = userScore;
	result_div.innerHTML = user+" beats "+comp+". You Win!";
}
function lose(user, comp){
	compScore++;
	compScore_span.innerHTML = compScore;
	result_div.innerHTML = comp+" beats "+user+". You Lose!";
}
function tie(){
	result_div.innerHTML = "It's a Tie!";
}

function game(userChoice){
	const compChoice = getCompChoice();
	switch(userChoice+compChoice){
		case "RockScissor":
		case "PaperRock":
		case "ScissorPaper":
			win(userChoice, compChoice);
			break;
		case "ScissorRock":
		case "RockPaper":
		case "PaperScissor":
			lose(userChoice, compChoice);
			break;
		case "ScissorScissor":
		case "RockRock":
		case "PaperPaper":
			tie();
			break;
	}
}

function main(){
	rock_div.addEventListener('click', function(){
		game("Rock");
	})

	paper_div.addEventListener('click', function(){
		game("Paper");
	})

	scissor_div.addEventListener('click', function(){
		game("Scissor");
	})
}

main();