var AllDoneMenu = {

    HideElement()
    {
        Menu.HideButtonStartQuiz();
        Menu.HideButtonQuiz1();
        Menu.HideButtonQuiz2();
        Menu.HideButtonQuiz3();
        Menu.HideButtonQuiz4();
        InfoConditionAnswer.HideLayoutCondition();
        
    },

    ShowElement()
    {
        Menu.ShowQuizTitleScreen();
        Menu.ShowQuizQuestionLine1();
        InputSubmitInterface.DisplayFlexFormInitialePlayer();
    },

    Clear()
    {
          Menu.FlushTextOutput();
    },

    ShowFinalQuizStats()
    {
       
        var line1 = "All done!";
        var line2 = "Your final score is : " + Timer._TimeFinal + ".";
        Menu._quizTitleScreen.textContent = line1;
        Menu._quizQuestionLine1.textContent = line2;
    },

    GetPlayerAnswer()
    {
        //Timer._time = 0;
        //Timer.ShowFinal();
        Menu.ShowLeaderboardAndTimer();
        AllDoneMenu.ShowFinalQuizStats();
        InputSubmitInterface._buttonSubmit.addEventListener("click", function()
       {
            //GameMain.SetGameState(GameMain._GAME_HIGH_SCORES);
            Leaderboard.ApprovePlayerScore(Timer._TimeFinal, TemporaryStorage.LoadPlayerScoreLocalStorage());
            //GameMain.OpenHighScore();  
            
            GameMain.SetGameState(GameMain._GAME_HIGH_SCORES);
            GameMain.RunLogic();
            
       }); 
 
    },

    ShowOutputOnScreen()
    {
        
        AllDoneMenu.HideElement();
        AllDoneMenu.ShowElement();
        AllDoneMenu.Clear();
        Menu.ShowLeaderboardAndTimer();
        AllDoneMenu.GetPlayerAnswer();
    }

};

