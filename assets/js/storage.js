var LocalStorage = {
    _playerScore: 0,
    _playerName: "Nobody"
};

// Initiliaze the Local Storage
var InitialisePlayerNameLocalStorage = function()
{
    LocalStorage._playerName = "Nobody";
    localStorage.setItem("high_Score_Name", JSON.stringify(LocalStorage._playerName));
}

var InitialisePlayerScoreLocalStorage = function()
{
    LocalStorage._playerScore = 0;
    localStorage.setItem("high_Score", JSON.stringify(LocalStorage._playerScore));
}

var InitialiseLocalStorage = function()
{
    InitialisePlayerNameLocalStorage();
    InitialisePlayerScoreLocalStorage();
}


// all methods for local storage
var SavePlayerNameToStorage = function()
{
    localStorage.setItem("high_Score_Name", JSON.stringify(LocalStorage._playerName));
}

var LoadPlayerName = function()
{    
    return localStorage.getItem("high_Score_Name");
}

var LoadPlayerScore = function()
{
    return localStorage.getItem("high_Score");
}

var SavePlayerScoreToStorage = function()
{
    
    localStorage.setItem("high_Score", JSON.stringify(LocalStorage._playerScore));
}







var RequestPlayerName = function()
{
    LocalStorage._playerName =  JSON.stringify(window.prompt("Enter initials :")); 
}

var SaveOnLeaderboard = function()
{
    if (Timer._time > LocalStorage._playerScore)
    {
        RequestPlayerName();
        //SavePlayerNameToStorage();   
        SavePlayerScoreToStorage();
    }  
}

