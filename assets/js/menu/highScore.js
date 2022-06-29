var HighScoreMenu = {

    HideElement()
    {
        Menu.HideButtonStartQuiz();
        Menu.HideButtonQuiz1();
        Menu.HideButtonQuiz2();
        Menu.HideButtonQuiz3();
        Menu.HideButtonQuiz4();
        //InputSubmitInterface.HideInputTextData();
        //InputSubmitInterface.HideTextInputSubmit();
        //InputSubmitInterface.HideButtonSubmit();
    },

    ShowElement()
    {
        Menu.ShowButtonQuiz1();
        Menu.ShowButtonQuiz2();
        
    },

    Clear()
    {
      Menu.FlushTextOutput();
    },

    ShowQuestion()
    {
        Menu._quizTitleScreen.textContent = "High scores";
        //Menu._quizQuestionLine1.textContent = "1. " + Leaderboard._playerName  + Leaderboard._playerScore;
    },

    ShowQuestionChoice()
    {
        var highScores = [ "Go back", "Clear high scores" ] ;
     
        Menu._buttonQuiz1.textContent = highScores[0];
        Menu._buttonQuiz2.textContent = highScores[1];
    },

    GetPlayerAnswer()
    {
        //Leaderboard.ShowTitleBar();
        HighScoreMenu.ShowQuestion();
        HighScoreMenu.ShowQuestionChoice();

        Menu._buttonQuiz1.addEventListener("click", function()
        {
            INITIALISE_GAME();
        });

        Menu._buttonQuiz2.addEventListener("click", function()
        {
            //localStorage.clear();
            HighScoreMenu.ShowOutputOnScreen();

        });

    },

    ShowOutputOnScreen()
    {
        HighScoreMenu.HideElement();
        HighScoreMenu.ShowElement();
        HighScoreMenu.Clear();
        HighScoreMenu.GetPlayerAnswer();
    }

};