var win_lines = [
	["1","2","3"],
    ["1","4","7"],
    ["1","5","9"],
    ["2","5","8"],
    ["3","5","7"],
    ["3","6","9"],
	["4","5","6"],
	["7","8","9"],
];
var player1 = [];
var player2 = [];

var cont1 = 0;
var cont2 = 0;

var win_nums1 = 0;
var win_nums2 = 0;


var fTsF = true;  // firstPlayer = True; secondPlayer = False;

function ClickAction(cellNum){
    if(fTsF){
        document.getElementById("i"+cellNum).onclick = '#';
        cont1++;
    document.getElementById("i"+cellNum).style.backgroundImage = 'url("img/x.png")';
        player1.push(cellNum);
        if(cont1 > 2){
            player1.sort();
            CheckPlayerMoves1("X");
        }
        document.getElementById("Pl").innerHTML = "Player 2"; 
        fTsF = false;
    }
    else{
        cont2++; 
        document.getElementById("i"+cellNum).onclick = '#';
    document.getElementById("i"+cellNum).style.backgroundImage = 'url("img/o.png")';
        player2.push(cellNum);
        if(cont2 > 2){
            player2.sort();
            CheckPlayerMoves2("O");
        }
        document.getElementById("Pl").innerHTML = "Player 1";
        fTsF = true;
    }
}

function CheckPlayerMoves1(WHOWON){
    for(che = 0; che < win_lines.length;che++){
        for(i = 0; i < player1.length; i++){
            for(j = 0; j < 3; j++){
                if(win_lines[che][j] == player1[i]){
                    win_nums1++;
                    i++;
                    j=0;
                }
            }
        }
        if(win_nums1 > 2){
        document.getElementById("win").innerHTML = "Player 1(X) Win";
            end();
        }
        win_nums1=0;
    }
}

function CheckPlayerMoves2(WHOWON){
    for(che = 0; che < win_lines.length;che++){
        for(i = 0; i < player2.length; i++){
            for(j = 0; j < 3; j++){
                if(win_lines[che][j] == player2[i]){
                    win_nums2++;
                    i++;
                    j=0;
                }
            }
        }
        if(win_nums2 > 2){
        document.getElementById("win").innerHTML = "Player 2(O) Win"
            end();
        }
        win_nums2=0;
    }
}
function end(){
    for(i = 1; i < 10; i++){
        document.getElementById("i"+i).onclick = '#';
    }
}
function refreshPage(){
    window.location.reload();
} 