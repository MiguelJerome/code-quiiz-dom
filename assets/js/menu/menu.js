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

    RemoveQuizTitleScreen()
    {
        this._quizTitleScreen.remove();
    },

    RemoveQuizQuestionLine1()
    {
        this._quizQuestionLine1.remove();
    },

    RemoveQuizQuestionLine2()
    {
        this._quizQuestionLine2.remove();
    },

    RemoveQuizQuestionLine3()
    {
        this._quizQuestionLine3.remove();
    },

    RemoveButtonStartQuiz()
    {
        this._buttonStartQuiz.remove();
    },

    RemoveButtonQuiz1()
    {
        this._buttonQuiz1.remove();
    },

    RemoveButtonQuiz2()
    {
        this._buttonQuiz2.remove();
    },

    RemoveButtonQuiz3()
    {
        this._buttonQuiz3.remove();
    },

    RemoveButtonQuiz4()
    {
        this._buttonQuiz4.remove();
    }
   
    
};






var InitializeQuizTitleScreen = function()
{
    Menu._quizTitleScreen = document.querySelector("#quiz-info-question-title");
}





// Clear menu main
var Clear_Clear_Main = function()
{
    
            Menu._quizTitleScreen.textContent = "";
            Menu._quizQuestionLine1.textContent = "";
            Menu._quizQuestionLine2.textContent = "";
            Menu._quizQuestionLine3.textContent = "";
            Menu._buttonStartQuiz.textContent = "";
            Menu._buttonStartQuiz.style.backgroundColor = "blueviolet";
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