var player1name = "Jack";
var player2name = "";
var turnSwitch = false;
var xCount = 0;
var yCount = 0;
var xScore = 0;
var yScore = 0;

window.onload = function () {
	
	getName();
	document.getElementById("turnText").innerHTML = player1name;

};

function getName() {
	
	player1name = prompt("Enter player 1's name. It must be 6 or fewer characters.");
	
	if(player1name.length <= 0 || player1name.length > 6) {
		
		getName();
		
	}

	player2name = prompt("Enter player 2's name. It must be 6 or fewer characters.");
	
	if(player2name.length <= 0 || player2name.length > 6) {
		
		player2name = prompt("Please enter a valid name, player 2. It must be 6 or fewer characters.");
		
	}
	
	if(player2name.length <= 0 || player2name.length > 6) {
		
		alert("Fine, your name is Derek");
		player2name = "Derek";
		
	}
	
	document.getElementById("p1n").innerHTML = player1name;
	document.getElementById("p2n").innerHTML = player2name;
	alert(player1name + " is X, " + player2name + " is O.");
	
}

function turnCheck(bId, bClass) {
    
    if(turnSwitch == true) {
    	
    	alert("Game over, press the button to restart.");
    	
    } else if (bClass != "yes") {
        
        alert("This space is used, please pick another.");
        
    } else if(bClass == "yes") {
        
        if(xCount != yCount) {
            
            yTurn(bId);
            
        } else if(xCount == yCount) {
            
            xTurn(bId);
            
        }
    } 
}

function xTurn(bId) {
    
    document.getElementById(bId).innerHTML = "X";
    document.getElementById(bId).className = "pUsed";
    
    winCheck();
    
    xCount++;
    
    document.getElementById("turnText").innerHTML = player2name;
    document.getElementById("turnBox").style.backgroundColor = "blue";
    
}

function yTurn(bId) {
    
    document.getElementById(bId).innerHTML = "O";
    document.getElementById(bId).className = "cUsed";
    
    winCheck();
    
    yCount++;
    
    document.getElementById("turnText").innerHTML = player1name;
    document.getElementById("turnBox").style.backgroundColor = "red";
    
}

function clearBoard() {
    
    for(i = 1; i < 10; i++) {
       
        document.getElementById("box" + i).className = "yes";
        document.getElementById("box" + i).innerHTML = "";
        
    }
    document.getElementById("xBox").innerHTML = xScore;
    document.getElementById("yBox").innerHTML = yScore;
    turnSwitch = false;
    
    //Remove these if you want signs to alternate between games.
    //xCount = 0;
    //yCount = 0;
    
}

function fScan() {
	var funcArray = [];
    for(i=1;i<10;i++) {
        var bName = document.getElementById("box" + i).className;
        if(bName == 'yes') {
            funcArray.push("box" + i);
        }
    }
	return funcArray;
}

function winCheck() {
    var b1class = document.getElementById("box1").className;
    var b2class = document.getElementById("box2").className;
    var b3class = document.getElementById("box3").className;
    var b4class = document.getElementById("box4").className;
    var b5class = document.getElementById("box5").className;
    var b6class = document.getElementById("box6").className;
    var b7class = document.getElementById("box7").className;
    var b8class = document.getElementById("box8").className;
    var b9class = document.getElementById("box9").className;
	if(b1class == "pUsed" && b2class == "pUsed" && b3class == "pUsed") {
		alert("X won!");
		xScore++;
		turnSwitch = true;
	}
	else if(b1class == "pUsed" && b4class == "pUsed" && b7class == "pUsed") {
		alert("X won!");
		xScore++;
		turnSwitch = true;
	}
	else if(b1class == "pUsed" && b5class == "pUsed" && b9class == "pUsed") {
		alert("X won!");
		xScore++;
		turnSwitch = true;
	}
	else if(b2class == "pUsed" && b5class == "pUsed" && b8class == "pUsed") {
		alert("X won!");
		xScore++;
		turnSwitch = true;
	}
	else if(b4class == "pUsed" && b5class == "pUsed" && b6class == "pUsed") {
		alert("X won!");
		xScore++;
		turnSwitch = true;
	}
	else if(b3class == "pUsed" && b6class == "pUsed" && b9class == "pUsed") {
		alert("X won!");
		xScore++;
		turnSwitch = true;
	}
	else if(b3class == "pUsed" && b5class == "pUsed" && b7class == "pUsed") {
		alert("X won!");
		xScore++;
		turnSwitch = true;
	}
	else if(b7class == "pUsed" && b8class == "pUsed" && b9class == "pUsed") {
		alert("X won!");
		xScore++;
		turnSwitch = true;
	}
	else if(b1class == "cUsed" && b2class == "cUsed" && b3class == "cUsed") {
		alert("O won!");
		yScore++;
		turnSwitch = true;
	}
	else if(b1class == "cUsed" && b4class == "cUsed" && b7class == "cUsed") {
		alert("O won!");
		yScore++;
		turnSwitch = true;
	}
	else if(b1class == "cUsed" && b5class == "cUsed" && b9class == "cUsed") {
		alert("O won!");
		yScore++;
		turnSwitch = true;
	}
	else if(b2class == "cUsed" && b5class == "cUsed" && b8class == "cUsed") {
		alert("O won!");
		yScore++;
		turnSwitch = true;
	}
	else if(b4class == "cUsed" && b5class == "cUsed" && b6class == "cUsed") {
		alert("O won!");
		yScore++;
		turnSwitch = true;
	}
	else if(b3class == "cUsed" && b6class == "cUsed" && b9class == "cUsed") {
		alert("O won!");
		yScore++;
		turnSwitch = true;
	}
	else if(b3class == "cUsed" && b5class == "cUsed" && b7class == "cUsed") {
		alert("O won!");
		yScore++;
		turnSwitch = true;
	}
	else if(b7class == "cUsed" && b8class == "cUsed" && b9class == "cUsed") {
		alert("O won!");
		yScore++;
		turnSwitch = true;
	}
	else if(fScan().length == 0) {
		alert("Everyone loses!");
		turnSwitch = true;
	}
}