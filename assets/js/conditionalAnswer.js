var InfoConditionAnswer = {
    _lableInfo: document.querySelector("#answer_Condition")
};

// Message Comment Grade on Answer for a question
var ShowCorrectMessage = function()
{
    InfoConditionAnswer._lableInfo.textContent = "Correct!";
}

var ShowWrongMessage = function()
{
    InfoConditionAnswer._lableInfo.textContent = "Wrong!";
}
