<?php
header('Access-Control-Allow-Origin: *');
function fetchRecentResult()
{
    $hostname = "localhost";
    $username = "root";
    $database = "WebTech";
    $password = "";
    $conn = mysqli_connect($hostname, $username, $password, $database);
    if (!$conn) {
        echo "Connection failed";
        die("Connection failed: " . mysqli_connect_error());
    }
    $sql = "SELECT user_score, bot_score, tie_score FROM game_results ORDER BY result_id DESC LIMIT 10;";
    $result = mysqli_query($conn, $sql);
    if ($result) {
        $data = [];
        while ($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
        }
        $json_data = json_encode($data);
        header('Content-Type: application/json');
        return $json_data;
    } else {
        echo "Error fetching data: " . mysqli_error($conn);
        return null;
    }
    mysqli_close($conn);
}
$recentResults = fetchRecentResult();
echo $recentResults;
?>