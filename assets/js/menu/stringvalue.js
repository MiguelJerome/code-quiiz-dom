var StringValueMenu = {

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
        Menu.ShowButtonQuiz3();
        Menu.ShowButtonQuiz4();
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
        //Leaderboard.ShowTitleBar();
        StringValueMenu.ShowQuestion();
        StringValueMenu.ShowQuestionChoice();

        Menu._buttonQuiz1.addEventListener("click", function()
        {
            InfoConditionAnswer.ShowPlayerWrongMessage();
            Timer.Penalize();
            Timer.CheckNoMoreTime();
            Leaderboard.ShowTitleBar();
        });

            Menu._buttonQuiz2.addEventListener("click", function()
        {
            InfoConditionAnswer.ShowPlayerCorrectMessage();
            Timer.CheckNoMoreTime();
            Leaderboard.ShowTitleBar();

               // all done Output in build
            UsefulToolMenu.Clear();
            UsefulToolMenu.ShowOutputOnScreen();

        });

        Menu._buttonQuiz3.addEventListener("click", function()
        {
            InfoConditionAnswer.ShowPlayerWrongMessage();
            Timer.Penalize();
            Timer.CheckNoMoreTime();
            Leaderboard.ShowTitleBar()
        });

        Menu._buttonQuiz4.addEventListener("click", function()
        {
            InfoConditionAnswer.ShowPlayerWrongMessage();
            Timer.Penalize();
            Timer.CheckNoMoreTime();
            Leaderboard.ShowTitleBar()
        });
    },

    ShowOutputOnScreen()
    {
       // Leaderboard.ShowTitleBar();
        //Timer.Show();
        StringValueMenu.HideElement();
        StringValueMenu.ShowElement();
        StringValueMenu.Clear();
        Menu.ShowLeaderboardAndTimer();
        StringValueMenu.GetPlayerAnswer();
    }

};
