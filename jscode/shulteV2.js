var timerId=setInterval(timer, 1000);
var time = document.getElementById('timer');

var k=1;

function timer() {
  time.innerHTML = addZero(Math.floor(k/60))+':'+addZero((k%60));
  k++;
}

function stopTimer() {
  clearInterval(timerId);
}

function addZero(num) {
  if (num<=9) {
    num='0'+num;
  }
  return num;
}


var array = [];
var m = 25;

for (var i = 0; i<m; i++) {
    array[i]=i+1;
}

function shuffle(arr) {
        var result = [];
        
        while (arr.length > 0) {
            var random = getRandomInt(0, arr.length - 1);
            var elem = arr.splice(random, 1)[0];
            result.push(elem);
        }
        
        return result;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

var newArray = shuffle(array);



for (i = 0; i<m; i++) {
    document.getElementsByClassName("cell")[i].innerHTML=newArray[i]; 
}


var j = 1;

function check(a) {
    if (newArray[a-1]==j) {
        j++; 
       document.getElementsByClassName("cell")[a-1].style.background = "lightgreen";
        if (j==26) {
        for (var k=0; k<26; k++) {
           document.getElementsByClassName("cell")[k].style.background = "lightgreen"; 
           stopTimer();
        }
       }
    } else {
        document.getElementsByClassName("cell")[a-1].style.background = "pink";
        
    };

}


function grey(elem) {
    if (j!=26) {
    elem.style.background='lightgray';
    }
}