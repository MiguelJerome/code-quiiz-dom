var Menu ={
    _quizTitleScreen: document.querySelector("#quiz-info-question-title"),
    _quizQuestionLine1: document.querySelector("#quiz-info-question-line1"),
    _quizQuestionLine2: document.querySelector("#quiz-info-question-line2"),
    _quizQuestionLine3: document.querySelector("#quiz-info-question-line3"),
    _buttonStartQuiz: document.querySelector("#start-quiz-button"),
    _buttonQuiz1: document.querySelector("#quiz-button1"),
    _buttonQuiz2: document.querySelector("#quiz-button2"),
    _buttonQuiz3: document.querySelector("#quiz-button3"),
    _buttonQuiz4: document.querySelector("#quiz-button4"),

    HideQuizTitleScreen()
    {
        this._quizTitleScreen.style.visibility = "hidden";
    },

    HideQuizQuestionLine1()
    {
        this._quizQuestionLine1.style.visibility = "hidden";
    },

    HideQuizQuestionLine2()
    {
        this._quizQuestionLine2.style.visibility = "hidden";
    },

    HideQuizQuestionLine3()
    {
        this._quizQuestionLine3.style.visibility = "hidden";
    },

    HideButtonStartQuiz()
    {
        this._buttonStartQuiz.style.visibility = "hidden";
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
        this._quizTitleScreen.style.visibility = "visible";
    },

    ShowQuizQuestionLine1()
    {
        this._quizQuestionLine1.style.visibility = "visible";
    },

    ShowQuizQuestionLine2()
    {
        this._quizQuestionLine2.style.visibility = "visible";
    },

    ShowQuizQuestionLine3()
    {
        this._quizQuestionLine3.style.visibility = "visible";
    },

    ShowButtonStartQuiz()
    {
        this._buttonStartQuiz.style.visibility = "visible";
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






var InitializeQuizTitleScreen = function()
{
    Menu._quizTitleScreen = document.querySelector("#quiz-info-question-title");
}


// Clear menu Data_Type
var Clear_Clear_Data_Type = function()
{
            Menu._quizTitleScreen.textContent = "";
            Menu._quizQuestionLine1.textContent = "";
            Menu._quizQuestionLine2.textContent = "";
            Menu._quizQuestionLine3.textContent = "";
            Menu._buttonStartQuiz.textContent = "";
            Menu._buttonStartQuiz.style.backgroundColor = "white";
            Menu._buttonQuiz1.textContent = "";
            Menu._buttonQuiz1.style.backgroundColor = "blueviolet";
            Menu._buttonQuiz2.textContent = "";
            Menu._buttonQuiz2.style.backgroundColor = "blueviolet";
            Menu._buttonQuiz3.textContent = "";
            Menu._buttonQuiz3.style.backgroundColor = "blueviolet";
            Menu._buttonQuiz4.textContent = "";  
            Menu._buttonQuiz4.style.backgroundColor = "blueviolet";  
            InfoConditionAnswer._lableInfo.textContent = "";
}

// Clear all done menu
var Clear_Clear_All_Done = function()
{
            Menu._quizTitleScreen.textContent = "";
            Menu._quizQuestionLine1.textContent = "";
            Menu._quizQuestionLine2.textContent = "";
            Menu._quizQuestionLine3.textContent = "";
            Menu._buttonStartQuiz.textContent = "";
            Menu._buttonStartQuiz.style.backgroundColor = "white";
            Menu._buttonQuiz1.textContent = "";
            Menu._buttonQuiz1.style.backgroundColor = "white";
            Menu._buttonQuiz2.textContent = "";
            Menu._buttonQuiz2.style.backgroundColor = "white";
            Menu._buttonQuiz3.textContent = "";
            Menu._buttonQuiz3.style.backgroundColor = "white";
            Menu._buttonQuiz4.textContent = "";  
            Menu._buttonQuiz4.style.backgroundColor = "white";  
            InfoConditionAnswer._lableInfo.textContent = "";
}