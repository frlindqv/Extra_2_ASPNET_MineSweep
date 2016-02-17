//Global instance 
var mineSweep = new MineSweep();


$(document).ready(function ()
{
    $('.carousel').carousel({
        interval: 7500
    });

    mineSweep.Player().SetName("Fredrik"); 
    mineSweep.Player().IncreaseClicks();

    //mineSweep.SetPlayer(new Player("Fredrik"));

    //mineSweep.InitGame();
    $("h1").click(function () {
        console.log(mineSweep.Player().Clicks());
    });

});


// Class representing a game of minesweep.
function MineSweep(){

   //Player attached to the game.
    var player = new Player();

    // private field holding the current level; 
    var level;

    // Method responsible for initalizing a new game session.
    this.InitGame = function () {};

    // Method responsible for running a  running the game.
    this.RunGame = function () { };

    // Method resposible for ending a game session.
    this.EndGame = function () { };

    // Get current player
    this.Player = function () {
        return player;
    }

    // Set current player. 
    this.SetPlayer = function (newPlayer) {
        player = newPlayer;
    }

    //this.CreateLevel(length, width)
    //{
    //    level = new Array(length);

      

    //}



}

// Class representing a player. 
function Player() {

    var name;
    var time;
    var clicks = 0;

    this.Name = function (){ return name; };

    this.SetName = function (val) { name = val; };

    this.Clicks = function () { return clicks; };

    this.IncreaseClicks = function () { clicks++; };

}

//Class representing a level
function Level()
{


}