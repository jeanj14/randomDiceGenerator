const button = document.querySelector("#toggle-dice");
button.addEventListener("click", changeDiceFace);

function changeDiceFace(){
    var randomVariable1 = Math.floor(Math.random() * 6) + 1;
    var randomVariable2 = Math.floor(Math.random() * 6) + 1;
    var dice1_filename = "./images/dice" + randomVariable1 + ".png";
    var dice2_filename = "./images/dice" + randomVariable2 + ".png";
    var dice1 = document.querySelector(".img1");
    var dice2 = document.querySelector(".img2");
    dice1.setAttribute("src", dice1_filename);
    dice2.setAttribute("src", dice2_filename);

    if (randomVariable1 > randomVariable2){
        document.querySelector("h1").innerHTML = "Player 1 Wins! &#128681;";
    } else if (randomVariable2 > randomVariable1){
        document.querySelector("h1").innerHTML = "Player 2 Wins! &#128681;";
    } else {
        document.querySelector("h1").innerHTML = "Draw!  &#127884;";
    }
}

console.log(randomVariable1);