
//var quiz_Title_Heading = document.querySelector("#quiz-title");
var quiz_question_line1 = document.querySelector("#p-line1");
var quiz_question_line2 = document.querySelector("#p-line2");
var quiz_question_line3 = document.querySelector("#p-line3");



var ShowQuestionMenuMain = function()
{
    var line1 = "Coding Quiz Challenge";
    var line2 = "Try to answer the following code related questions within the time limit.";
    var line3 = "Keep in mind that incorrect answers will penelize your score/time";
    var line4 = "by ten seconds!";
    //quiz_Title_Heading.textContent = line1;
    quiz_question_line1.textContent = line2;
    quiz_question_line2.textContent = line3;
    quiz_question_line3.textContent = line4;
}

ShowQuestionMenuMain();

