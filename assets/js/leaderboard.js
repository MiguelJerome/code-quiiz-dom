var quiz_Title_Heading = document.querySelector("#quiz-title");
var quiz_Leaderboard_Heading = document.querySelector("#leaderboard-html");

var line_Leaderboard = "Leader High Scores : ";

var ShowCurrentHighScoreTitleBar = function()
{
    quiz_Leaderboard_Heading.textContent = line_Leaderboard + JSON.parse(LoadPlayerName()) + " " + LoadPlayerScore();  
}

