// condition answer
var answer_Condition = document.querySelector("#answer_Condition");

// Message Comment Grade on Answer for a question
var ShowCorrectMessage = function()
{
    answer_Condition.textContent = "Correct!";
}

var ShowWrongMessage = function()
{
    answer_Condition.textContent = "Wrong!";
}
