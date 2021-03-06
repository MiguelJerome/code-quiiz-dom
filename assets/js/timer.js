var Timer = {

    _TimeFinal: 0,
    _time: 0,
    _textTimer: "Time : ",
    _labelTimer: document.querySelector("#timer-html"),
    _id: 0,
    _ON: 1,
    _OFF: 0,
    _START:3,
    _STOP: 4,
    _PENALIZE: 5,
    _RESET: 6,
    _PAUSE: 7,
    _SLEEP_MODE: 8,
    _timerState: 0, 
   
    RunLogic()
    {
        Timer.CheckNoMoreTime();

        Timer.Show();
        
       // Timer.DecreaseTime();
        switch(Timer._timerState)
        {
                case Timer._START:
                    Timer.Initialize();
                    Timer.Reset();
                    
                    Timer.SetTimerState(Timer._ON);
                    break;
                case Timer._ON:
                   // Timer.DecreaseTime();
                    Timer.Show();
                    break;
                case Timer._OFF:
                    break;
                case Timer._STOP:
                    Timer.Stop();
                    break;
                case Timer._PENALIZE:
                    break;
                case Timer._RESET:
                    Timer.Reset();
                    break;
                case Timer._PAUSE:
                    Timer.Show();
                    break;
                case Timer._SLEEP_MODE:
                    break;
                default:break;
            
        }

    },
    
    SetTimerState(timerState)
    {
        Timer._timerState = timerState;
    },

    GetTimerState()
    {
        return Timer._timerState;
    },

    GetTimerId()
    {
        return Timer._id;
    },

    SetTimerId(timerId)
    {
        Timer._id += timerId;
    },

    Show()
    {
        
        Timer._labelTimer.textContent = Timer._textTimer + Timer._time;
    },

    ShowFinal()
    {
        Timer._labelTimer.textContent = Timer._textTimer + Timer._TimeFinal;
    },
 
    Initialize()
    {
        Timer._textTimer = "Time : ";
        Timer._time = 0;
        Timer._labelTimer = document.querySelector("#timer-html");
    },

    Stop()
    {
       
        if(Timer._time <= 0)
        {
            Timer._time = 0
            return 1;
        }
       
    },

    Reset()
    {
        const QUIZ_START_TIME = 75;
        Timer._time = QUIZ_START_TIME;
    },

     Penalize()
    {
        const SCORE_PENALITY = 10;
        Timer._time -= SCORE_PENALITY;
        Timer.SetTimerId(SCORE_PENALITY);
    },

    CheckNoMoreTime()
    {
        if (Timer._time <= 0 && Timer.GetTimerState() != Timer._OFF)
        {
            Timer._time = 0;
            GameMain.SetGameState(GameMain._GAME_HIGH_SCORES);
            GameMain.RunLogic();
        }
    },

    DecreaseTime()
    {
        
              if( Timer._time > 0 && Timer._TimeFinal < Timer._time ) 
              {
                setTimeout(Timer.DecreaseTime, 1000);
                Timer._time--;
                Timer.Show();
              }
        
    },

    LoadCurrentTime()
    {
        return Timer._time;
    }
};








