// all the game state variables

var GAME_iNTIALAZATION = 1;
var GAME_OVER = 6;
var game_state = 0;


var startTheGame = function()
{
    //TemporaryStorage.Initialize();
    Leaderboard.Initialize();
    Timer.Initialize();
    //InputSubmitInterface.DisplayFlexFormInitialePlayer();
    
}

var INITIALISE_GAME = function()
{
    //InputSubmitInterface.ShowFormInititalePlayert();
    //Menu.ShowButtonStartQuiz();
    if(game_state == 0)
    {
        startTheGame();
        //game_state = GAME_iNTIALAZATION;
    }
    Timer.Reset();
    //MainMenu.HideElement();

   //MainMenu.ShowElement();
    //Leaderboard.Initialize();
   // Timer.Initialize();

    MainMenu.ShowOutputOnScreen(); 
}

INITIALISE_GAME();
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