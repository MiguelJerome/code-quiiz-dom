var InfoConditionAnswer = {
    _lableInfo: document.querySelector("#answer_Condition"),

    Initialize()
    {
        this._lableInfo = document.querySelector("#answer_Condition");
    },

    ShowPlayerCorrectMessage()
    {
        this._lableInfo.textContent = "Correct!";
    },

    ShowPlayerWrongMessage()
    {
        this._lableInfo.textContent = "Wrong!";
    },
   
    Remove()
    {
        this._lableInfo.remove();
    }
};





