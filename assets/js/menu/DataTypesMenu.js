var DataTypeMenu = {

    HideElement()
    {
        Menu.HideButtonStartQuiz();
      
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
        //Leaderboard.ShowTitleBar();
        DataTypeMenu.ShowQuestion();
        DataTypeMenu.ShowQuestionChoice();

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
            ConditionMenu.Clear();
            ConditionMenu.ShowOutputOnScreen();

        });

        Menu._buttonQuiz3.addEventListener("click", function()
        {
            InfoConditionAnswer.ShowPlayerWrongMessage();
            Timer.Penalize();
            Timer.CheckNoMoreTime();
            Leaderboard.ShowTitleBar();
        });

        Menu._buttonQuiz4.addEventListener("click", function()
        {
            InfoConditionAnswer.ShowPlayerWrongMessage();
            Timer.Penalize();
            Timer.CheckNoMoreTime();
            Leaderboard.ShowTitleBar();
        });
    },

    ShowOutputOnScreen()
    {
        //Leaderboard.ShowTitleBar();
        //Timer.Show();
        DataTypeMenu.HideElement();
        DataTypeMenu.ShowElement();
        DataTypeMenu.Clear();
       //Leaderboard.ShowTitleBar();
        // Timer.Show();
        Menu.ShowLeaderboardAndTimer();
        DataTypeMenu.GetPlayerAnswer();
    }

};

