// all the game state variables

var GAME_iNTIALAZATION = 1;
var GAME_OVER = 6;
var game_state = 0;


var startTheGame = function()
{
    //TemporaryStorage.Initialize();
    Leaderboard.Initialize();
    Timer.Initialize();
}

var INITIALISE_GAME = function()
{
    if(game_state == 0)
    {
        startTheGame();
        game_state = GAME_iNTIALAZATION;
    }
    Timer.Reset();
    MainMenu.Clear();
    Clear_Clear_Main(); 
    OutputMainMenu(); 
}

INITIALISE_GAME();

