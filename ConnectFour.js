var game_active = false; 
var active_player = 0;
var gameboard = [];
var player_color = []; 
player_color[1] = "red"; 
player_color[2] = "yellow"; 

for (row=0; row<=5; row++) {
	gameboard[row] = [];
	for (col=0; col<=6; col++) {
		gameboard[row][col] = 0;
	}	
}

function startGame() {
    if(game_active == true) return false;
    game_active=true
    active_player = 1; 
    drawBoard();
    
}
function drawBoard() {
    
    if(game_active==false) return;
    checkForWin();
    for (col = 0; col<=6; col++) {
        for (row=0; row<=5; row++) {
            document.getElementById('square_'+row+'_'+col).outerHTML ="<td id='square_" + row + "_"+ col +"' class='board_square player"+gameboard[row][col]+"' onclick='turn("+col+")' onhover='hover("+col+")'></td>";
        }	
    }
}
function checkForWin() {
    /* There are many ways this algorithm can be accomplished.  Basically you want to check all possibility for a win.
    Given the size of the board, checking all possibilities will not be a huge task for the computer, so I will go 
    with an easy to understand, straightforward algorithm */
    /* Ultimately there are 4 ways to win - left-to-right, diagnol up, diagnol down, and top to bottom.  This 
    function will check each of these situations twice - one for each player. */
    
    //check left-to-right
    //check for player 1 and 2
    for (i=1; i<=2; i++) {
        //since a winning row must be 4 long, we only need to check the first 3 rows, 0,1,and 2
        for (col = 0; col <=3; col++) {
            for (row = 0; row <=5; row++) {
                //check to see if the gameboard item is set to the player we are checking, if so, lets check the next 3 for a match
                if (gameboard[row][col] == i) {
                    if ((gameboard[row][col+1] == i) && (gameboard[row][col+2] == i) && (gameboard[row][col+3] == i)) {
                        endGame(i);//a match has been made, so run EndGame with the player that had the win
                        return true; //stop checking for a win - the game is over.
                    }
                }
            }
        }
    }
    
    //check top-to-bottom
    for (i=1; i<=2; i++) {
        //since a winning row must be 4 long, we only need to check the first 3 rows, 0,1,and 2
        for (col = 0; col <=6; col++) {
            for (row = 0; row <=2; row++) {
                //check to see if the gameboard item is set to the player we are checking, if so, lets check the next 3 for a match
                if (gameboard[row][col] == i) {
                    if ((gameboard[row+1][col] == i) && (gameboard[row+2][col] == i) && (gameboard[row+3][col] == i)) {
                        drawBoard();
                        endGame(i); //a match has been made - run endGame for the player who had the match.
                        return true; //stop checking for a win - the game is over.
                    }
                }
            }
        }
    }
    
    //check diagnol down
    for (i=1; i<=2; i++) {
        //since a winning row must be 4 long, we only need to check the first 3 rows, 0,1,and 2
        for (col = 0; col <=3; col++) {
            //we also only need to check the bottom most columns - as the win must be upwards
            for (row = 0; row <=2; row++) {
                //check to see if the gameboard item is set to the player we are checking, if so, lets check the next 3 for a match
                if (gameboard[row][col] == i) {
                    if ((gameboard[row+1][col+1] == i) && (gameboard[row+2][col+2] == i) && (gameboard[row+3][col+3] == i)) {
                        drawBoard();
                        endGame(i);
                        return true;
                    }
                }
            }
        }
    }
                    
    //check diagnol up
    for (i=1; i<=2; i++) {
        //since a winning row must be 4 long, we only need to check the first 3 rows, 0,1,and 2
        for (col = 0; col <=3; col++) {
            //we also only need to check the bottom most columns - as the win must be upwards
            for (row = 3; row <=5; row++) {
                //check to see if the gameboard item is set to the player we are checking, if so, lets check the next 3 for a match
                if (gameboard[row][col] == i) {
                    if ((gameboard[row-1][col+1] == i) && (gameboard[row-2][col+2] == i) && (gameboard[row-3][col+3] == i)) {
                        drawBoard();
                        endGame(i);
                        return true;
                    }
                }
            }
        }
    }
}
function endGame() {
    game_active = false; //set the "game_active" to false, so that it can be started again.
}

function turn(col) {
    for(row=5;row>=0;row--) {
        if(gameboard[row][col] == 0) {
            gameboard[row][col] = active_player;
            drawBoard();
            if(active_player == 1) {
                active_player = 2;
            } else if(active_player == 2) {
                active_player = 1;
            }
            return true
        }
    }
}
