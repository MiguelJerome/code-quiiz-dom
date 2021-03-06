var InfoConditionAnswer = {
    _layoutCondition: document.querySelector("#condition-layout"),
    _lableInfo: document.querySelector("#answer_Condition"),
    _horizontalLine: document.querySelector("#horizontal-line"),

    Initialize()
    {
        InfoConditionAnswer._lableInfo = document.querySelector("#answer_Condition");
    },

    ShowHorizontalLine()
    {
        InfoConditionAnswer._horizontalLine.style.display = "flex";
    },

    HideHorizontalLine()
    {
        InfoConditionAnswer._horizontalLine.style.display = "none";
    },
    
    ShowLayoutCondition()
    {
        
        InfoConditionAnswer._layoutCondition.style.display = "flex";
        //InfoConditionAnswer.ShowHorizontalLine();
    },

    HideLayoutCondition()
    {
        
        InfoConditionAnswer._layoutCondition.style.display = "none";
        InfoConditionAnswer.HideHorizontalLine();
    },

    ShowPlayerCorrectMessage()
    {
        InfoConditionAnswer._lableInfo.textContent = "Correct!";
    },

    ShowPlayerWrongMessage()
    {
        InfoConditionAnswer._lableInfo.textContent = "Wrong!";
    },
   
    Remove()
    {
        InfoConditionAnswer._lableInfo.remove();
    },

    HideLabelInfo()
    {
        InfoConditionAnswer._lableInfo.visibility = "hidden";
    },

    ShowLabelInfo()
    {
        InfoConditionAnswer._lableInfo.visibility = "visibilty";
    }
};





