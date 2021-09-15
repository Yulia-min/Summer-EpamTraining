const title = document.getElementById("title");

let move = "x";
let winner = 1;
let counter = 0;

let array = [
  [1,1,1],
  [1,1,1],
  [1,1,1]
]


function сlick(elem, row, colomn){

  array[row][colomn] = move;
  counter++;

  if(move == "x"){
    elem.innerHTML = "x";
    title.innerHTML = " Move o player";
    move = "o";
  } else {
    elem.innerHTML = "o";
    title.innerHTML = " Move x player";
    move = "x";
  }

  for(let i = 0; i < 3; i++){
    if(array[i][0] == array[i][1] && array[i][1] == array[i][2]){
      winner = array[i][0];
    }
    if(array[0][i] == array[1][i] && array[1][i] == array[2][i]){
      winner = array[0][i];
    }   
    if(array[0][0] == array[1][1] && array[1][1] == array[2][2]){
      winner = array[0][0];
    }
    if(array[0][2] == array[1][1] && array[1][1] == array[2][0]){
      winner = array[0][2];
    }
  }

  if(winner != 1 ){
    alert("Player " + winner + " win");
    location.reload();
  }

  if(winner == 1 && counter == 9){
    alert("Draw");
    location.reload();
  }
}





