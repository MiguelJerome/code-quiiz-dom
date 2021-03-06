var GameMain = {

    _gameState: 1,
    _GAME_INIT: 1,
    _GAME_MAIN_MENU: 2,
    _GAME_START_QUIZ: 3,
    _GAME_DATA_TYPEs_MENU:4,
    _GAME_CONDITION_MENU: 5,
    _GAME_ARRAY_MENU: 6,
    _GAME_STRING_VALUE_MENU: 7,
    _GAME_USEFULTOOL_MENU: 8,
    _GAME_ALL_DONE_MENU: 9,
    _RUN_GAME: 10,
    _RESTART_GAME: 11,
    _GAME_ALL_DONE: 12,
    _GAME_HIGH_SCORES: 13,

    RunLogic()
    {
        Timer.RunLogic();
        switch(GameMain.GetGameState())
        {
            case GameMain._GAME_INIT:
                GameMain.Initialisation();
                break;
            case GameMain._GAME_MAIN_MENU:
                GameMain.OpenMainMenu();
                break;
            case GameMain._GAME_DATA_TYPEs_MENU:
                GameMain.OpenDataTypesMenu();
                break;
            case GameMain._GAME_CONDITION_MENU:
                GameMain.OpenConditionMenu();
                break;
            case GameMain._GAME_ARRAY_MENU:
                GameMain.OpenArrayMenu();
                break;  
            case GameMain._GAME_STRING_VALUE_MENU:
                GameMain.OpenStringValue();
                break;
            case GameMain._GAME_USEFULTOOL_MENU:
                GameMain.OpenUsefulTool();
                break;
            case GameMain._GAME_ALL_DONE_MENU:
                GameMain.OpenAllDoneMenu();
                break;
            case GameMain._GAME_HIGH_SCORES:
                
                GameMain.OpenHighScore();
                break;  
            case GameMain.RestartGame:
                GameMain.Initialisation();
                break; 

                default: break;
        
        }
        
    },

    GetGameState()
    {
        return GameMain._gameState;
    },
    SetGameState(currentGameState)
    {
        GameMain._gameState = currentGameState;
    },

    Initialisation()
    {
        Menu.ShowLayoutTextWidget();
        INITIALISE_GAME();
        //GameMain.SetGameState(GameMain._GAME_HIGH_SCORES);
    },

    OpenMainMenu()
    {
        Menu.ShowLayoutTextWidget();
        MainMenu.ShowOutputOnScreen();
    },

    OpenDataTypesMenu()
    {
        DataTypeMenu.ShowOutputOnScreen();
    },

    OpenConditionMenu()
    {
        ConditionMenu.ShowOutputOnScreen();
    },

    OpenArrayMenu()
    {
        ArrayMenu.ShowOutputOnScreen();
    },

    OpenStringValue()
    {
        StringValueMenu.ShowOutputOnScreen();
    },

    OpenUsefulTool()
    {
        UsefulToolMenu.ShowOutputOnScreen();
    },

    StartQuiz()
    {
        GameMain.RunGame();
    },

    RunGame()
    {
        DataTypeMenu.ShowOutputOnScreen();
    },

    RestartGame()
    {
        GameMain.Initialisation();
    },

    OpenAllDoneMenu()
    {
        AllDoneMenu.ShowOutputOnScreen();
    },

    OpenHighScore()
    {
        HighScoreMenu.ShowOutputOnScreen();
    }

};
