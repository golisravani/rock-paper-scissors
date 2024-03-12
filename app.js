let userScore=0;
let compScore=0;
const scoreBoard = document.querySelector(".score-board");
const user_score = document.getElementById("user-score");
const comp_score = document.getElementById("comp-score");
const result = document.querySelector(".result >p"); //here we use >p because we have the result inside p tag
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");


function computerChoice(){
    const choice = ['rock', 'paper' , 'scissors'];
   const randomNumber= Math.floor(Math.random()*3);
   return choice[randomNumber];
}

function convert(word){              //this function is  written to change the word rock to Rock and etc 
  if (word === "rock") return "Rock" ;
  if (word === "paper") return "Paper" ;
  return "Scisssors" ;

}



function win(userChoice , compChoice){
    const userChoice_glow = document.getElementById( userChoice);
    userScore++;
    user_score.innerHTML= userScore;
    comp_score.innerHTML= compScore;
    result.innerHTML= `${convert(userChoice)}(user) beats ${convert(compChoice)}(comp) . You win!!`;
    document.getElementById(userChoice).classList.add('green-glow'); //this is to apply green glow whenever user wins
    setTimeout(function() {userChoice_glow.classList.remove('green-glow')}, 300); // this is to set timer for the color/glow
}

function lose(userChoice , compChoice){
    const userChoice_glow = document.getElementById( userChoice);
    compScore++;
    user_score.innerHTML= userScore;
    comp_score.innerHTML= compScore;
    result.innerHTML= `${convert(userChoice)}(user) loses to ${convert(compChoice)}(comp) . You lost!!`;
    document.getElementById(userChoice).classList.add('red-glow'); //this is to apply green glow whenever user wins
    setTimeout(function() {userChoice_glow.classList.remove('red-glow')}, 300); // this is to set timer for the color/glow
}
function draw(userChoice , compChoice){
    const userChoice_glow = document.getElementById( userChoice);
    result.innerHTML= `${convert(userChoice)}(user) equals ${convert(compChoice)}(comp) . It's a draw !!`;
    document.getElementById(userChoice).classList.add('grey-glow'); //this is to apply green glow whenever user wins
    setTimeout(function() {userChoice_glow.classList.remove('grey-glow')}, 300); // this is to set timer for the color/glow
}


function game ( userChoice ){    // it is for users choice
    const compChoice = computerChoice();
    switch(userChoice + compChoice){
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":
            win(userChoice , compChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice , compChoice);
            break;    
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice , compChoice);
            break;    
    }
}

 

function main(){
rock.addEventListener('click' , function(){
    game("rock");
})
paper.addEventListener('click' , function(){
    game("paper");
})
scissors.addEventListener('click' , function(){
 game("scissors");
})
}
main();