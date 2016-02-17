﻿//Global instance 
var mineSweep = new MineSweep();


$(document).ready(function () {
    $('.carousel').carousel({
        interval: 7500
    });

    //fillBoard();

    mineSweep.Player().SetName("Fredrik");
    mineSweep.Player().IncreaseClicks();

    mineSweep.InitGame();

    //mineSweep.SetPlayer(new Player("Fredrik"));

    //mineSweep.InitGame();
    $("h1").click(function () {
        console.log(mineSweep.Player().Clicks());
    });

});


// Class representing a game of minesweep.
function MineSweep() {

    //Player attached to the game.
    var player = new Player();

    // private field holding the current level; 
    var level;

    this.Level = function () { return level };

    // Method responsible for initalizing a new game session.
    this.InitGame = function () {

        CreateLevel(10, 10);

        UpdateLevel();

        mineSweep.FillBoard("Skiten funkar");
        console.log(level);

    };

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

    function CreateLevel(length, width) {
        level = new Array();

        for (i = 0; i < parseInt(length) ; i++) {

            tmpRow = new Array();

            for (j = 0; j < (parseInt(width)) ; j++) {

                tmpNode = new Node();
                tmpNode.SetXpos(j);
                tmpNode.SetYpos(i);
                tmpNode.setValue(Math.floor(Math.random() * 2))
                tmpRow.push(tmpNode);

            }

            level.push(tmpRow);

        }
        //alert("Level length" + level.length);
        


    }

    function UpdateLevel() {

        //var newLevel; 

        //for (i = 0; i < level.length; i++) {

        //    newLevel += "<div>";

        //    for (j = 0; j < level[i].length; j++) {

        //        newLevel += "<input class='btn btn-primary node'/>";

        //    }

        //    newLevel += "</div>";

        //}

        //$("#game-level").append(newLevel); 
    }



}

function Node() {
    var x;
    var y;
    var value;

    this.setValue = function (tmpVal) { value = tmpVal;}

    // Set current player. 
    this.SetXpos = function (coordinateX) {
        x = coordinateX;
    }

    // Set current player. 
    this.SetYpos = function (coordinateY) {
        y = coordinateY;
    }

    // Set current player. 
    this.GetXpos = function () {
        return x;
    }

    // Set current player. 
    this.GetYpos = function () {
        return y;
    }

}


// Class representing a player. 
function Player() {

    var name;
    var time;
    var clicks = 0;

    this.Name = function () { return name; };

    this.SetName = function (val) { name = val; };

    this.Clicks = function () { return clicks; };

    this.IncreaseClicks = function () { clicks++; };

}

MineSweep.prototype.FillBoard = function (msg) {

    //as2D = new Array();
    //as2D[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 1);
    //as2D[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 2);
    //as2D[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 3);

    alert(msg);
    var tmpArr = document.getElementById("game-level");


    for (var i = 0; i < this.Level().length; i++) {
        var row = "<div>";

        for (j = 0; j < this.Level()[0].length; j++) {
            row += "<input class='node'>";
        }

        row += "</div>";
        $(tmpArr).append(row)
    }

};