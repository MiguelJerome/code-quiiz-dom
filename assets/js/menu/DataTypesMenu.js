var DataTypeMenu = {

    HideElement()
    {
        Menu.HideButtonStartQuiz();
      
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
        Menu._quizQuestionLine1.textContent = "Common used data types DO Not Include";
    },

    ShowQuestionChoice()
    {
        var data_Types = [ "strings", "booleans", "alerts", "numbers" ] ;
        Menu._buttonQuiz1.textContent = data_Types[0];
        Menu._buttonQuiz2.textContent = data_Types[1];
        Menu._buttonQuiz3.textContent = data_Types[2];
        Menu._buttonQuiz4.textContent = data_Types[3];
    },

    GetPlayerAnswer()
    {
        DataTypeMenu.ShowQuestion();
        DataTypeMenu.ShowQuestionChoice();

        Menu._buttonQuiz1.addEventListener("click", function()
        {
            InfoConditionAnswer.ShowPlayerWrongMessage();
            //Timer.Penalize();
            // Timer.CheckNoMoreTime();
            Menu.ShowLeaderboardAndTimer();
            GameMain.SetGameState(GameMain._GAME_DATA_TYPEs_MENU);
            GameMain.RunLogic();

        });

            Menu._buttonQuiz2.addEventListener("click", function()
        {
            InfoConditionAnswer.ShowPlayerCorrectMessage(); 
           
            // Timer.CheckNoMoreTime();
            Menu.ShowLeaderboardAndTimer();
            GameMain.SetGameState(GameMain._GAME_CONDITION_MENU);
            GameMain.RunLogic();
        });

        Menu._buttonQuiz3.addEventListener("click", function()
        {
            InfoConditionAnswer.ShowPlayerWrongMessage();
            //Timer.Penalize();
            // Timer.CheckNoMoreTime();
            Menu.ShowLeaderboardAndTimer();
            GameMain.SetGameState(GameMain._GAME_DATA_TYPEs_MENU);
            GameMain.RunLogic();
        });

        Menu._buttonQuiz4.addEventListener("click", function()
        {
            InfoConditionAnswer.ShowPlayerWrongMessage();
            //Timer.Penalize();
            // Timer.CheckNoMoreTime();
            Menu.ShowLeaderboardAndTimer();
            GameMain.SetGameState(GameMain._GAME_DATA_TYPEs_MENU);
            GameMain.RunLogic();
        });
    },

    ShowOutputOnScreen()
    {
        DataTypeMenu.HideElement();
        DataTypeMenu.ShowElement();
        DataTypeMenu.Clear();
        Menu.ShowLeaderboardAndTimer();
        DataTypeMenu.GetPlayerAnswer();
    }

};

