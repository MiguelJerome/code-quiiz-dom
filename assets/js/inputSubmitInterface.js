var InputSubmitInterface ={

    _textInputSubmit: document.querySelector("#text-input-submit"),
    _inputTextData: document.querySelector("#input-text"),
    _buttonSubmit: document.querySelector("#button-submit"),
    _formInititalePlayer: document.querySelector("#form-initale-player"),

    DisplayFlexFormInitialePlayer()
    {
        InputSubmitInterface._formInititalePlayer.style.display = "inline"
        InputSubmitInterface._inputTextData = document.querySelector("#input-text");
        InputSubmitInterface._buttonSubmit = document.querySelector("#button-submit");
        InputSubmitInterface._textInputSubmit = document.querySelector("#text-input-submit");
    },

    HideFormInititalePlayer()
    {
        InputSubmitInterface._formInititalePlayer.style.display = "none";
    },

    HideTextInputSubmit()
    {
        InputSubmitInterface._textInputSubmit.style.visibility = "hidden";
    },

    HideInputTextData()
    {
        InputSubmitInterface._inputTextData.style.visibility = "hidden";
    },

    HideButtonSubmit()
    {
        InputSubmitInterface._buttonSubmit.style.visibility = "hidden";
    },

    ShowFormInititalePlayert()
    {
        InputSubmitInterface._formInititalePlayer.style.visibility = "visibility";
    },

    ShowTextInputSubmit()
    {
        InputSubmitInterface._textInputSubmit.style.visibility = "visibility";
    },

    ShowInputTextData()
    {
        InputSubmitInterface._inputTextData.style.visibility = "visibility";
    },

    ShowButtonSubmit()
    {
        InputSubmitInterface._buttonSubmit.style.visibility = "visibility";
    }

};






