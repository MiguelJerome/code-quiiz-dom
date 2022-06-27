var MainMenu = {

    Clear()
    {
        Menu.RemoveButtonQuiz1();
        Menu.RemoveButtonQuiz2();
        Menu.RemoveButtonQuiz3();
        Menu.RemoveButtonQuiz4();
    }

};




// main menu Quiz
var ShowQuestionMenuMain = function()
{
    var line1 = "Coding Quiz Challenge";
    var line2 = "Try to answer the following code related questions within the time limit.";
    var line3 = "Keep in mind that incorrect answers will penalize your score/time";
    var line4 = "by ten seconds!";
    Menu._quizTitleScreen.textContent = line1;
    Menu._quizQuestionLine1.textContent = line2;
    Menu._quizQuestionLine2.textContent = line3;
    Menu._quizQuestionLine3.textContent = line4;
}

var ShowChoiceMenuMain = function()
{
    Menu._buttonStartQuiz.textContent = "Start Quiz"; 
}

var GetAnswersMain = function()
{
    var START_QUIZ = 1;
    var menu_choice = START_QUIZ;
        
        ShowQuestionMenuMain();
        ShowChoiceMenuMain();
   
        Menu._buttonStartQuiz.addEventListener("click", function()
        {
            Clear_Clear_Data_Type();
           Timer. DecreaseTime();
            Output_Data_Types_Menu();
            menu_choice = START_QUIZ;
        });
   
}

var OutputMainMenu = function()
{
    Leaderboard.ShowTitleBar();
    Timer.Show();
    GetAnswersMain(); 
}