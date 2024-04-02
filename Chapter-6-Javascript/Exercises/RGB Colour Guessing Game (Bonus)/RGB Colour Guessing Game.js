// I declared a variable named "colouredBoxnumber" that has the value 9. This variable represents the total number of coloured boxes in my game.
var colouredBoxnumber = 9;

// I declared a variable named "boxcolours" that has the result of calling the function randomColours(colouredBoxnumber).
// I used this function to generate multiple random colours based on the variable named "colouredBoxnumber".
var boxcolours = randomColours(colouredBoxnumber);

// I declared a variable named "hexagonColouredbox" that would store selected elements with the class .hexagonColouredbox.
var hexagonColouredbox = document.querySelectorAll(".hexagonColouredbox");

// I declared a variable named "colouredboxPicked" that stores the result of calling the pickColour() function.
// I created this function to select or pick a random colour.
var colouredboxPicked = pickColour();

// I declared a variable named "correctColouredbox" that is assigned a reference to the HTML element with the ID correctColouredbox.
var correctColouredbox = document.querySelector("#correctColouredbox");

// I declared a variable named "boxColourmessage" that selects the HTML element with the ID boxColourmessage.
var boxColourmessage = document.querySelector("#boxColourmessage");

// I declared a variable named "h1" that is assigned a reference to the first <h1> element.
var h1 = document.querySelector("h1");

// I declared a variable named "resetBoxcolour" that selects the HTML element with the ID resetBoxcolour.
var resetBoxcolour = document.querySelector("#resetBoxcolour");

// I declared 3 variables that stores their selected buttons for easy, medium, and hard levels.
var EasyLevelButton = document.querySelector("#EasyLevel");
var MediumLevelButton = document.querySelector("#MediumLevel");
var HardLevelButton = document.querySelector("#HardLevel");

// I declared a variable named "playerLives" that is set to 3. This variable tracks the player's remaining lives.
var playerLives = 3;

// I declared a variable named "playerscore" that is set to 0. This variable tracks the player's score.
var playerscore = 0;

// I declared a variable named "rgbGuessgameActive" that is set to true. This variable indicates that the game is active.
var rgbGuessgameActive = true;

// I set the text content of the element correctColouredbox to the value of colouredboxPicked, which is the randomly picked colour that the player will have guess.
correctColouredbox.textContent = colouredboxPicked;

// This function updates the player's remaining lives.
// This function works by finding the HTML element with the ID named "playerLives". 
// It then sets its text content to the maximum value between playerLives and 0 to avoid showing negative values for the lives.
function updateplayerLivesDisplay() {
    document.getElementById('playerLives').textContent = Math.max(playerLives, 0); // To avoid making the remaining lives be a negative value.
}

// This following lines are for the Event listener when a hexagon is clicked.
// This function is works by getting called when the player clicks on a coloured box. 
// It then determines if the game is still active and if the player still has remaining lives.
function handleClick() {
    if (!rgbGuessgameActive || playerLives <= 0) return; // The game ends if the player has no lives left.
    var clickedColour = this.style.backgroundColor;
    // The player picked the correct hexagon.
    if (clickedColour === colouredboxPicked) {
        boxColourmessage.textContent = "Correct!";
        // Increment the player's score.
        playerscore++;
        resetBoxcolour.textContent = "Play Again";
        changeColours(clickedColour);
        // To generate new colors and update other elements of the game.
        boxcolours = randomColours(colouredBoxnumber);
        colouredboxPicked = pickColour();
        correctColouredbox.textContent = colouredboxPicked;
        for (var i = 0; i < hexagonColouredbox.length; i++) {
            hexagonColouredbox[i].style.backgroundColor = boxcolours[i];
        }
    } else { // The player picked an incorrect hexagon.
        this.style.backgroundColor = "black";
        boxColourmessage.textContent = "Incorrect!";
        // Decrement the player's remaining lives.
        playerLives--;
        updateplayerLivesDisplay();
        // To determine if the player still has lives left.
        if (playerLives === 0) {
            gameOver();
        }
    }
}

for (var i = 0; i < hexagonColouredbox.length; i++) {
    hexagonColouredbox[i].style.backgroundColor = boxcolours[i];
    hexagonColouredbox[i].addEventListener("click", handleClick);
}

// This event listener is attached to the reset button named "resetBoxcolour". 
// If the player clicks on the button, it calls the resetGame() function which would reset the game.
resetBoxcolour.addEventListener("click", function () {
    resetGame();
});

