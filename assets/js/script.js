var startTheGame = function()
{
    Leaderboard.Initialize();
    Timer.Initialize();
}

var INITIALISE_GAME = function()
{
    if(GameMain._gameState == GameMain._GAME_INIT)
    {
        startTheGame();  
    }
    Timer.Reset();
    GameMain.SetGameState(GameMain._GAME_MAIN_MENU)
    GameMain.OpenMainMenu();
    //MainMenu.ShowOutputOnScreen(); 
}


//INITIALISE_GAME();

//GameMain.OpenHighScore();

  //  GameMain.OpenHighScore();

 //GameMain.Initialisation();
//Timer.Reset();
//startTheGame();

/* step 1*/
//MainMenu.ShowOutputOnScreen();
/* step 2 */
//DataTypeMenu.ShowOutputOnScreen();
/* step 3*/
//ConditionMenu.ShowOutputOnScreen();
/* step 4*/
//ArrayMenu.ShowOutputOnScreen();
/* step 5*/
//StringValueMenu.ShowOutputOnScreen();
/* step 6*/
//UsefulToolMenu.ShowOutputOnScreen();
/* step 6*/
//AllDoneMenu.ShowOutputOnScreen();
/* step 7*/
//HighScoreMenu.ShowOutputOnScreen();

GameMain.RunLogic();

GameMain.OpenHighScore();


//Timer.SetTimerState(Timer._START);
//Timer.SetTimerState(Timer._ON);

//Timer.RunLogic();