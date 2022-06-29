var Leaderboard = {
    _playerName: "Nobody",
    _playerScore: 0,
    _label: document.querySelector("#leaderboard-html"),
    _text: "Leader High Scores : ",

    Initialize()
    {
        Leaderboard._label= document.querySelector("#leaderboard-html");
        Leaderboard._text = "Leader High Scores : ";
        Leaderboard._playerName = TemporaryStorage.LoadPlayerNameFromLocalStore();
        Leaderboard._playerScore = TemporaryStorage.LoadPlayerScoreLocalStorage();
    },

    ShowTitleBar()
    {
        Leaderboard._label.textContent = Leaderboard._text + JSON.parse(Leaderboard._playerName) + " " + Leaderboard._playerScore;  
    },

    ApprovePlayerScore(finalTime, localStorageScore)
    {
        if (finalTime > localStorageScore)
        {
            TemporaryStorage.SavePlayerScoreToLocalStorage(finalTime);
           // localStorage.setItem("localStoragePlayerName",JSON.stringify(InputSubmitInterface._inputTextData.value));
            //TemporaryStorage.SavePlayerNameToLocalStorage(JSON.stringify(window.prompt("Enter initials :")));
            TemporaryStorage.SavePlayerNameToLocalStorage(JSON.stringify(InputSubmitInterface._inputTextData.value))
        }  
    }

};




var UpdateLeaderboard = function(playerName, playerScore)
{
    Leaderboard._playerName = playerName;
    Leaderboard._playerScore = playerScore; 
}

