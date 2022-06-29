var AllDoneMenu = {

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
        var line2 = "Your final score is : " + Timer.LoadCurrentTime() + ".";
        Menu._quizTitleScreen.textContent = line1;
        Menu._quizQuestionLine1.textContent = line2;
    },

    GetPlayerAnswer()
    {
        Menu.ShowLeaderboardAndTimer();
        AllDoneMenu.ShowFinalQuizStats();
        InputSubmitInterface._buttonSubmit.addEventListener("click", function()
       {
            Leaderboard.ApprovePlayerScore(Timer.LoadCurrentTime(), TemporaryStorage.LoadPlayerScoreLocalStorage());
            HighScoreMenu.ShowOutputOnScreen();   
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

