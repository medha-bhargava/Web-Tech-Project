function saveEntryToTable(userScore, botScore, tieScore) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `http://127.0.0.1/webtechproject/logResult.php?userScore=${userScore}&botScore=${botScore}&tieScore=${tieScore}`);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    xhr.onload = function () {
        if (xhr.status === 200) {
            const responseText = xhr.responseText;
            console.log("Response text: ", responseText);
        } else {
            console.error("Error logging data: ", xhr.statusText);
        }
    };
    xhr.send();
}