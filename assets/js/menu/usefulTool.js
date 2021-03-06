var UsefulToolMenu = {

    HideElement()
    {
        Menu.HideButtonStartQuiz();
        Menu.HideButtonQuiz1();
        Menu.HideButtonQuiz2();
        Menu.HideButtonQuiz3();
        Menu.HideButtonQuiz4();
    },

    ShowElement()
    {
        Menu.ShowButtonQuiz1();
        Menu.ShowButtonQuiz2();
        Menu.ShowButtonQuiz3();
        Menu.ShowButtonQuiz4();
        InfoConditionAnswer.ShowLayoutCondition();
    },

    Clear()
    {
        Menu.FlushTextOutput();
    },

    ShowQuestion()
    {
        Menu._quizQuestionLine1.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
    },

    ShowQuestionChoice()
    {
        var usefulool  = [ "JavaScript", "terminal/Bash", "for loops", "console.log" ] ;
        Menu._buttonQuiz1.textContent = usefulool[0];
        Menu._buttonQuiz2.textContent = usefulool[1];
        Menu._buttonQuiz3.textContent = usefulool[2];
        Menu._buttonQuiz4.textContent = usefulool[3];
    },

    GetPlayerAnswer()
    {
        UsefulToolMenu.ShowQuestion();
        UsefulToolMenu.ShowQuestionChoice();

        Menu._buttonQuiz1.addEventListener("click", function()
        {
            InfoConditionAnswer.ShowPlayerWrongMessage();
            //Timer.Penalize();
            // Timer.CheckNoMoreTime();
            Menu.ShowLeaderboardAndTimer();
            GameMain.SetGameState(GameMain._GAME_USEFULTOOL_MENU);
            GameMain.RunLogic();
        });

            Menu._buttonQuiz2.addEventListener("click", function()
        {
            InfoConditionAnswer.ShowPlayerWrongMessage();
            //Timer.Penalize();
            // Timer.CheckNoMoreTime();
            Menu.ShowLeaderboardAndTimer();
            GameMain.SetGameState(GameMain._GAME_USEFULTOOL_MENU);
            GameMain.RunLogic();
        });

        Menu._buttonQuiz3.addEventListener("click", function()
        {
            InfoConditionAnswer.ShowPlayerCorrectMessage();
            // Timer.CheckNoMoreTime();
            Menu.ShowLeaderboardAndTimer();
            //AllDoneMenu.ShowOutputOnScreen();
            Timer._TimeFinal = Timer._time;
            GameMain.SetGameState(GameMain._GAME_ALL_DONE_MENU);
            GameMain.RunLogic();
        });

        Menu._buttonQuiz4.addEventListener("click", function()
        {
            InfoConditionAnswer.ShowPlayerWrongMessage();
            //Timer.Penalize();
            // Timer.CheckNoMoreTime();
            Timer.SetTimerState(Timer._STOP);
            Menu.ShowLeaderboardAndTimer();
            GameMain.SetGameState(GameMain._GAME_USEFULTOOL_MENU);
            GameMain.RunLogic();
        });
    },

    ShowOutputOnScreen()
    {
        UsefulToolMenu.HideElement();
        UsefulToolMenu.ShowElement();
        UsefulToolMenu.Clear();
        Menu.ShowLeaderboardAndTimer();
        UsefulToolMenu.GetPlayerAnswer();
    }

};