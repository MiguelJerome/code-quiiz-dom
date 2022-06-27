var Leaderboard = {
    _playerName: "Nobody",
    _playerScore: 0,
    _label: document.querySelector("#leaderboard-html"),
    _text: "Leader High Scores : "
};
var InitialiseLeaderboard = function()
{
    Leaderboard._label= document.querySelector("#leaderboard-html");
    Leaderboard._text = "Leader High Scores : ";
    Leaderboard._playerName = "Nobody";
    Leaderboard._playerScore = 0;
}

var ShowCurrentHighScoreTitleBar = function()
{
    Leaderboard._label.textContent = Leaderboard._text + Leaderboard._playerName + " " + Leaderboard._playerScore;  
}

var UpdateLeaderboard = function(playerName, playerScore)
{
    Leaderboard._playerName = playerName;
    Leaderboard._playerScore = playerScore; 
}

