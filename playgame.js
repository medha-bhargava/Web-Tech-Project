function playGame(userChoice, botChoice) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `http://127.0.0.1/webtechproject/checkWinner.php?userChoice=${userChoice}&botChoice=${botChoice}`);
  return new Promise(function (resolve, reject) {
    xhr.onload = function() {
      if (xhr.status === 200) {
        const winner = xhr.responseText;
        console.log("Winner: ", winner);
        resolve(winner);
      } else {
        console.error("Error checking winner: ", xhr.statusText);
        reject(new Error('Failed to check winner'));
      }
    };
    xhr.send();
  });
}

async function handleGame(userChoice, botChoice) {
  let winner = null;
  try {
    winner = await playGame(userChoice, botChoice);
  }  catch (error) {
    console.error(`Error: ${error}`);
  }
  return winner;
}