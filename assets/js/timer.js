

var lineTimeLeft = "Time : ";

var ShowQuizTimer = function()
{
    quiz_Time_Left_Heading.textContent = lineTimeLeft + timerQuiz;
}

var DecreaseTimer = function()
{
    if (timerQuiz > 0)
    {
        StopTimer();
        if(game_state != GAME_OVER)
        {
        setTimeout(DecreaseTimer, 1000)
        timerQuiz--;
        ShowQuizTimer();
        }
    }
}

var StopTimer = function()
{
    if (game_state == GAME_OVER)
        {
            return;
        }
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
var CheckNoMoreTimer = function()
{
    if (timerQuiz <= 0)
    {
        timerQuiz = 0;
        Clear_Clear_Main();
        INITIALISE_GAME();
    }
}