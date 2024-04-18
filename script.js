
function computer_choice(){
        let choice_array = ["rock", "paper", "scissor"];
        let choice = Math.floor(Math.random()*2);
        let c = choice_array[choice];
        return c;
    }
const moves = document.querySelector("#moves");
let player_choice = "";
let player_score = 0;
let computer_score = 0;
let rounds = 1;
moves.addEventListener("click",(e) => {
    let target = e.target;
    player_choice = target.id;
    computer = computer_choice();

    if(player_choice === "rock"){
        if(computer === "rock"){
            player_score += 1;
            computer_score += 1;
        }
        else if( computer === "paper"){
            computer_score += 1;
        }
        else{
            player_score += 1;
        }
    }
    else if(player_choice === "paper"){
        if(computer === "rock"){
            player_score += 1;
        }
        else if( computer === "paper"){
            player_score += 1;
            computer_score += 1;
        }
        else{
            computer_score += 1;
        }
    }
    else{
        if(computer === "rock"){
            computer_score += 1;
        }
        else if( computer === "paper"){
            player_score += 1;
        }
        else{
            player_score += 1;
            computer_score += 1;
        }
    }
    const p = document.querySelector("#player");
    const c = document.querySelector("#computer");
    const UI = document.querySelector("#rounds");
    UI.textContent = "ROUNDS: " + rounds;
    p.textContent = "PLAYER: "+ player_score;
    c.textContent = "COMPUTER: " + computer_score;
    rounds +=1;


});
