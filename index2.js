let Cards = [];
let sum = 0;
let hasBlackjack = false;
let IsAlive = false;
let message = " ";


let MessageEl = document.getElementById("message-el");
let CardsPara = document.getElementById("cards-el");
let SumPara = document.getElementById("sum-el");

let player = {
    Name : "Adarsh" ,
    Chips : 149
    
}
let PlayerEl = document.getElementById("player-el");
PlayerEl.textContent = "" + player.Name + ": $" + player.Chips;
         //or
//  let SumPara = document.querySelector("#sum-el");
// console.log(Cards);

function getRandomCard(){
 let random = Math.floor(Math.random()* 13) + 1;
 if(random > 10){
     return 10;
 }
 else if(random === 1){
     return 11;
 } 
 else {
    return random;
 }

}
function startGame()
{
    IsAlive = true;
    let firstCard = getRandomCard() ;
    let secondCard =getRandomCard();
    Cards = [firstCard , secondCard];
    sum = firstCard + secondCard;
    RenderGame();
}
function RenderGame(){
    //Render out firstcard and secondcard
    CardsPara.textContent ="Cards: ";
    //Render Out all carrds we have..
    for(let i=0; i<Cards.length; i++){

        CardsPara.textContent += Cards[i]  + " ";
    }
    SumPara.textContent = "Sum: " + sum;
    if(sum <= 44)
    {
        message = "Do you want to draw a new card..? ";
       
    }
    else if(sum === 45){
        message = "Wohooo! You have got BlackJack!";
        
        hasBlackjack = true;
    }
    else {
        message = "oops! You are out of the game.";
        
        IsAlive =  false;
    }
     
      MessageEl.textContent = message;
}

function NewCard(){
    // console.log("Drawing a new card from the deck!");
    if(IsAlive === true && hasBlackjack === false){
        let Card = getRandomCard();
        sum += Card;
        Cards.push(Card);
        RenderGame();
}
}

// console.log(message);
// console.log(hasBlackjack);
// conbsole.log(IsAlive);


//let sentence = ["Hello", "my", "name", "is", "Adarsh"];
// let greetingEl = document.getElementById("greeting-el");
// 
// for(let i=0; i<sentence.length; i++){
//  greetingEl.textContent += sentence[i] + " ";
//}
//

// let player1Time = 102;
// let player2Time = 107;

// let total = totalRaceTime();

// function totalRaceTime(){
//     return player1Time + player2Time;
// }
// console.log(total);

// funtion rollDice(){
//    return (Math.floor(Math.random()* 6) + 1);
// }