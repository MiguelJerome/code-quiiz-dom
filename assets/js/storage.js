var TemporaryStorage = {
    _playerScore: 0,
    _playerName: "Nobody",

    InitializePlayerName()
    {
        TemporaryStorage._playerName = "Nobody";
        localStorage.setItem("localStoragePlayerName", JSON.stringify(TemporaryStorage._playerName));
    },

    InitializePlayerScore()
    {
        TemporaryStorage._playerScore = 0;
        localStorage.setItem("localStorageHiighScore", JSON.stringify(TemporaryStorage._playerScore));
    },

    Initialize()
    {
        TemporaryStorage.InitializePlayerName();
        TemporaryStorage.InitializePlayerScore();
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



