<?php
header('Access-Control-Allow-Origin: *');
function logResult($userScore, $botScore, $tieScore) {
  $hostname = "localhost";
  $username = "root";
  $database = "WebTech";
  $password = "";
  $conn = mysqli_connect($hostname, $username, $password, $database);
  if (!$conn) {
    echo "Connection failed";
    die("Connection failed: " . mysqli_connect_error());
  }
  $sql = "INSERT INTO game_results (user_score, bot_score, tie_score) VALUES ($userScore, $botScore, $tieScore)";
  if (mysqli_query($conn, $sql)) {
    echo "Result logged successfully";
  } else {
    echo "Error logging result: " . mysqli_error($conn);
  }
  mysqli_close($conn);
}
parse_str($_SERVER["QUERY_STRING"], $queryParams);
$userScore = isset($queryParams["userScore"]) ? $queryParams["userScore"] : null;
$botScore = isset($queryParams["botScore"]) ? $queryParams["botScore"] : null;
$tieScore = isset($queryParams["tieScore"]) ? $queryParams["tieScore"] : null;
logResult($userScore, $botScore, $tieScore);
?>