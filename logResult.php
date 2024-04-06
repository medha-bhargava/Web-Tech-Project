<?php
function logResult($userScore, $botScore, $iterations) {
  $hostname = "localhost";
  $username = "your_username";
  $password = "your_password";
  $database = "your_database";
  $conn = mysqli_connect($hostname, $username, $password, $database);
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }
  $sql = "INSERT INTO game_results (user_score, bot_score, iterations) VALUES ($userScore, $botScore, $iterations)";
  if (mysqli_query($conn, $sql)) {
    echo "Result logged successfully";
  } else {
    echo "Error logging result: " . mysqli_error($conn);
  }
  mysqli_close($conn);
}
$userScore = $_POST["userScore"];
$botScore = $_POST["botScore"];
$iterations = $_POST["iterations"];
logResult($userScore, $botScore, $iterations);
?>