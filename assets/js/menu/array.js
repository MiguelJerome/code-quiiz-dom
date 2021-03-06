var ArrayMenu = {

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
        Menu._quizQuestionLine1.textContent = "Arrays in JavaScript can be used to store _________.";
    },

    ShowQuestionChoice()
    {
        var arrays  = [ "numbers and strings", "other arrays", "booleans", "all of the above" ] ;
     
        Menu._buttonQuiz1.textContent = arrays[0];
        Menu._buttonQuiz2.textContent = arrays[1];
        Menu._buttonQuiz3.textContent = arrays[2];
        Menu._buttonQuiz4.textContent = arrays[3];
    },

    GetPlayerAnswer()
    {
        ArrayMenu.ShowQuestion();
        ArrayMenu.ShowQuestionChoice();

        Menu._buttonQuiz1.addEventListener("click", function()
        {
            InfoConditionAnswer.ShowPlayerWrongMessage();
            //Timer.Penalize();
            //Timer.CheckNoMoreTime();
            Menu.ShowLeaderboardAndTimer();
            GameMain.SetGameState(GameMain._GAME_ARRAY_MENU);
            GameMain.RunLogic();
        });

            Menu._buttonQuiz2.addEventListener("click", function()
        {
            InfoConditionAnswer.ShowPlayerWrongMessage();
            //Timer.Penalize();
            Timer.CheckNoMoreTime();
            Menu.ShowLeaderboardAndTimer();
            GameMain.SetGameState(GameMain._GAME_ARRAY_MENU);
            GameMain.RunLogic();
        });

        Menu._buttonQuiz3.addEventListener("click", function()
        {
            InfoConditionAnswer.ShowPlayerWrongMessage();
            //Timer.Penalize();
           // Timer.CheckNoMoreTime();
            Menu.ShowLeaderboardAndTimer();
            GameMain.SetGameState(GameMain._GAME_ARRAY_MENU);
            GameMain.RunLogic();
        });

        Menu._buttonQuiz4.addEventListener("click", function()
        {
            InfoConditionAnswer.ShowPlayerCorrectMessage();
            // Timer.CheckNoMoreTime();
            Leaderboard.ShowTitleBar();
            GameMain.SetGameState(GameMain._GAME_STRING_VALUE_MENU);
            GameMain.RunLogic();
        });
    },

    ShowOutputOnScreen()
    {
        ArrayMenu.HideElement();
        ArrayMenu.ShowElement();
        ArrayMenu.Clear();
        Menu.ShowLeaderboardAndTimer();
        ArrayMenu.GetPlayerAnswer();
    }

};
