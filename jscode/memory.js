var maxCount = 20;

var arrColors = [
	'lightgreen', 'lightgreen', 'lightgreen', 'lightgreen',
	'pink','pink','pink','pink',
	'lightblue','lightblue','lightblue','lightblue',
	'lightyellow', 'lightyellow', 'lightyellow', 'lightyellow',
	'coral', 'coral', 'coral', 'coral',
	'slateblue', 'slateblue', 'slateblue', 'slateblue',
	'goldenrod', 'goldenrod', 'goldenrod', 'goldenrod',
	'darkslategrey', 'darkslategrey', 'darkslategrey', 'darkslategrey',
	'maroon', 'maroon', 'maroon', 'maroon', 
];


var arrElems = document.getElementsByClassName('cell');
var winElems = document.getElementsByClassName('mini');
var winNum = 0;

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



arrColors=shuffle(arrColors);


var arrOpenElems = [];

function check(a) {
	
	if (arrElems[a].dataset.available=='true') {
		arrElems[a].style.background = arrColors[a];
		arrOpenElems.push(a);
		
		if (arrOpenElems.length == 2) {
			if (arrColors[arrOpenElems[0]] == arrColors[arrOpenElems[1]]) {
				console.log('true');
			} else {
				setTimeout(closeAll, 1000);
				arrOpenElems=[];
				console.log('close');
			}

		} else if (arrOpenElems.length == 4) {
			if (arrColors[arrOpenElems[0]] == arrColors[arrOpenElems[1]] && 
				arrColors[arrOpenElems[1]] == arrColors[arrOpenElems[2]] && 
				arrColors[arrOpenElems[2]] == arrColors[arrOpenElems[3]]) {
				console.log('truex4');
				win(arrOpenElems[0], arrOpenElems[1], arrOpenElems[2], arrOpenElems[3], arrColors[arrOpenElems[0]]);
			} else {
				setTimeout(closeAll, 1000);
				console.log('close');

			}
		}
	}

}


function closeAll() {
	for (var i = 0; i<arrElems.length; i++) {
		if (arrElems[i].dataset.available=='true'){
			arrElems[i].style.background='lightgray';
		}
	}
	arrOpenElems=[];
}

function win(win1, win2, win3, win4, winColor) {
	winElems[winNum].style.background = winColor;
	arrElems[win1].style.background = 'gray';
	arrElems[win2].style.background = 'gray';
	arrElems[win3].style.background = 'gray';
	arrElems[win4].style.background = 'gray';
	arrElems[win1].dataset.available = 'false';
	arrElems[win2].dataset.available = 'false';
	arrElems[win3].dataset.available = 'false';
	arrElems[win4].dataset.available = 'false';
	winNum+=1;

	closeAll();	

}
