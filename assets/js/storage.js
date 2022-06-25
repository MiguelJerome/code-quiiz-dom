var highScoreNameQuiz = "Nobody";
var highScoreQuiz = 0;
var timerQuiz = 0;

var InitialisePlayerNameStorage = function()
{
    highScoreNameQuiz = "Nobody";
    localStorage.setItem("high_Score_Name", JSON.stringify(highScoreNameQuiz));
}

var InitialisePlayerScoreStorage = function()
{
    highScoreQuiz = 0;
    localStorage.setItem("high_Score", JSON.stringify(highScoreQuiz));;
}

var InitialiseQuizTimer = function()
{
    timerQuiz = 0;
}

var RequestPlayerName = function()
{
    highScoreNameQuiz =  JSON.stringify(window.prompt("Enter initials :")); 
}

var SavePlayerNameToStorage = function()
{
    localStorage.setItem("high_Score_Name", JSON.stringify(highScoreNameQuiz ));
}

var SavePlayerScoreToStorage = function()
{
    //highScoreQuiz = timerQuiz;
    localStorage.setItem("high_Score", JSON.stringify(highScoreQuiz));
}

var LoadPlayerName = function()
{    
    return localStorage.getItem("high_Score_Name");
}

var LoadPlayerScore = function()
{
    return localStorage.getItem("high_Score");
}

var SaveOnLeaderboard = function()
{
    if (timerQuiz > highScoreQuiz)
    {
        RequestPlayerName();
        //SavePlayerNameToStorage();   
        SavePlayerScoreToStorage();
    }  
}

