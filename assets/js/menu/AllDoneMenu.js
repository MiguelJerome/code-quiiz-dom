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
       InputSubmitInterface.ShowTextInputSubmit();
       InputSubmitInterface.ShowButtonSubmit();
       InputSubmitInterface.ShowInputTextData();
    },

    Clear()
    {
            Menu._quizTitleScreen.textContent = "";
            Menu._quizQuestionLine1.textContent = "";
            Menu._quizQuestionLine2.textContent = "";
            Menu._quizQuestionLine3.textContent = ""; 
            InfoConditionAnswer._lableInfo.textContent = "";
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
        
        AllDoneMenu.GetPlayerAnswer();
    }

};

