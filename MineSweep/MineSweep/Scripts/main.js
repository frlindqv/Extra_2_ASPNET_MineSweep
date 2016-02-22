(function () {


$(document).ready(function () {

        //Global instance 
        var mineSweep = new System.MineSweepGame();

    $('.carousel').carousel({
        interval: 7500
    });

    mineSweep.Player().SetName("Fredrik"); 
    mineSweep.Player().IncreaseClicks();

    mineSweep.InitGame(); 

    //mineSweep.SetPlayer(new Player("Fredrik"));

    //mineSweep.InitGame();
    $("h1").click(function () {
        console.log(mineSweep.Player().Clicks());
    });

        $("#game-level").on('mousedown', 'input.node', function (e) {

            switch (e.which) {
                case 1:
                    mineSweep.RunGame($(this));
                    break;
                case 3:
                    alert("Höger knapp nedtryckt");
                    break;
            }


});

    });



    //Check if namespace System.Game exists
    var System = System || {};

    // Attach class to namespace System
    System.MineSweepGame = (function () {


// Class representing a game of minesweep.
function MineSweep() {



   //Player attached to the game.
    var player = new Player();

    // private field holding the current level; 
    var level;

            this.Level = function () { return level; };

    // Method responsible for initalizing a new game session.
    this.InitGame = function () {

        CreateLevel(10, 10);

                FillBoard("Skiten funkar");

    };

            // Method responsible for running the game.
            this.RunGame = function (curNode) {

                UpdateLevel(curNode);
    };

    // Method resposible for ending a game session.
            this.EndGame = function () {


    };

    // Get current player
    this.Player = function () {
        return player;
            };

    // Set current player. 
    this.SetPlayer = function (newPlayer) {
        player = newPlayer;
            };

    function CreateLevel(length, width) {
        level = new Array(); 
       
        for (i = 0; i < parseInt(length) ; i++) {
           
            tmpRow = new Array(); 

            for (j = 0; j < (parseInt(width)) ; j++) {
               
                        tmpNode = new Node(j, i);
                tmpRow.push(tmpNode);
               
            }

            level.push(tmpRow);
                }


                //Add mines; 
                for (i = 0; i < 8; i++) {
                    rndX = Math.floor((Math.random() * 10));
                    rndY = Math.floor((Math.random() * 10));
                    level[rndY][rndX].IsMine = true;
        }
        
                AddNumOfMinesToLevel();




    }
    // Update level during game.
            function UpdateLevel(curNode) {
        // Check mines. 

                curPosX = curNode.index();
                curPosY = curNode.parent().index();
                node = level[curPosY][curPosX];


                if (node.IsMine) {
                    alert("Du förlorade");
                }
                else if (node.Value > 0) {
                  
                    curNode.val(node.Value);
            }
                else {
                    Reveal(curPosX, curPosY);
        }





    }


            function Reveal(x, y) {

                if ((x >= 0 && y >= 0 && x < level.length && y < level.length)) {

                    var node = level[y][x];

                    $("#game-level").children().eq(y).children().eq(x).css("background-color", "yellow")

                    if (!node.IsRevealed && node.Value == 0) {
                        level[y][x].IsRevealed = true;

                        Reveal(x - 1, y);
                        Reveal(x + 1, y);
                        Reveal(x, y + 1);
                        Reveal(x, y - 1);

}
                    else {


                        $("#game-level").children().eq(y).children().eq(x).val(level[y][x].Value > 0 ? level[y][x].Value : "");
                        level[y][x].IsRevealed = true;
                        return;
      
    }
                }
                else { return; }

    }

            function AddNumOfMinesToLevel() {


                for (i = 0; i < level.length ; i++) {

                    for (j = 0; j < level[0].length ; j++) {

                        level[i][j].Value = GetNumberOfMines(j, i);
    }

    }

}

            function GetNumberOfMines(x, y) {
                sum = 0;

                for (k = y - 1; k <= y + 1; k++) {
                    for (m = x - 1; m <= x + 1; m++) {

                        if (k >= 0 && m >= 0 && m < level.length && k < level.length) {

                            if (level[k][m].IsMine) {

                                sum++;
                            }
                        }
                    }
                }

                return sum;
}

            function FillBoard(msg) {

    //as2D = new Array();
    //as2D[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 1);
    //as2D[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 2);
    //as2D[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 3);


    var tmpArr = document.getElementById("game-level");


                for (var i = 0; i < level.length; i++) {
        var row = "<div>";

                    for (j = 0; j < level.length; j++) {

                            row += "<input class='node' value=''/>";
                        
        }

        row += "</div>";
        $(tmpArr).append(row)
    }
    
};



        }



        return MineSweep;

    })();


    function GameObject(positionX, positionY) {

        var _x = positionX;
        var _y = positionY;

        this.GetX = function () { return _x; };
        this.GetY = function () { return _y; };


    }





    function Node(x, y) {

        //Call parent constructor.
        GameObject.call(this, x, y);

        this.IsMine = false;

        this.IsRevealed = false;

        this.IsMarked = false;

        this.Mines = 0;

    }
    // Create a Game object instance and attach to the pointer in Node.
    Node.prototype = Object.create(GameObject.prototype);
    // Set constructor as Node.
    Node.prototype.constructor = Node;


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

})();