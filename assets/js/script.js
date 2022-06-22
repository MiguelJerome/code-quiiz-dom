// all the querySelector
var quiz_Title_Heading = document.querySelector("#quiz-title");
var quiz_Leaderboard_Heading = document.querySelector("#leaderboard");
var quiz_Time_Left_Heading = document.querySelector("#time-left");
var quiz_question_line1 = document.querySelector("#p-line1");
var quiz_question_line2 = document.querySelector("#p-line2");
var quiz_question_line3 = document.querySelector("#p-line3");

var timerQuiz = 0;
var high_Score = 0;
var high_Score_Name = "Nobody";

// intialise the game state
 var INITIALISE_GAME = 0;
var GAME_MENU = 1;
var START_GAME = 2;
var GAME_RUN = 3;
var GAME_RESTART = 4;
var GAME_OVER = 5;
var GAME_EXIT = 6;
var GAME_HIGH_SCORE = 7;

var game_state = INITIALISE_GAME;

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
        game_state = GAME_HIGH_SCORE;
    }
}

var ShowCurrentHighScoreTimerState= function()
{
    var line_Leaderboard = "Leader High Scores : ";
    var line_Time_Left = "Time :";
    quiz_Leaderboard_Heading.textContent = line_Leaderboard;
    quiz_Time_Left_Heading.textContent = line_Time_Left;
    //console.log("Leader High Scores : " + high_Score_Name + " = " + high_Score + "\t\t\t\t\t\t\t\t\t Time :" + timerQuiz);
}


// main menu Quiz
var ShowQuestionMenuMain = function()
{
    var line1 = "Coding Quiz Challenge";
    var line2 = "Try to answer the following code related questions within the time limit.";
    var line3 = "Keep in mind that incorrect answers will penelize your score/time";
    var line4 = "by ten seconds!";
    quiz_Title_Heading.textContent = line1;
    quiz_question_line1.textContent = line2;
    quiz_question_line2.textContent = line3;
    quiz_question_line3.textContent = line4;
}

ShowQuestionMenuMain();

var ShowChoiceMenuMain = function()
{
    var answer_Choice = "Please press 1 to start the quiz :";
    return answer_Choice;
}

var GetAnswersMain = function()
{
    var START_QUIZ = 1;
    var menu_choice = START_QUIZ;
    do
    {   
        ShowCurrentHighScoreTimerState();
        ShowQuestionMenuMain();
        AskEnterYourChoice();
        menu_choice = window.prompt(ShowChoiceMenuMain());
    }while(menu_choice != START_QUIZ);
}

var OutputMainMenu = function()
{
    GetAnswersMain(); 
}

ShowCurrentHighScoreTimerState();
        ShowQuestionMenuMain();



/*
// Game endgine
while(game_state != GAME_EXIT)
{
    switch (game_state)
    {
        case INITIALISE_GAME:
            ResetTimerQuiz();
            game_state = GAME_MENU;
            break;
        case GAME_MENU:
           // OutputMainMenu();
            game_state = START_GAME;
            break;
        case START_GAME:
            game_state = GAME_RUN;
            break;
        case GAME_RESTART:
            game_state = INITIALISE_GAME;
            break;
        case GAME_RUN:
           // GameLogic();
            break;
        case GAME_OVER:
           // Output_All_Done_Menu();
            game_state = GAME_HIGH_SCORE;
            break;
        case GAME_HIGH_SCORE:
            //Output_High_Scores_Menu();
            break;
            default:break;
    }

}
*/
