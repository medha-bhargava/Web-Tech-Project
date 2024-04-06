function playGame(userChoice, botChoice) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "checkWinner.php");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = function() {
      if (xhr.status === 200) {
        const winner = JSON.parse(xhr.responseText);
        console.log("Winner: ", winner);
        // Update game state based on the winner information
      } else {
        console.error("Error checking winner: ", xhr.statusText);
      }
    };
    xhr.send(`userChoice=${userChoice}&botChoice=${botChoice}`);
}