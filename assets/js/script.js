
var high_Score = 0;

var ShowCurrentHighScoreTimerState= function()
{
    var line_Leaderboard = "Leader High Scores : ";
    //var line_Time_Left = "Time : ";
    quiz_Leaderboard_Heading.textContent = line_Leaderboard + high_Score_Name + " " + high_Score ;
    //quiz_Time_Left_Heading.textContent = line_Time_Left + timerQuiz;
    //console.log("Leader High Scores : " + high_Score_Name + " = " + high_Score + "\t\t\t\t\t\t\t\t\t Time :" + timerQuiz);
}

// Message Comment Grade on Answer for a question
var ShowCorrectMessage = function()
{
    answer_Condition.textContent = "Correct!";
}

var ShowWrongMessage = function()
{
    answer_Condition.textContent = "Wrong!";
}



var INITIALISE_GAME = function()
{
    ResetTimerQuiz();
    Clear_Clear_Main(); 
    
    OutputMainMenu(); 
}

INITIALISE_GAME();

