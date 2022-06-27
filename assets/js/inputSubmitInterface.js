var InputSubmitInterface ={

    _textInputSubmit: document.querySelector("#text-input-submit"),
    _inputTextData: document.getElementById("#input-text"),
    _buttonSubmit: document.querySelector("#button-submit"),

    HideTextInputSubmit()
    {
        this._textInputSubmit.style.visibility = "hidden";
    },

    HideInputTextData()
    {
        this._inputTextData.style.visibility = "hidden";
    },

    HideButtonSubmit()
    {
        this._buttonSubmit.style.visibility = "hidden";
    },

    ShowTextInputSubmit()
    {
        this._textInputSubmit.style.visibility = "visibility";
    },

    ShowInputTextData()
    {
        this._inputTextData.style.visibility = "visibility";
    },

    ShowButtonSubmit()
    {
        this._buttonSubmit.style.visibility = "visibility";
    }

};






