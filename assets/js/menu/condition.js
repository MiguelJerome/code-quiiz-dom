var ConditionMenu = {

    HideElement()
    {
        Menu.HideButtonStartQuiz();
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
        ConditionMenu.ShowQuestion();
        ConditionMenu.ShowQuestionChoice();

        Menu._buttonQuiz1.addEventListener("click", function()
        {
            InfoConditionAnswer.ShowPlayerWrongMessage();
            Timer.Penalize();
            Timer.CheckNoMoreTime();
            Menu.ShowLeaderboardAndTimer();
        });

            Menu._buttonQuiz2.addEventListener("click", function()
        {
            InfoConditionAnswer.ShowPlayerWrongMessage();
            Timer.Penalize();
            Timer.CheckNoMoreTime();
            Menu.ShowLeaderboardAndTimer();
        });

        Menu._buttonQuiz3.addEventListener("click", function()
        {
            InfoConditionAnswer.ShowPlayerCorrectMessage();
            Timer.CheckNoMoreTime();
            Menu.ShowLeaderboardAndTimer();
            ArrayMenu.ShowOutputOnScreen();
        });

        Menu._buttonQuiz4.addEventListener("click", function()
        {
            InfoConditionAnswer.ShowPlayerWrongMessage();
            Timer.Penalize();
            Timer.CheckNoMoreTime();
            Menu.ShowLeaderboardAndTimer();
        });
    },

    ShowOutputOnScreen()
    {
        ConditionMenu.HideElement();
        ConditionMenu.ShowElement();
        ConditionMenu.Clear();
        Menu.ShowLeaderboardAndTimer();
        ConditionMenu.GetPlayerAnswer();
    }

};    
