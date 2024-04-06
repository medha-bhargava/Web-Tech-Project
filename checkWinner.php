<!DOCTYPE html>
<html>
<body>
<?php
function checkWinner($userChoice, $botChoice) {
  if ($userChoice === $botChoice) {
    return "Tie";
  } else if (($userChoice === 0 && $botChoice === 1) || ($userChoice === 1 && $botChoice === 2) || ($userChoice === 2 && $botChoice === 0)) {
    return "Bot";
  } else {
    return "You";
  }
}
$userChoice = $_POST["userChoice"];
$botChoice = $_POST["botChoice"];
$winner = checkWinner($userChoice, $botChoice);
echo json_encode($winner);
?>
</body>
</html>