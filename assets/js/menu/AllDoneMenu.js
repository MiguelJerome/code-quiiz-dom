


// ALL DONE Menu
var ShowQuestion_All_Done = function()
{
    var line1 = "All done!";
    var line2 = "Your final score is : " + Timer.LoadCurrentTime() + ".";
    quizTitleScreen.textContent = line1;
    quiz_question_line1.textContent = line2;
}

var GetAnswers_Menu_All_Done = function()
{
        Leaderboard.ShowTitleBar();
        ShowQuestion_All_Done();
        
        
       buttonSubmit.addEventListener("click", function()
       {
        ApprovePlayerScore(Timer.LoadCurrentTime(), TemporaryStorage.LoadPlayerScoreLocalStorage());
        Clear_Clear_Main();
        //INITIALISE_GAME();
       });
       
}

var Output_All_Done_Menu = function()
{
    game_state = GAME_OVER;
     GetAnswers_Menu_All_Done();
}