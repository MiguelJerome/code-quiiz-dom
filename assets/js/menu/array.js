var ArrayMenu = {

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
        Menu._quizQuestionLine1.textContent = "Arrays in JavaScript can be used to store _________.";
    },

    ShowQuestionChoice()
    {
        var arrays  = [ "numbers and strings", "other arrays", "booleans", "all of the above" ] ;
     
        Menu._buttonQuiz1.textContent = arrays[0];
        Menu._buttonQuiz2.textContent = arrays[1];
        Menu._buttonQuiz3.textContent = arrays[2];
        Menu._buttonQuiz4.textContent = arrays[3];
    },

    GetPlayerAnswer()
    {
        //Leaderboard.ShowTitleBar();
        ArrayMenu.ShowQuestion();
        ArrayMenu.ShowQuestionChoice();

        Menu._buttonQuiz1.addEventListener("click", function()
        {
            InfoConditionAnswer.ShowPlayerWrongMessage();
            Timer.Penalize();
            Timer.CheckNoMoreTime();
            Leaderboard.ShowTitleBar();
        });

            Menu._buttonQuiz2.addEventListener("click", function()
        {
            InfoConditionAnswer.ShowPlayerWrongMessage();
            Timer.Penalize();
            Timer.CheckNoMoreTime();
            Leaderboard.ShowTitleBar();
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
            InfoConditionAnswer.ShowPlayerCorrectMessage();
            Timer.CheckNoMoreTime();
            Leaderboard.ShowTitleBar();

             // all done Output in build
            StringValueMenu.Clear();
           StringValueMenu.ShowOutputOnScreen();
        });
    },

    ShowOutputOnScreen()
    {
        //Leaderboard.ShowTitleBar();
       // Timer.Show();
       ArrayMenu.HideElement();
       ArrayMenu.ShowElement();
       ArrayMenu.Clear();
       Menu.ShowLeaderboardAndTimer();
        ArrayMenu.GetPlayerAnswer();
    }

};
