<?php
header('Access-Control-Allow-Origin: *');
function checkWinner($userChoice, $botChoice) {
  if ($userChoice === $botChoice) {
    return "Tie";
  } else if (($userChoice === "0" && $botChoice === "1") || ($userChoice === "1" && $botChoice === "2") || ($userChoice === "2" && $botChoice === "0")) {
    return "Bot";
  } else {
    return "You";
  }
}
parse_str($_SERVER["QUERY_STRING"], $queryParams);
$userChoice = isset($queryParams["userChoice"]) ? $queryParams["userChoice"] : null;
$botChoice = isset($queryParams["botChoice"]) ? $queryParams["botChoice"] : null;
$winner = checkWinner($userChoice, $botChoice);
echo $winner;
?>