// all the querySelector
var quiz_Title_Heading = document.querySelector("#quiz-title");
var quiz_Leaderboard_Heading = document.querySelector("#leaderboard");
var quiz_Time_Left_Heading = document.querySelector("#time-left");
var quiz_question_line1 = document.querySelector("#p-line1");
var quiz_question_line2 = document.querySelector("#p-line2");
var quiz_question_line3 = document.querySelector("#p-line3");

// button
var button_Start_Quiz = document.querySelector("#start-quiz-button");
var button_Quiz1 = document.querySelector("#quiz-button1");
var button_Quiz2 = document.querySelector("#quiz-button2");
var button_Quiz3 = document.querySelector("#quiz-button3");
var button_Quiz4 = document.querySelector("#quiz-button4");

// all done
var name_Initials = document.querySelector("#initial-text");

var input_String = document.getElementById("#input-name");
var high_Score_Name = "Nobody";

var button_Submit = document.querySelector("#submit");

// condition answer
var answer_Condition = document.querySelector("#answer_Condition");

var timerQuiz = 0;
var high_Score = 0;

// Clear menu main
var Clear_Clear_Main = function()
{
    
            quiz_Title_Heading.textContent = "";
            quiz_question_line1.textContent = "";
            quiz_question_line2.textContent = "";
            quiz_question_line3.textContent = "";
            button_Start_Quiz.textContent = "";
            button_Start_Quiz.style.backgroundColor = "blueviolet";
            button_Quiz1.textContent = "";
            button_Quiz1.style.backgroundColor = "white";
            button_Quiz2.textContent = "";
            button_Quiz2.style.backgroundColor = "white";
            button_Quiz3.textContent = "";
            button_Quiz3.style.backgroundColor = "white";
            button_Quiz4.textContent = "";  
            button_Quiz4.style.backgroundColor = "white";  
            answer_Condition.textContent = "";
}

// Clear menu Data_Type
var Clear_Clear_Data_Type = function()
{
            quiz_Title_Heading.textContent = "";
            quiz_question_line1.textContent = "";
            quiz_question_line2.textContent = "";
            quiz_question_line3.textContent = "";
            button_Start_Quiz.textContent = "";
            button_Start_Quiz.style.backgroundColor = "white";
            button_Quiz1.textContent = "";
            button_Quiz1.style.backgroundColor = "blueviolet";
            button_Quiz2.textContent = "";
            button_Quiz2.style.backgroundColor = "blueviolet";
            button_Quiz3.textContent = "";
            button_Quiz3.style.backgroundColor = "blueviolet";
            button_Quiz4.textContent = "";  
            button_Quiz4.style.backgroundColor = "blueviolet";  
            answer_Condition.textContent = "";
}

// Clear all done menu
var Clear_Clear_All_Done = function()
{
            quiz_Title_Heading.textContent = "";
            quiz_question_line1.textContent = "";
            quiz_question_line2.textContent = "";
            quiz_question_line3.textContent = "";
            button_Start_Quiz.textContent = "";
            button_Start_Quiz.style.backgroundColor = "white";
            button_Quiz1.textContent = "";
            button_Quiz1.style.backgroundColor = "white";
            button_Quiz2.textContent = "";
            button_Quiz2.style.backgroundColor = "white";
            button_Quiz3.textContent = "";
            button_Quiz3.style.backgroundColor = "white";
            button_Quiz4.textContent = "";  
            button_Quiz4.style.backgroundColor = "white";  
            answer_Condition.textContent = "";
}

// everything about timers
var ResetTimerQuiz= function()
{
    timerQuiz = 75;
}

var PenalizeScore = function()
{
    timerQuiz -= 10;
}

// Check if there no more time on the timer
var CheckTimeOnTheTimer = function()
{
    if (timerQuiz <= 0)
    {
        timerQuiz = 0;
        Clear_Clear_Main();
        INITIALISE_GAME();
    }
}

var ShowCurrentHighScoreTimerState= function()
{
    var line_Leaderboard = "Leader High Scores : ";
    var line_Time_Left = "Time : ";
    quiz_Leaderboard_Heading.textContent = line_Leaderboard + high_Score_Name + " " + high_Score ;
    quiz_Time_Left_Heading.textContent = line_Time_Left + timerQuiz;
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
            Output_Data_Types_Menu();
            menu_choice = START_QUIZ;
        });
   
}

var OutputMainMenu = function()
{
    GetAnswersMain(); 
}


// Menu data type
var ShowQuestion_Data_types = function()
{

    quiz_question_line1.textContent = "Common used data types DO Not Include";
}

var ShowChoiceMenu_Data_types = function()
{
    var data_Types = [ "strings", "booleans", "alerts", "numbers" ] ;
     
    button_Quiz1.textContent = data_Types[0];
    button_Quiz2.textContent = data_Types[1];
    button_Quiz3.textContent = data_Types[2];
    button_Quiz4.textContent = data_Types[3];
}

var GetAnswers_Menu_Data = function()
{
        ShowCurrentHighScoreTimerState();
        ShowQuestion_Data_types();
        ShowChoiceMenu_Data_types();

        button_Quiz1.addEventListener("click", function()
        {
            ShowWrongMessage();
            PenalizeScore();
            CheckTimeOnTheTimer();
            ShowCurrentHighScoreTimerState();
        });

        button_Quiz2.addEventListener("click", function()
        {
            ShowCorrectMessage();
            ShowCurrentHighScoreTimerState();
            CheckTimeOnTheTimer();

            // all done Output in build
            Clear_Clear_All_Done();
            Output_All_Done_Menu();

        });

        button_Quiz3.addEventListener("click", function()
        {
            ShowWrongMessage();
            PenalizeScore();
            CheckTimeOnTheTimer();
            ShowCurrentHighScoreTimerState();
        });

        button_Quiz4.addEventListener("click", function()
        {
            ShowWrongMessage();
            PenalizeScore();
            CheckTimeOnTheTimer();
            ShowCurrentHighScoreTimerState();
        });
        
}

var Output_Data_Types_Menu = function()
{
    GetAnswers_Menu_Data();
}

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

var INITIALISE_GAME = function()
{
    ResetTimerQuiz();
    Clear_Clear_Main(); 
    OutputMainMenu(); 
}

INITIALISE_GAME();

