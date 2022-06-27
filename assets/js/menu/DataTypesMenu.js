var DataTypeMenu = {

    HideElement()
    {
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
        Menu._quizTitleScreen.textContent = "";
        Menu._quizQuestionLine1.textContent = "";
        Menu._quizQuestionLine2.textContent = "";
        Menu._quizQuestionLine3.textContent = "";
        InfoConditionAnswer._lableInfo.textContent = "";
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
        Leaderboard.ShowTitleBar();
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
            Leaderboard.ShowTitleBar();
            Timer.CheckNoMoreTime();

            // all done Output in build
            AllDoneMenu.Clear();
            AllDoneMenu.ShowOutputOnScreen();

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
        Menu._buttonStartQuiz.remove();
        DataTypeMenu.GetPlayerAnswer();
    }

};

