var PlayerNameLocalStorage;
var PlayerScoreLoacalStorage;

// Initiliaze the Local Storage
var InitialisePlayerNameLocalStorage = function()
{
    PlayerNameLocalStorage = "Nobody";
    localStorage.setItem("high_Score_Name", JSON.stringify(PlayerNameLocalStorage));
}

var InitialisePlayerScoreLocalStorage = function()
{
    PlayerScoreLoacalStorage = 0;
    localStorage.setItem("high_Score", JSON.stringify(PlayerScoreLoacalStorage));;
}

var InitialiseLocalStorage = function()
{
    InitialisePlayerNameLocalStorage();
    InitialisePlayerScoreLoacalStorage();
}


// all methods for local storage
var SavePlayerNameToStorage = function()
{
    localStorage.setItem("high_Score_Name", JSON.stringify(PlayerNameLocalStorage));
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
    //PlayerScoreLoacalStorage = timer;
    localStorage.setItem("high_Score", JSON.stringify(PlayerScoreLoacalStorage));
}







var RequestPlayerName = function()
{
    PlayerNameLocalStorage =  JSON.stringify(window.prompt("Enter initials :")); 
}

var SaveOnLeaderboard = function()
{
    if (time > PlayerScoreLoacalStorage)
    {
        RequestPlayerName();
        //SavePlayerNameToStorage();   
        SavePlayerScoreToStorage();
    }  
}