// This event listener is attached to the easy level button named "EasyLevelButton". 
// If the player clicks on the button, it resets the game and goes to the easy level.
EasyLevelButton.addEventListener("click", function () {
    resetGame();
    EasyLevelButton.classList.add("active"); // It adds the "active" class to the easy difficulty level button.
    MediumLevelButton.classList.remove("active"); // It removes the "active" class from the medium difficulty level button.
    HardLevelButton.classList.remove("active"); // It removes the "active" class from the hard difficulty level button.
    // I set 3 hexagons for the easy difficulty level.
    colouredBoxnumber = 3;
    // It resets the player's remaining lives.
    playerLives = 3;
    boxcolours = randomColours(colouredBoxnumber);
    colouredboxPicked = pickColour();
    correctColouredbox.textContent = colouredboxPicked;
    for (var i = 0; i < hexagonColouredbox.length; i++) {
        if (i > 2) {
            hexagonColouredbox[i].style.display = "none"; // To hide hexagons beyond index 2.
        } else {
            hexagonColouredbox[i].style.display = "block";
            hexagonColouredbox[i].style.backgroundColor = boxcolours[i];
        }
    }
});

// This event listener is attached to the easy medium button named "MediumLevelButton". 
// If the player clicks on the button, it resets the game and goes to the medium level.
MediumLevelButton.addEventListener("click", function () {
    resetGame();
    MediumLevelButton.classList.add("active"); // It adds the "active" class to the medium difficulty level button.
    EasyLevelButton.classList.remove("active"); // It removes the "active" class from the easy difficulty level button.
    HardLevelButton.classList.remove("active"); // It removes the "active" class from the hard difficulty level button.
    // I set 6 hexagons for the medium difficulty level.
    colouredBoxnumber = 6;
    // It resets the player's remaining lives.
    playerLives = 3;
    boxcolours = randomColours(colouredBoxnumber);
    colouredboxPicked = pickColour();
    correctColouredbox.textContent = colouredboxPicked;
    for (var i = 0; i < hexagonColouredbox.length; i++) {
        if (i > 5) {
            hexagonColouredbox[i].style.display = "none"; // To hide hexagons beyond index 5.
        } else {
            hexagonColouredbox[i].style.display = "block";
            hexagonColouredbox[i].style.backgroundColor = boxcolours[i];
        }
    }
});

// This event listener is attached to the easy hard button named "HardLevelButton". 
// If the player clicks on the button, it resets the game and goes to the hard level.
HardLevelButton.addEventListener("click", function () {
    resetGame();
    HardLevelButton.classList.add("active"); // It adds the "active" class to the hard difficulty level button.
    EasyLevelButton.classList.remove("active"); // It removes the "active" class from the easy difficulty level button.
    MediumLevelButton.classList.remove("active"); // It removes the "active" class from the medium difficulty level button.
    // I set 9 hexagons for the hard difficulty level.
    colouredBoxnumber = 9;
    // It resets the player's remaining lives.
    playerLives = 3;
    boxcolours = randomColours(colouredBoxnumber);
    colouredboxPicked = pickColour();
    correctColouredbox.textContent = colouredboxPicked;
    for (var i = 0; i < hexagonColouredbox.length; i++) {
        hexagonColouredbox[i].style.display = "block";
        hexagonColouredbox[i].style.backgroundColor = boxcolours[i];
    }
});
// This function resets the game, which also resets the player's score, their remaining lives, generates new colours, and updates all the game elements.
function resetGame() {
    // This resets the player's score.
    playerscore = 0;
    // This resets the player's remaining lives.
    playerLives = 3;
    boxcolours = randomColours(colouredBoxnumber);
    colouredboxPicked = pickColour();
    correctColouredbox.textContent = colouredboxPicked;
    for (var i = 0; i < hexagonColouredbox.length; i++) {
        hexagonColouredbox[i].style.backgroundColor = boxcolours[i];
        hexagonColouredbox[i].addEventListener("click", handleClick);
    }
    boxColourmessage.textContent = "";
    resetBoxcolour.textContent = "Reset Colours";
    // Shows the player's updated remaining lives.
    updateplayerLivesDisplay();
    // It sets the game as active.
    rgbGuessgameActive = true;
}

// When the game is over, this function will display the player's final score and a message informing them that the game is over.
function gameOver() {
    boxColourmessage.textContent = "It's Game Over! You've run out of lives. Your final score is: " + playerscore;
    resetBoxcolour.textContent = "Let's Play Again!";
    // It sets the game as over.
    rgbGuessgameActive = false;
}

// This function changes the colours of the h1 background when the player picks the correct hexagon color.
function changeColours(colour) {
    h1.style.backgroundColor = colour;
    for (var i = 0; i < hexagonColouredbox.length; i++) {
        hexagonColouredbox[i].style.backgroundColor = colour;
    }
}

// This function picks a colour randomly.
function pickColour() {
    var colouredBoxnumber = Math.floor(Math.random() * boxcolours.length);
    return boxcolours[colouredBoxnumber];
}

// This function generates multiple random colours.
function randomColours(amount) {
    var array = [];
    for (var i = 0; i < amount; i++) {
        array.push(randomColour());
    }
    return array;
}

// This function generate a random colour.
function randomColour() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var colour = "rgb(" + red + ", " + green + ", " + blue + ")";
    return colour;
}

// This function named "updateplayerLivesDisplay" displays the player's remaining lives when the game begins.
updateplayerLivesDisplay();
