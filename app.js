let userScore = 0;
let compScore = 0;

let choice = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg")

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#computer-score");

const computerChoice =()=>{
    const option = ["Rock", "Paper","Scissors"];
  const randIdx = Math.floor( Math.random()*3);
  return option [randIdx];
}

const showWinner =(userWin,userChoice,coChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText= userScore;
        console.log("you win");
        msg.innerText=`You Win!${userChoice} beats ${coChoice}`;
        msg.style.backgroundColor="green";

    }else{
        compScore++;
        compScorepara.innerText= compScore;
        console.log("com win")
        msg.innerText=`You lose!${coChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";

        
    }
}

const drawGame=()=>{
    console.log("game draw");
    msg.innerText=`Game Draw!`;
    msg.style.backgroundColor="orange";


}

const playGame =(userChoice)=>{
    console.log(" your chosie =",userChoice); 
    //genret computer chocie;  
    const coChoice = computerChoice();
    console.log("comp choice =",coChoice);

   if (userChoice === coChoice) {
    drawGame();
    } else {
              let userWin = true;
                if (userChoice==="Rock") {
                  // Scissors ,paper
                    userWin=coChoice==="Paper"?false: true;

                } else if(userChoice==="Paper"){
                    // rock ,Scissors
                   userWin =coChoice==="Scissors"?false : true;

                }else{
                          // Rock , Paper
                          userWin =coChoice==="Rock"?false:true;

                }
                      showWinner(userWin,userChoice,coChoice);
    
           } 
}

 choice.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
     } );
 })