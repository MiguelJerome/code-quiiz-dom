

// Menu data type
var ShowQuestion_Data_types = function()
{

    Menu._quizQuestionLine1.textContent = "Common used data types DO Not Include";
}

var ShowChoiceMenu_Data_types = function()
{
    var data_Types = [ "strings", "booleans", "alerts", "numbers" ] ;
     
    Menu._buttonQuiz1.textContent = data_Types[0];
    Menu._buttonQuiz2.textContent = data_Types[1];
    Menu._buttonQuiz3.textContent = data_Types[2];
    Menu._buttonQuiz4.textContent = data_Types[3];
}

var GetAnswers_Menu_Data = function()
{
        Leaderboard.ShowTitleBar();
        ShowQuestion_Data_types();
        ShowChoiceMenu_Data_types();

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
            Clear_Clear_All_Done();
            
            Output_All_Done_Menu();

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
        
}

var Output_Data_Types_Menu = function()
{
      Menu._buttonStartQuiz.remove();
    GetAnswers_Menu_Data();
}