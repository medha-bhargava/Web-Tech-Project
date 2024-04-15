async function fetchResult() {
    let result = await fetch('http://localhost/webtechproject/result.php');
    result = await result.json();
    console.log(result);
    document.getElementById('data').innerHTML = result.map((game) =>
        `<tr>
            <td>${game.user_score}</td>
            <td>${game.bot_score}</td>
            <td>${game.tie_score}</td>
        </tr>`
    ).join("");
}
fetchResult();