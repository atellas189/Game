var game_active = false; 
var active_player = 0;
var gameboard = [];
var player_color = []; 
player_color[1] = "red"; 
player_color[2] = "blue"; 

for (row=0; row<=5; row++) {
	gameboard[row] = [];
	for (col=0; col<=6; col++) {
		gameboard[row][col] = 0;
	}	
}

function drawBoard() {
    for (col = 0; col<=6; col++) {
        for (row=0; row<=5; row++) {
            document.getElementById('square_'+row+'_'+col).innerHTML ="<span class='piece player"+gameboard[row][col]+"'> </span>";
        }	
    }
}

function turn(col) {
    for(row=5;row>=0;row--) {
        if(gameboard[row][col] == 0) {
            gameboard[row][col] = active_player;
            drawBoard();
            if(active_player == 1) {
                active_player == 2;
                console.log(player2)
            } else if(active_player == 2) {
                active_player == 1;
                console.log(player1)
            }
        }
    }
}