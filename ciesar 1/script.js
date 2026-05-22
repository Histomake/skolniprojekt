const choices = ["kámen","nůžky","papír"];
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    try{

        if(!choices.includes(playerChoice)){
            prompt("Neplatná volba!") ;
        }
        console.log(new Date());
        for(let i = 0; i < choices.length; i++){
            console.log(choices[i]);
        }

        let result = "";
        let computerChoice = choices[Math.floor(Math.random() * choices.length)];

        if (playerChoice === computerChoice){
            result = "Remíza";
        }else if (
            (playerChoice === "kámen" && computerChoice === "nůžky") ||
            (playerChoice === "nůžky" && computerChoice === "papír") ||
            (playerChoice === "papír" && computerChoice === "kámen")
        ){
            result = "Vyhral jsi!!!";
            playerScore++;
        }else {
            result = "Prohral jsi :c";
            computerScore++;
        }
        document.getElementById("playerChoice").innerHTML = "<strong>Ty:</strong> " + playerChoice;
        document.getElementById("computerChoice").innerHTML = "<strong>Počítač:</strong> " + computerChoice;
        document.getElementById("resultText").innerHTML = "<strong>Výsledek:</strong> " + result;

        document.getElementById("playerScore").textContent = "Hráč: " + playerScore;
        document.getElementById("computerScore").textContent = "Počítač: " + computerScore;

    }catch(error){
        alert(error.message);
    }finally{
        console.log("Hra proběhla");
    }
}
function resetGame() {

    playerScore = 0;
    computerScore = 0;

    document.getElementById("playerChoice").innerHTML = "<strong>Ty:</strong> -";
    document.getElementById("computerChoice").innerHTML = "<strong>Počítač:</strong> -";
    document.getElementById("resultText").innerHTML = "<strong>Výsledek:</strong> Hra resetována";

    document.getElementById("playerScore").textContent = "Hráč: 0";
    document.getElementById("computerScore").textContent = "Počítač: 0";

}


