
// main menu Quiz
var ShowQuestionMenuMain = function()
{
    var line1 = "Coding Quiz Challenge";
    var line2 = "Try to answer the following code related questions within the time limit.";
    var line3 = "Keep in mind that incorrect answers will penalize your score/time";
    var line4 = "by ten seconds!";
    quiz_Title_Heading.textContent = line1;
    quiz_question_line1.textContent = line2;
    quiz_question_line2.textContent = line3;
    quiz_question_line3.textContent = line4;
}

var ShowChoiceMenuMain = function()
{
    button_Start_Quiz.textContent = "Start Quiz";
   
}

var GetAnswersMain = function()
{
  
    var START_QUIZ = 1;
    var menu_choice = START_QUIZ;
        ShowCurrentHighScoreTimerState();
        ShowQuestionMenuMain();
        ShowChoiceMenuMain();
   
        button_Start_Quiz.addEventListener("click", function()
        {
            Clear_Clear_Data_Type();
            DecreaseTimer();
            Output_Data_Types_Menu();
            menu_choice = START_QUIZ;
        });
   
}

var OutputMainMenu = function()
{
    GetAnswersMain(); 
}