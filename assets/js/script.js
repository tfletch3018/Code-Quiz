var options = document.querySelector(".options");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var questionsArea = document.getElementById("questions-area");
var startButton = document.querySelector(".start-button");


var score = 0;
var question;
var timeLeft = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

// Array of quiz questions, multiple choice options, and responses
var questionElement = [{

    question: "Commonly used data types DO NOT include:____.",
    options: ["strings( )", "booleans( )", "alerts( )", "numbers( )"],
    response: "alerts( )"
},

{
    question: "The condition in an if / else statement is enclosed within ____.",
    options: ["quotes( )", "curly brackets( )", "parentheses( )", "square brackets( )"],
    response: "parentheses( )"
},

{
    question: "Arrays in JavaScript can be used to store ____.",
    options: ["numbers and strings( )", "other arrays( )", "booleans( )", "all of the above( )"],
    response: "all of the above( )"
},

{
    question: "String values must be enclosed within ____ when being assigned to variables.",
    options: ["commas( )", "curly brackets( )", "quotes( )", "parentheses( )"],
    response: "quotes( )"
},

{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: ["JavaScript( )", "terminal / bash( )", "for loops( )", "console.log( )"],
    response: "console.log( )"
}
]

// The init function is called when the page loads
function init() {
    getWins();
    getLosses();
}

// The startGame funtion is called when the start button is clicked
function startGame() {
    isWin = false;
    timerCount = 60;
    // Prevents start button from being clicked while round in progress
    startButton.disabled = true;
    startTimer()
    playGame()
}
// The playGame function is called to start the questions
function playGame() {
    console.log("Hello from play game");
    //questionsArea
    //create an h2 tag <h2></h2>
    var currentQuestion = document.createElement("h3");

    var currentQuestionIndex = 0;
    //create an h2 tag <h2>add currentQuestion here!!!</h2>
    currentQuestion.textContent = questionElement[currentQuestionIndex].question;

    //appending currentQuestion to the questions area
    questionsArea.appendChild(currentQuestion)

    questionElement[0].options;
    for (var i = 0; i < questionElement[currentQuestionIndex].options.length; i++) {
        console.log("hello", questionElement[currentQuestionIndex].options[i])
        //create a button
        var newButton = document.createElement("button");

        //add the option as text content
        newButton.textContent = questionElement[currentQuestionIndex].options[i];
        //append the button to the questionArea
        questionsArea.appendChild(newButton);
    }
}
// The winGame function is called when the win condition is met
function winGame() {
    options.textContent = "YOU WON!!!🏆 ";
    winCounter++
    startButton.disabled = false;
    setWins()
}

// The loseGame function is called when the timer reaches 0
function loseGame() {
    options.textContent = "GAME OVER";
    loseCounter++
    startButton.disabled = false;
    setLosses()
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    //Sets timer
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            // Tests if win condition is met
            if (isWin && timerCount > 0) {
                //Clears interval and stops timer
                clearInterval(timer);
                winGame();
            }
        }
        //Tests if time has run out
        if (timerCount === 0) {
            // Clears interval
            clearInterval(timer);
            loseGame();
        }
    }, 1000);
}

// Updates win count on screen and sets lose count to client storage
function setWins() {
    win.textContent = winCounter;
    localStorage.setItem("winCount", winCounter);
}

// Updates lose count on screen and sets lose count to client storage
function setLosses() {
    lose.textContent = loseCounter;
    localStorage.setItem("loseCount", loseCounter);
}

// These functions are used by init
function getWins() {
    //Get stored value from client storage
    var storedWins = localStorage.getItem("winCount");
    // If stored value doesn't exist, set counter to 0
    if (storedWins === null) {
        winCounter = 0;
    } else {
        // If value is retreived from client storage set the winCounter to that value
        winCounter = storedWins;
    }
    // Render win count to page
    win.textContent = winCounter;
}

function getLosses() {
    var storedLosses = localStorage.getItem("loseCount");
    if (storedLosses === null) {
        loseCounter = 0;
    } else {
        loseCounter = storedLosses;
    }
    lose.textContent = loseCounter;
}

function checkWin() {
}

function endGame() {
    clearInterval(timer);
    var codeQuiz = document.querySelector(".window");

    codeQuiz.addEventListener("click", function (event) {
        var element = event.target;

    })
}
// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);
