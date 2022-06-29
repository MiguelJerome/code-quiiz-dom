var ConditionMenu = {

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
        Menu._quizQuestionLine1.textContent = "The condition in and if / else statement is enclosed with _________.";
    },

    ShowQuestionChoice()
    {
        var condition  = [ "quotes", "curly brackets", "parenthesis", "square brackets" ] ;
     
        Menu._buttonQuiz1.textContent = condition[0];
        Menu._buttonQuiz2.textContent = condition[1];
        Menu._buttonQuiz3.textContent = condition[2];
        Menu._buttonQuiz4.textContent = condition[3];
    },

    GetPlayerAnswer()
    {
        //Leaderboard.ShowTitleBar();
        ConditionMenu.ShowQuestion();
        ConditionMenu.ShowQuestionChoice();

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
            ArrayMenu.Clear();
            ArrayMenu.ShowOutputOnScreen();
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
        ConditionMenu.HideElement();
        ConditionMenu.ShowElement();
        ConditionMenu.Clear();
        //Leaderboard.ShowTitleBar();
        //Timer.Show();
        Menu.ShowLeaderboardAndTimer();
        ConditionMenu.GetPlayerAnswer();
    }

};    
