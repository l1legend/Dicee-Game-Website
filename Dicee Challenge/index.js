var arrayOfImages = ['images/dice1.png',
                     'images/dice2.png',
                     'images/dice3.png',
                     'images/dice4.png',
                     'images/dice5.png',
                    'images/dice6.png'];
                                  
function dicee (){   
    //first dice
    var rand1 = Math.floor(Math.random() * arrayOfImages.length);
    var dice1 = document.querySelector('.img1').src= arrayOfImages[rand1];

    //second dice
    var rand2 = Math.floor(Math.random() * arrayOfImages.length);
    var dice2 = document.querySelector('.img2').src = arrayOfImages[rand2];
    
    if (dice1 > dice2) {
    document.querySelector('h1').innerHTML="Player 1 Wins";
    } 
    else if (dice1 < dice2) {
    document.querySelector("h1").innerHTML="Player 2 Wins";
    } 
    else {
    document.querySelector('h1').innerText="draw";
    }
};
    
dicee();

// //first dice
// var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
// var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
// var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
// var image1 = document.querySelectorAll("img")[0];
// image1.setAttribute("src", randomImageSource);

// //second dice
// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// //If player 1 wins
// if (randomNumber1 > randomNumber2) {
//     document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
//   }
//   else if (randomNumber2 > randomNumber1) {
//     document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
//   }
//   else {
//     document.querySelector("h1").innerHTML = "Draw!";
//   }
  