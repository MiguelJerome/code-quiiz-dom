
// ALL DONE Menu
var ShowQuestion_All_Done = function()
{
    var line1 = "All done!";
    var line2 = "Your final score is : " +timerQuiz + ".";
    quiz_Title_Heading.textContent = line1;
    quiz_question_line1.textContent = line2;
}

var ShowChoiceMenu_All_Done = function()
{
    var line1 = "Enter intials : ";
    var line2 = "Submit";
    name_Initials.textContent = line1;
    button_Submit.textContent = line2;
}

var GetAnswers_Menu_All_Done = function()
{
    
        ShowCurrentHighScoreTimerState();
        ShowQuestion_All_Done();
        ShowChoiceMenu_All_Done();
        
       button_Submit.addEventListener("click", function()
       {
        
        
        if (timerQuiz > high_Score)
        {
            
            high_Score_Name =  window.prompt("Enter initials :"); 
            localStorage.setItem("ihigh_Score_Name", JSON.stringify(high_Score_Name ));
            
        
        high_Score = timerQuiz;
        localStorage.setItem("high_Score", JSON.stringify(timerQuiz));
        }  
        Clear_Clear_Main();
        INITIALISE_GAME();
          
       });
       
}

var Output_All_Done_Menu = function()
{
    GetAnswers_Menu_All_Done();
}