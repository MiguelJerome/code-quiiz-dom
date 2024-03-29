var Menu ={
    _layoutTextWidget: document.querySelector("#text-widget-layout"),
    _quizTitleScreen: document.querySelector("#quiz-info-question-title"),
    _quizQuestionLine1: document.querySelector("#quiz-info-question-line1"),
    _quizQuestionLine2: document.querySelector("#quiz-info-question-line2"),
    _quizQuestionLine3: document.querySelector("#quiz-info-question-line3"),
    _buttonStartQuiz: document.querySelector("#start-quiz-button"),
    _buttonQuiz1: document.querySelector("#quiz-button1"),
    _buttonQuiz2: document.querySelector("#quiz-button2"),
    _buttonQuiz3: document.querySelector("#quiz-button3"),
    _buttonQuiz4: document.querySelector("#quiz-button4"),

    FlushTextOutput()
    {
        var line1 = "";
        var line2 = "";
        var line3 = "";
        var line4 = "";
        Menu._quizTitleScreen.textContent = line1;
        Menu._quizQuestionLine1.textContent = line2;
        Menu._quizQuestionLine2.textContent = line3;
        Menu._quizQuestionLine3.textContent = line4; 
    },

    ShowLayoutTextWidget()
    {
        Menu._layoutTextWidget.style.display = "flex";
    },
    HideLayoutTextWidget()
    {
        Menu._layoutTextWidget.style.display = "none";
    },

    ShowLeaderboardAndTimer()
    {
        Leaderboard.ShowTitleBar();
        Timer.Show();
    },

    HideQuizTitleScreen()
    {
        Menu._quizTitleScreen.style.visibility = "hidden";
    },

    HideQuizQuestionLine1()
    {
        Menu._quizQuestionLine1.style.visibility = "hidden";
    },

    HideQuizQuestionLine2()
    {
        Menu._quizQuestionLine2.style.visibility = "hidden";
    },

    HideQuizQuestionLine3()
    {
        Menu._quizQuestionLine3.style.visibility = "hidden";
    },

    HideButtonStartQuiz()
    {
        Menu._buttonStartQuiz.style.visibility = "hidden";
    },

    HideButtonQuiz1()
    {
        Menu._buttonQuiz1.style.visibility = "hidden";
    },

    HideButtonQuiz2()
    {
        Menu._buttonQuiz2.style.visibility = "hidden";
    },

    HideButtonQuiz3()
    {
        Menu._buttonQuiz3.style.visibility = "hidden";
    },

    HideButtonQuiz4()
    {
        Menu._buttonQuiz4.style.visibility = "hidden";
    },

    ShowQuizTitleScreen()
    {
        Menu._quizTitleScreen.style.visibility = "visible";
    },

    ShowQuizQuestionLine1()
    {
        Menu._quizQuestionLine1.style.visibility = "visible";
    },

    ShowQuizQuestionLine2()
    {
        Menu._quizQuestionLine2.style.visibility = "visible";
    },

    ShowQuizQuestionLine3()
    {
        Menu._quizQuestionLine3.style.visibility = "visible";
    },

    ShowButtonStartQuiz()
    {
        Menu._buttonStartQuiz.style.visibility = "visible";
    },

    ShowButtonQuiz1()
    {
        Menu._buttonQuiz1.style.visibility = "visible";
    },

    ShowButtonQuiz2()
    {
        Menu._buttonQuiz2.style.visibility = "visible";
    },

    ShowButtonQuiz3()
    {
        Menu._buttonQuiz3.style.visibility = "visible";
    },

    ShowButtonQuiz4()
    {
        Menu._buttonQuiz4.style.visibility = "visible";
    }


};








