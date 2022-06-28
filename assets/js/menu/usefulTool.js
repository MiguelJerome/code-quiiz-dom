var UsefulToolMenu = {

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
        Menu._quizTitleScreen.textContent = "";
        Menu._quizQuestionLine1.textContent = "";
        Menu._quizQuestionLine2.textContent = "";
        Menu._quizQuestionLine3.textContent = "";
    },

    ShowQuestion()
    {
        Menu._quizQuestionLine1.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
    },

    ShowQuestionChoice()
    {
        var usefulool  = [ "JavaScript", "terminal/Bash", "for loops", "console.log" ] ;
     
        Menu._buttonQuiz1.textContent = usefulool[0];
        Menu._buttonQuiz2.textContent = usefulool[1];
        Menu._buttonQuiz3.textContent = usefulool[2];
        Menu._buttonQuiz4.textContent = usefulool[3];
    },

    GetPlayerAnswer()
    {
        Leaderboard.ShowTitleBar();
        UsefulToolMenu.ShowQuestion();
        UsefulToolMenu.ShowQuestionChoice();

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
            InfoConditionAnswer.ShowPlayerCorrectMessage();
            Timer.CheckNoMoreTime();
            Leaderboard.ShowTitleBar();

             // all done Output in build
            AllDoneMenu.Clear();
            AllDoneMenu.ShowOutputOnScreen();
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
        UsefulToolMenu.GetPlayerAnswer();
    }

};