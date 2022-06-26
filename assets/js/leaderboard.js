var playerNameLeaderboard;
var playerScoreLeaderboard;
var labelLeaderboard;
var text_Leaderboard;

var InitialiseLeaderboard = function()
{
    labelLeaderboard = document.querySelector("#leaderboard-html");
    text_Leaderboard = "Leader High Scores : ";
    playerNameLeaderboard = "Nobody";
    playerScoreLeaderboard = 0;
}

var ShowCurrentHighScoreTitleBar = function()
{
    labelLeaderboard.textContent = text_Leaderboard + playerNameLeaderboard + " " + playerScoreLeaderboard;  
}

var UpdateLeaderboard = function(playerName, playerScore)
{
    playerNameLeaderboard = playerName;
    playerScoreLeaderboard = playerScore; 
}

