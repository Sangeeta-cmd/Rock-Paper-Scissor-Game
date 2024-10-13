let userScore = 0;
let compScore = 0;

const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = ()=>{
    const options = ["rock", "paper", "scissors"] ;//rock,paper, scissor
    const randId = Math.floor(Math.random()*3);
    return options[randId];
   // random function generates dfault numbers (decimal no)from 0 -1 but if we multiply it with number(ex:3)then it will generate from 0 to one less than that number
   //floor() converts decimal number into whole number(round down the number)
}

const drawGame = ()=>{
    console.log("Game was draw");
    msg.innerText = "Game was Draw. Play again.";
}

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore ++;
        userScorePara.innerText = userScore;
        // console.log("You win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }else{
        compScore ++;
        compScorePara.innerText = compScore;
        // console.log("You lose");
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice)=>{
  console.log("User choice =", userChoice);
  //Generate computer choice --> modular
  const compChoice = genCompChoice();
  console.log("Computer choice =", compChoice);
  if(userChoice === compChoice){
     // draw game
     drawGame();
     msg.style.backgroundColor = "#081b31";
  } else{
    let userWin =true;
    if(userChoice === "rock"){
        //scissor,paper
        userWin = compChoice === "paper" ? false:true;
    }else if(userChoice === "paper"){
        // rock, scissor
        userWin = compChoice=== "scissors"? false:true;
    }else{
        //rock,paper
        userWin = compChoice === "rock" ? false: true;
    }
    showWinner(userWin, userChoice,compChoice);
  }
};

choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked");
        playGame(userChoice);
    });
});