var Leaderboard = {
    _playerName: "Nobody",
    _playerScore: 0,
    _label: document.querySelector("#leaderboard-html"),
    _text: "Leader High Scores : ",

    Initialize()
    {
        this._label= document.querySelector("#leaderboard-html");
        this._text = "Leader High Scores : ";
        this._playerName = TemporaryStorage.LoadPlayerNameFromLocalStore();
        this._playerScore = TemporaryStorage.LoadPlayerScoreLocalStorage();
    },

    ShowTitleBar()
    {
        this._label.textContent = this._text + JSON.parse(Leaderboard._playerName) + " " + this._playerScore;  
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

