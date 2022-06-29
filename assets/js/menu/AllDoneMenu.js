var AllDoneMenu = {

    HideElement()
    {
        Menu.HideButtonStartQuiz
        Menu.HideButtonQuiz1();
        Menu.HideButtonQuiz2();
        Menu.HideButtonQuiz3();
        Menu.HideButtonQuiz4();
       
    },

    ShowElement()
    {
        Menu.ShowQuizTitleScreen();
        Menu.ShowQuizQuestionLine1();
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
        Leaderboard.ShowTitleBar();
        AllDoneMenu.ShowFinalQuizStats();
        InputSubmitInterface._buttonSubmit.addEventListener("click", function()
       {
            Leaderboard.ApprovePlayerScore(Timer.LoadCurrentTime(), TemporaryStorage.LoadPlayerScoreLocalStorage());
            HighScoreMenu.Clear();
            
            HighScoreMenu.ShowOutputOnScreen();
            
       }); 

        
    },

    ShowOutputOnScreen()
    {
        //game_state = GAME_OVER;
       // AllDoneMenu.ShowElement();
       //Leaderboard.ShowTitleBar();
        //Timer.Show();
        AllDoneMenu.HideElement();
        AllDoneMenu.ShowElement();
        AllDoneMenu.Clear();
        Menu.ShowLeaderboardAndTimer();
        AllDoneMenu.GetPlayerAnswer();
    }

};

