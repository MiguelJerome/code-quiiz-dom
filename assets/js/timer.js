var timerQuiz = 0;

var DecreaseTimer = function()
{
    var line_Time_Left = "Time : ";
    if (timerQuiz > 0)
    {
        setTimeout(DecreaseTimer, 1000)
        timerQuiz--;
        quiz_Time_Left_Heading.textContent = line_Time_Left + timerQuiz;
        //document.querySelector("#timer-left").innerHTML = timerQuiz;
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
var CheckTimeOnTheTimer = function()
{
    if (timerQuiz <= 0)
    {
        timerQuiz = 0;
        Clear_Clear_Main();
        INITIALISE_GAME();
    }
}