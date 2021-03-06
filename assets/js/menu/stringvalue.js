var StringValueMenu = {

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
        Menu._quizQuestionLine1.textContent = "String values must be enclosed within_________ when being assigned to variables.";
    },

    ShowQuestionChoice()
    {
        var stringValue  = [ "commas", "curly brackets", "quotes", "parenthesi" ] ;
        Menu._buttonQuiz1.textContent = stringValue[0];
        Menu._buttonQuiz2.textContent = stringValue[1];
        Menu._buttonQuiz3.textContent = stringValue[2];
        Menu._buttonQuiz4.textContent = stringValue[3];
    },

    GetPlayerAnswer()
    {
        StringValueMenu.ShowQuestion();
        StringValueMenu.ShowQuestionChoice();

        Menu._buttonQuiz1.addEventListener("click", function()
        {
            InfoConditionAnswer.ShowPlayerWrongMessage();
            //Timer.Penalize();
            // Timer.CheckNoMoreTime();
            Menu.ShowLeaderboardAndTimer();
            GameMain.SetGameState(GameMain._GAME_STRING_VALUE_MENU);
            GameMain.RunLogic();
        });

            Menu._buttonQuiz2.addEventListener("click", function()
        {
            InfoConditionAnswer.ShowPlayerCorrectMessage();
            // Timer.CheckNoMoreTime();
            Menu.ShowLeaderboardAndTimer();
            GameMain.SetGameState(GameMain._GAME_USEFULTOOL_MENU);
            GameMain.RunLogic();

        });

        Menu._buttonQuiz3.addEventListener("click", function()
        {
            InfoConditionAnswer.ShowPlayerWrongMessage();
            //Timer.Penalize();
            // Timer.CheckNoMoreTime();
            Menu.ShowLeaderboardAndTimer();
            GameMain.SetGameState(GameMain._GAME_STRING_VALUE_MENU);
            GameMain.RunLogic();
        });

        Menu._buttonQuiz4.addEventListener("click", function()
        {
            InfoConditionAnswer.ShowPlayerWrongMessage();
            //Timer.Penalize();
            //Timer.CheckNoMoreTime();
            Menu.ShowLeaderboardAndTimer();
            GameMain.SetGameState(GameMain._GAME_STRING_VALUE_MENU);
            GameMain.RunLogic();
        });
    },

    ShowOutputOnScreen()
    {
        StringValueMenu.HideElement();
        StringValueMenu.ShowElement();
        StringValueMenu.Clear();
        Menu.ShowLeaderboardAndTimer();
        StringValueMenu.GetPlayerAnswer();
    }

};
