
// Menu data type
var ShowQuestion_Data_types = function()
{

    quiz_question_line1.textContent = "Common used data types DO Not Include";
}

var ShowChoiceMenu_Data_types = function()
{
    var data_Types = [ "strings", "booleans", "alerts", "numbers" ] ;
     
    button_Quiz1.textContent = data_Types[0];
    button_Quiz2.textContent = data_Types[1];
    button_Quiz3.textContent = data_Types[2];
    button_Quiz4.textContent = data_Types[3];
}

var GetAnswers_Menu_Data = function()
{
        ShowCurrentHighScoreTitleBar();
        ShowQuestion_Data_types();
        ShowChoiceMenu_Data_types();

        button_Quiz1.addEventListener("click", function()
        {
            ShowWrongMessage();
            PenalizeTime();
            CheckNoMoreTime();
            ShowCurrentHighScoreTitleBar();
        });

        button_Quiz2.addEventListener("click", function()
        {
            ShowCorrectMessage();
            ShowCurrentHighScoreTitleBar();
            CheckNoMoreTime();

            // all done Output in build
            Clear_Clear_All_Done();
            
            Output_All_Done_Menu();

        });

        button_Quiz3.addEventListener("click", function()
        {
            ShowWrongMessage();
            PenalizeTime();
            CheckNoMoreTime();
            ShowCurrentHighScoreTitleBar();
        });

        button_Quiz4.addEventListener("click", function()
        {
            ShowWrongMessage();
            PenalizeTime();
            CheckNoMoreTime();
            ShowCurrentHighScoreTitleBar();
        });
        
}

var Output_Data_Types_Menu = function()
{
    GetAnswers_Menu_Data();
}