var MainMenu = {

    HideElement()
    {
        
        Menu.HideButtonQuiz1();
        Menu.HideButtonQuiz2();
        Menu.HideButtonQuiz3();
        Menu.HideButtonQuiz4();
       // InputSubmitInterface.HideInputTextData();
       //InputSubmitInterface.HideTextInputSubmit();
       //InputSubmitInterface.HideButtonSubmit();
       // InputSubmitInterface.ShowInputTextData();
        //InputSubmitInterface.ShowTextInputSubmit;
       //InputSubmitInterface.ShowButtonSubmit();
    },

    ShowElement()
    {
        
        Menu.ShowButtonQuiz1();
        Menu.ShowButtonQuiz2();
        Menu.ShowButtonQuiz3();
        Menu.ShowButtonQuiz4();
    },

    ShowInstruction()
    {
        var line1 = "Coding Quiz Challenge";
        var line2 = "Try to answer the following code related questions within the time limit.";
        var line3 = "Keep in mind that incorrect answers will penalize your score/time";
        var line4 = "by ten seconds!";
        Menu._quizTitleScreen.textContent = line1;
        Menu._quizQuestionLine1.textContent = line2;
        Menu._quizQuestionLine2.textContent = line3;
        Menu._quizQuestionLine3.textContent = line4;
    },

    ShowInstructionChoice()
    {
       Menu._buttonStartQuiz.textContent = "Start Quiz"; 
    },

    GetPlayerAnswer()
    {
        var START_QUIZ = 1;
        var menu_choice = START_QUIZ;
        
        MainMenu.ShowInstruction();
        MainMenu.ShowInstructionChoice();
   
        Menu._buttonStartQuiz.addEventListener("click", function()
        {
            DataTypeMenu.Clear();
            Timer. DecreaseTime();
            MainMenu.ShowElement();
            Menu.HideButtonStartQuiz();
            DataTypeMenu.ShowOutputOnScreen();
            menu_choice = START_QUIZ;
        });

    },

    ShowOutputOnScreen()
    {
        Leaderboard.ShowTitleBar();
        Timer.Show();
        MainMenu.GetPlayerAnswer();
    }

};



