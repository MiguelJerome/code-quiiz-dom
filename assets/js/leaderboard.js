
var line_Leaderboard = "Leader High Scores : ";

var ShowCurrentHighScoreTitleBar = function()
{
    quiz_Leaderboard_Heading.textContent = line_Leaderboard + JSON.parse(LoadPlayerName()) + " " + LoadPlayerScore();  
}

