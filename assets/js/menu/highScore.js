var HighScoreMenu = {

    HideElement()
    {
        Menu.HideButtonStartQuiz();
        Menu.HideButtonQuiz1();
        Menu.HideButtonQuiz2();
        Menu.HideButtonQuiz3();
        Menu.HideButtonQuiz4();
        InputSubmitInterface.HideFormInititalePlayer();
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
        var textPositionPlayer = "1. ";
        var line1 = textPositionPlayer + JSON.parse(TemporaryStorage.LoadPlayerNameFromLocalStore()) + " - " + TemporaryStorage.LoadPlayerScoreLocalStorage();
        Menu._quizTitleScreen.textContent = "High scores";
        Menu._quizQuestionLine1.textContent = line1;

        
    },

    ShowQuestionChoice()
    {
        var highScores = [ "Go back", "Clear high scores" ] ;
        Menu._buttonQuiz1.textContent = highScores[0];
        Menu._buttonQuiz2.textContent = highScores[1];
    },

    GetPlayerAnswer()
    {
        
        HighScoreMenu.ShowQuestion();
        HighScoreMenu.ShowQuestionChoice();
    
        Menu._buttonQuiz1.addEventListener("click", function()
        {
            /*
            if(GameMain.GetGameState() == GameMain._GAME_INIT)
            {
            GameMain.SetGameState(GameMain._GAME_INIT);
            GameMain.Initialisation();
            }
            */

            GameMain.SetGameState(GameMain._GAME_INIT);
            GameMain.RunLogic();
        });

        Menu._buttonQuiz2.addEventListener("click", function()
        {
            localStorage.clear();
            
            //HighScoreMenu.ShowOutputOnScreen();
            GameMain.SetGameState(GameMain._GAME_HIGH_SCORES);
            GameMain.RunLogic();
        });
        
    },

    ShowOutputOnScreen()
    {
    
      //Timer.Initialize();
       //Timer.Reset();
        HighScoreMenu.HideElement();
        HighScoreMenu.ShowElement();
        HighScoreMenu.Clear();
        HighScoreMenu.GetPlayerAnswer();
    }

};