// all the querySelector
var quiz_Title_Heading = document.querySelector("#quiz-title");
var quiz_Leaderboard_Heading = document.querySelector("#leaderboard");
var quiz_Time_Left_Heading = document.querySelector("#time-left");
var quiz_question_line1 = document.querySelector("#p-line1");
var quiz_question_line2 = document.querySelector("#p-line2");
var quiz_question_line3 = document.querySelector("#p-line3");

// button
var button_Start_Quiz = document.querySelector("#start-quiz-button");
var button_Quiz1 = document.querySelector("#quiz-button1");
var button_Quiz2 = document.querySelector("#quiz-button2");
var button_Quiz3 = document.querySelector("#quiz-button3");
var button_Quiz4 = document.querySelector("#quiz-button4");

// all done
var name_Initials = document.querySelector("#initial-text");

var input_String = document.getElementById("#input-name");


var button_Submit = document.querySelector("#submit");



// Clear menu main
var Clear_Clear_Main = function()
{
    
            quiz_Title_Heading.textContent = "";
            quiz_question_line1.textContent = "";
            quiz_question_line2.textContent = "";
            quiz_question_line3.textContent = "";
            button_Start_Quiz.textContent = "";
            button_Start_Quiz.style.backgroundColor = "blueviolet";
            button_Quiz1.textContent = "";
            button_Quiz1.style.backgroundColor = "white";
            button_Quiz2.textContent = "";
            button_Quiz2.style.backgroundColor = "white";
            button_Quiz3.textContent = "";
            button_Quiz3.style.backgroundColor = "white";
            button_Quiz4.textContent = "";  
            button_Quiz4.style.backgroundColor = "white";  
            answer_Condition.textContent = "";
}

// Clear menu Data_Type
var Clear_Clear_Data_Type = function()
{
            quiz_Title_Heading.textContent = "";
            quiz_question_line1.textContent = "";
            quiz_question_line2.textContent = "";
            quiz_question_line3.textContent = "";
            button_Start_Quiz.textContent = "";
            button_Start_Quiz.style.backgroundColor = "white";
            button_Quiz1.textContent = "";
            button_Quiz1.style.backgroundColor = "blueviolet";
            button_Quiz2.textContent = "";
            button_Quiz2.style.backgroundColor = "blueviolet";
            button_Quiz3.textContent = "";
            button_Quiz3.style.backgroundColor = "blueviolet";
            button_Quiz4.textContent = "";  
            button_Quiz4.style.backgroundColor = "blueviolet";  
            answer_Condition.textContent = "";
}

// Clear all done menu
var Clear_Clear_All_Done = function()
{
            quiz_Title_Heading.textContent = "";
            quiz_question_line1.textContent = "";
            quiz_question_line2.textContent = "";
            quiz_question_line3.textContent = "";
            button_Start_Quiz.textContent = "";
            button_Start_Quiz.style.backgroundColor = "white";
            button_Quiz1.textContent = "";
            button_Quiz1.style.backgroundColor = "white";
            button_Quiz2.textContent = "";
            button_Quiz2.style.backgroundColor = "white";
            button_Quiz3.textContent = "";
            button_Quiz3.style.backgroundColor = "white";
            button_Quiz4.textContent = "";  
            button_Quiz4.style.backgroundColor = "white";  
            answer_Condition.textContent = "";
}