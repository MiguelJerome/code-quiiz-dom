var Timer = {

    _time: 0,
    _textTimer: "Time : ",
    _labelTimer: document.querySelector("#timer-html"),
   
    Show()
    {
        this._labelTimer.textContent = this._textTimer + this._time;
    },
 
    Initialize()
    {
        this._textTimer = "Time : ";
        this._time = 0;
        this._labelTimer = document.querySelector("#timer-html");
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
        this._time = QUIZ_START_TIME;
    },

     Penalize()
    {
        this._time -= 10;
    },

    CheckNoMoreTime()
    {
        if (this._time <= 0)
        {
            this._time = 0;
            INITIALISE_GAME();
        }
    },

    DecreaseTime()
    {
        if (Timer.LoadCurrentTime() > 0)
        {
            Timer.Stop();
            if(game_state != GAME_OVER)
            {
                setTimeout(Timer.DecreaseTime, 1000)
                Timer._time--;
                Timer.Show();
            }
        }
    },

    LoadCurrentTime()
    {
        return this._time;
    }
};








