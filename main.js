let userScore;
let botScore;
let tieScore;
function initializeScores() {
    userScore = 0;
    botScore = 0;
    tieScore = 0;
}
document.addEventListener("DOMContentLoaded", function() {
    function generateRandom() {
        let random = Math.floor(Math.random() * 99);
        return random % 3;
    }
    function hideAllImages() {
        document.querySelectorAll('img').forEach(function(img) {
            img.style.display = 'none';
        });
    }
    function obtainBotResponse() {
        let random = generateRandom();
        if (random == 0) {
            document.getElementById("rockBotImage").src = 'Assets/rock.png';
            document.getElementById("rockBotImage").style.display = 'block';
        } else if (random == 1) {
            document.getElementById("paperBotImage").src = 'Assets/paper.png';
            document.getElementById("paperBotImage").style.display = 'block';
        } else {
            document.getElementById("scissorsBotImage").src = 'Assets/scissor.png';
            document.getElementById("scissorsBotImage").style.display = 'block';
        }
        return random;
    }
    function obtainWinner(userChoice, botChoice, callback) {
        handleGame(userChoice, botChoice)
        .then(winner => callback(winner))
        .catch(error => console.error(`Error: ${error}`));
    }
    initializeScores();
    let user = document.getElementById("you");
    let bot = document.getElementById("bot");
    let tie = document.getElementById("tie");
    function updateScore(winner) {
        if (winner === "You") {
            userScore++;
            user.innerHTML = userScore;
        } else if (winner === "Bot") {
            botScore++;
            bot.innerHTML = botScore;
        } else {
            tieScore++;
            tie.innerHTML = tieScore;
        }
    }
    function reset() {
        user.textContent = 0;
        bot.textContent = 0;
        tie.textContent = 0;
        userScore = 0;
        botScore = 0;
        tieScore = 0;
    }

    let exitBtn = document.getElementById("exitGameButton");
    exitBtn.addEventListener("click", function() {
        let userElement = parseInt(user.innerHTML);
        let botElement = parseInt(bot.innerHTML);
        let tieElement = parseInt(tie.innerHTML);
        let result = document.getElementById("resultText");
        let wonSound = new Audio('Assets/won.mp3');
        let botSound = new Audio('Assets/bot.mp3');
        let tieSound = new Audio('Assets/tie.mp3');
        if (userElement > botElement) {
            result.innerHTML = "You won the game! :)"
            wonSound.play();
        } else if (userElement < botElement) {
            result.innerHTML = "You lost the game! :("
            botSound.play();
        } else {
            result.innerHTML = "It's a draw!"
            tieSound.play();
        }
        saveEntryToTable(userElement, botElement, tieElement);
        reset();
        exitBtn.disabled = true;
        exitBtn.style.cursor = "not-allowed";
        let rockBtn = document.getElementById("rockUserbtn");
        let paperBtn = document.getElementById("paperUserbtn");
        let scissorsBtn = document.getElementById("scissorsUserbtn");
        rockBtn.disabled = true;
        rockBtn.style.cursor = "not-allowed";
        paperBtn.disabled = true;
        paperBtn.style.cursor = "not-allowed";
        scissorsBtn.disabled = true;
        scissorsBtn.style.cursor = "not-allowed";
        let back = document.getElementById("linkBack");
        back.innerHTML = '<a href="start.html">Back to menu</a>';
    });

    document.getElementById("rockUserbtn").addEventListener("click", function() {
        hideAllImages();
        let userChoice = 0;
        document.getElementById("rockUserImage").style.display = 'block';
        let botChoice = obtainBotResponse();
        obtainWinner(userChoice, botChoice, winner => {
            updateScore(winner);
        });
    });

    document.getElementById("paperUserbtn").addEventListener("click", function() {
        hideAllImages();
        let userChoice = 1;
        document.getElementById("paperUserImage").style.display = 'block';
        let botChoice = obtainBotResponse();
        obtainWinner(userChoice, botChoice, winner => {
            updateScore(winner);
        });
    });

    document.getElementById("scissorsUserbtn").addEventListener("click", function() {
        hideAllImages();
        let userChoice = 2;
        document.getElementById("scissorsUserImage").style.display = 'block';
        let botChoice = obtainBotResponse();
        obtainWinner(userChoice, botChoice, winner => {
            updateScore(winner);
        });
    });
});