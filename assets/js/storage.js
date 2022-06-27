var TemporaryStorage = {
    _playerScore: 0,
    _playerName: "Nobody",

    InitializePlayerName()
    {
        this._playerName = "Nobody";
        localStorage.setItem("localStoragePlayerName", JSON.stringify(this._playerName));
    },

    InitializePlayerScore()
    {
        this._playerScore = 0;
        localStorage.setItem("localStorageHiighScore", JSON.stringify(this._playerScore));
    },

    Initialize()
    {
        this.InitializePlayerName();
        this.InitializePlayerScore();
    },

    LoadPlayerScoreLocalStorage()
    {
        return localStorage.getItem("localStorageHiighScore");
    },

    LoadPlayerNameFromLocalStore()
    {    
        return localStorage.getItem("localStoragePlayerName");
    },

    SavePlayerNameToLocalStorage(playerInitial)
    {
        localStorage.setItem("localStoragePlayerName", playerInitial);
    },

    SavePlayerScoreToLocalStorage(playerFinalScore)
    {
        localStorage.setItem("localStorageHiighScore", JSON.stringify(playerFinalScore));
    }

};











var RequestPlayerName = function()
{
    TemporaryStorage._playerName =  JSON.stringify(window.prompt("Enter initials :")); 
}



