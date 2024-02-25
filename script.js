let userScore=0;
let compScore=0;

let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#computer-score");
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const ranIndex=Math.floor(Math.random()*3);
    return options[ranIndex];
};

const drawgame= () => {
    msg.innerHTML="Game was Draw, play Again!";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerHTML=userScore;
        msg.innerHTML=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.computedStyleMap.backgroundColor="Green";
    }
    else{
        compScore++;
        compScorePara.innerHTML=compScore;
        msg.innerHTML=`You Lose! ${compChoice} beats Your ${userChoice}`;
    
    }
}
const playGame=(userChoice)=>{    
    //generate computer choice
    const compChoice=genCompChoice();

    if(userChoice===compChoice){ 
        drawgame();
        }
        else{
            let userWin=true;
            if(userChoice==="rock"){
                //choices for computer-> paper, scissor
                userWin=compChoice==="paper" ? false : true;
            }
            else if(userChoice==="paper"){
                // rock, scissor
                userWin=compChoice==="scissor" ? false : true;
            }
            else{
                //rock, paper
                userWin=compChoice==="rock" ? false : true;
            }
            showWinner(userWin,userChoice,compChoice);
        }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

    })
})
