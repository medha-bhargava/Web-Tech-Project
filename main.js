document.addEventListener("DOMContentLoaded", function() {
    function generateRandom() {
        let random = Math.floor(Math.random() * 99);
        // console.log(random);
        return random % 3;
    }
    // let botResponse = ["rock","paper","scissors"]
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
    document.getElementById("rockUserbtn").addEventListener("click", function() {
        hideAllImages();
        let userChoice = 0;
        document.getElementById("rockUserImage").style.display = 'block';
        let botChoice = obtainBotResponse();
        playGame(userChoice, botChoice);
    });

    document.getElementById("paperUserbtn").addEventListener("click", function() {
        hideAllImages();
        let userChoice = 1;
        document.getElementById("paperUserImage").style.display = 'block';
        let botChoice = obtainBotResponse();
        playGame(userChoice, botChoice);
    });

    document.getElementById("scissorsUserbtn").addEventListener("click", function() {
        hideAllImages();
        let userChoice = 2;
        document.getElementById("scissorsUserImage").style.display = 'block';
        let botChoice = obtainBotResponse();
        playGame(userChoice, botChoice);
    });
});