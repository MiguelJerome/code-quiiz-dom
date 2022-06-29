var Timer = {

    _time: 0,
    _textTimer: "Time : ",
    _labelTimer: document.querySelector("#timer-html"),
   
    Show()
    {
        Timer._labelTimer.textContent = Timer._textTimer + Timer._time;
    },
 
    Initialize()
    {
        Timer._textTimer = "Time : ";
        Timer._time = 0;
        Timer._labelTimer = document.querySelector("#timer-html");
    },

    Stop()
    {
    if (game_state == GAME_OVER)
        {
            return;
        }
    },

    Reset()
    {
        const QUIZ_START_TIME = 75;
        Timer._time = QUIZ_START_TIME;
    },

     Penalize()
    {
        Timer._time -= 10;
    },

    CheckNoMoreTime()
    {
        if (Timer._time <= 0)
        {
            Timer._time = 0;
            INITIALISE_GAME();
        }
    },

    DecreaseTime()
    {
        if (Timer._time > 0)
        {
            Timer.Stop();
            if(game_state != GAME_OVER)
            {
                setTimeout(Timer.DecreaseTime, 1000)
                Timer._time--;
                Timer.Show();
            }
            Timer.Show();
        }
    },

    LoadCurrentTime()
    {
        return Timer._time;
    }
};








