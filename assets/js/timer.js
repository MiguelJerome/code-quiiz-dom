var Timer = {

    _time: 0,
    _textTimer: "Time : ",
    _labelTimer: document.querySelector("#timer-html")
};

var InitialiseTimer = function()
{
    Timer._textTimer = "Time : ";
    Timer._time = 0;
    Timer._labelTimer = document.querySelector("#timer-html");
}


var ShowTimer = function()
{
    Timer._labelTimer.textContent = Timer._textTimer + Timer._time;
}

var DecreaseTime = function()
{
    if (Timer._time > 0)
    {
        StopTimer();
        if(game_state != GAME_OVER)
        {
        setTimeout(DecreaseTime, 1000)
        Timer._time--;
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
    Timer._time = 75;
}

var PenalizeTime= function()
{
    Timer._time -= 10;
}

// Check if there no more time on the timer
var CheckNoMoreTime = function()
{
    if (Timer._time <= 0)
    {
        Timer._time = 0;
        Clear_Clear_Main();
        INITIALISE_GAME();
    }
}

