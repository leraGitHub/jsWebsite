var k = 0;
var elem = document.getElementsByClassName('cell');

function check(a) {

    if (elem[a-1].dataset.is=='false') {


        if (k%2==0) {
            elem[a-1].innerHTML='X';
            elem[a-1].style.color='black';
            document.getElementsByClassName("Oturn")[0].style.color = "black";
            document.getElementsByClassName("Xturn")[0].style.color = "silver";
          

        } else {
           elem[a-1].innerHTML='O';
           elem[a-1].style.color='black';
           document.getElementsByClassName("Xturn")[0].style.color = "black";
           document.getElementsByClassName("Oturn")[0].style.color = "silver";
        }
       
        win();
        k++;

        elem[a-1].dataset.is='true';

    }
}

function win() {
  var cell = document.getElementsByClassName('cell');

  if (cell[0].innerHTML==cell[1].innerHTML && cell[1].innerHTML==cell[2].innerHTML) {
    cell[0].style.color='green';
    cell[1].style.color='green';
    cell[2].style.color='green';
    cell[0].style.background='lightgreen';
    cell[1].style.background='lightgreen';
    cell[2].style.background='lightgreen';
    closeAll();
  } else if (cell[3].innerHTML==cell[4].innerHTML && cell[4].innerHTML==cell[5].innerHTML) {
    cell[3].style.color='green';
    cell[4].style.color='green';
    cell[5].style.color='green';
    cell[3].style.background='lightgreen';
    cell[4].style.background='lightgreen';
    cell[5].style.background='lightgreen';
    closeAll();
  } else if (cell[6].innerHTML==cell[7].innerHTML && cell[7].innerHTML==cell[8].innerHTML) {
    cell[6].style.color='green';
    cell[7].style.color='green';
    cell[8].style.color='green';
    cell[6].style.background='lightgreen';
    cell[7].style.background='lightgreen';
    cell[8].style.background='lightgreen';
    closeAll();
  } else if (cell[0].innerHTML==cell[3].innerHTML && cell[3].innerHTML==cell[6].innerHTML) {
    cell[0].style.color='green';
    cell[3].style.color='green';
    cell[6].style.color='green';
    cell[0].style.background='lightgreen';
    cell[3].style.background='lightgreen';
    cell[6].style.background='lightgreen';
    closeAll();
  } else if (cell[1].innerHTML==cell[4].innerHTML && cell[4].innerHTML==cell[7].innerHTML) {
    cell[1].style.color='green';
    cell[4].style.color='green';
    cell[7].style.color='green';
    cell[1].style.background='lightgreen';
    cell[4].style.background='lightgreen';
    cell[7].style.background='lightgreen';
    closeAll();
  } else if (cell[2].innerHTML==cell[5].innerHTML && cell[8].innerHTML==cell[5].innerHTML) {
    cell[2].style.color='green';
    cell[5].style.color='green';
    cell[8].style.color='green';
    cell[2].style.background='lightgreen';
    cell[5].style.background='lightgreen';
    cell[8].style.background='lightgreen';
    closeAll();
  } else if (cell[0].innerHTML==cell[4].innerHTML && cell[4].innerHTML==cell[8].innerHTML) {
    cell[0].style.color='green';
    cell[4].style.color='green';
    cell[8].style.color='green';
    cell[0].style.background='lightgreen';
    cell[4].style.background='lightgreen';
    cell[8].style.background='lightgreen';
    closeAll();
  } else if (cell[6].innerHTML==cell[4].innerHTML && cell[4].innerHTML==cell[2].innerHTML) {
    cell[6].style.color='green';
    cell[4].style.color='green';
    cell[2].style.color='green';
    cell[6].style.background='lightgreen';
    cell[4].style.background='lightgreen';
    cell[2].style.background='lightgreen';
    closeAll();
  }

}


function closeAll() {
    for (var i = 0; i<elem.length; i++) {
        elem[i].dataset.is='true';
    }
}

function restart() {
    for (var j = 0; j<elem.length; j++) {
        elem[j].dataset.is = 'false';
        elem[j].innerHTML = j;
        elem[j].style.background = 'lightgray';
        elem[j].style.color = 'lightgray';
    }
}
