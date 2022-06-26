var time;
var textTimer;
var labelTimer;

var InitialiseTimer = function()
{
    textTimer = "Time : ";
    time = 0;
    labelTimer = document.querySelector("#timer-html");
}


var ShowTimer = function()
{
    labelTimer.textContent = textTimer + time;
}

var DecreaseTime = function()
{
    if (time > 0)
    {
        StopTimer();
        if(game_state != GAME_OVER)
        {
        setTimeout(DecreaseTime, 1000)
        time--;
        ShowTimer();
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

var ResetTimer = function()
{
    time = 75;
}

var PenalizeTime= function()
{
    time -= 10;
}

// Check if there no more time on the timer
var CheckNoMoreTime = function()
{
    if (time <= 0)
    {
        time = 0;
        Clear_Clear_Main();
        INITIALISE_GAME();
    }
}

