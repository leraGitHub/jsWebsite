var simpbtn = document.getElementById('simpbtn');
var allSimps = document.getElementsByClassName('simp');
var allBarrs = document.getElementsByClassName('barr');
var minorCheckbox = document.getElementById('minor');
var diezCheckbox = document.getElementById('dz');
var bemolCheckbox = document.getElementById('bem');
var septCheckbox = document.getElementById('sept');
var ownAccords = document.getElementById('ownAccords')
var addAccords = document.getElementById('addAccords');
var accordElements = document.getElementById('accordElements');
var checkRepeatBtn = document.getElementById('checkRepeatBtn');

var squareCount = document.getElementById('squareCount');
var randomChain = document.getElementById('randomChain');
var randomChainTable = document.getElementById('randomChainTable');




addAccords.addEventListener('click', makeGeneralArr);

simpbtn.addEventListener('click', allSimpSelect);

randomChain.addEventListener('click', generateEvent);

function allSimpSelect() {
	for (var i=0; i<allSimps.length;i++) {
		allSimps[i].checked=true;
	}
}

var barrbtn = document.getElementById('barrbtn');

barrbtn.addEventListener('click', allBarrSelect);

function allBarrSelect() {
	for (var i=0; i<allBarrs.length;i++) {
		allBarrs[i].checked=true;
	}
}


//генерация массива простых аккордов

var arrSimp;

function generateSimpArr() {
	arrSimp = [];
	for (var i=0; i<allSimps.length;i++) {
		if (allSimps[i].checked==true) {
			arrSimp.push(allSimps[i].name);
		}
	}
	return arrSimp;
}

var arrBarr1;
var arrBarrDiez;
var arrBarrBemol;
var arrBarrMinor;
var arrBarrSept;
var own;
var generalArr;

function generateBarrArr() {
	arrBarr1 = [];
	for (var i=0; i<allBarrs.length; i++) {
		if(allBarrs[i].checked==true) {
			arrBarr1.push(allBarrs[i].name);
		}
	}



	if (diezCheckbox.checked==true) {
		generateBarrDiezArr();
	} else {
		arrBarrDiez=[];
	}

	if (bemolCheckbox.checked==true) {
		generateBarrBemolArr();
	} else {
		arrBarrBemol=[];
	}

	if (minorCheckbox.checked==true) {
		generateBarrMinorArr();
	} else {
		arrBarrMinor=[];
	}

	if (septCheckbox.checked==true) {
			generateBarrSeptArr();
		} else {
		ArrBarrSept=[];
	}



}



function generateBarrDiezArr() {
	arrBarrDiez=[];
	for (var i=0; i<arrBarr1.length; i++) {
		if (arrBarr1[i]=='|E' || arrBarr1[i]=='|B') {
			continue;
		}
		var diezElem = arrBarr1[i]+'#';
		arrBarrDiez.push(diezElem);
	}
}


function generateBarrBemolArr() {
	arrBarrBemol=[];
	for (var i=0; i<arrBarr1.length; i++) {
		if (arrBarr1[i]=='|C' || arrBarr1[i]=='|F') {
			continue;
		}
		var bemolElem = arrBarr1[i]+'b';
		arrBarrBemol.push(bemolElem);
	}

}


function generateBarrMinorArr() {
	arrBarrMinor = [];
	var minorElem;

	for(var i=0; i<arrBarr1.length;i++) {
		minorElem = arrBarr1[i] + 'm';
		arrBarrMinor.push(minorElem);
	}

	if (diezCheckbox.checked == true) {

		for(var i=0; i<arrBarrDiez.length; i++) {
			minorElem = arrBarrDiez[i] + 'm';
			arrBarrMinor.push(minorElem);
		}

	}

	if (bemolCheckbox.checked == true) {

			for(var i=0; i<arrBarrBemol.length; i++) {
				minorElem = arrBarrBemol[i] + 'm';
				arrBarrMinor.push(minorElem);
			}

		}




}



function generateBarrSeptArr() {
	arrBarrSept = [];
	var septElem;

	for(var i=0; i<arrBarr1.length;i++) {
		septElem = arrBarr1[i] + '7';
		arrBarrSept.push(septElem);
	}

	if (diezCheckbox.checked == true) {

		for(var i=0; i<arrBarrDiez.length; i++) {
			septElem = arrBarrDiez[i] + '7';
			arrBarrSept.push(septElem);
		}

	}

	if (bemolCheckbox.checked == true) {

		for(var i=0; i<arrBarrBemol.length; i++) {
			septElem = arrBarrBemol[i] + '7';
			arrBarrSept.push(septElem);
		}

		}


	if (minorCheckbox.checked == true) {
		for(var i=0; i<arrBarrMinor.length; i++) {
			septElem = arrBarrMinor[i] + '7';
			arrBarrSept.push(septElem);
		}
	}


}

function generateOwnAccordsArr() {
	own = [];
	if (ownAccords.value!='') {
		own = ownAccords.value.split(', ');
	}

	ownAccords.value='';

}

function makeGeneralArr() {
	generateSimpArr();
	generateBarrArr();
	generateOwnAccordsArr();
	generalArr = [];


	concatArr(arrSimp);
	concatArr(arrBarr1);
	concatArr(arrBarrDiez);
	concatArr(arrBarrBemol);
	concatArr(arrBarrMinor);
	concatArr(arrBarrSept);
	concatArr(own);


	console.log(generalArr);
	addAccordsInElement();

}

function concatArr(arr) {
	if(arr!=undefined) {
		generalArr = generalArr.concat(arr);
	}

}

function generateEvent() {
	if (checkRepeatBtn.checked==true) {
		generateRandomAccordList();
	} else {
		generateRandomAccordList2();
	}
}

function addAccordsInElement() {
	accordElements.innerHTML = '';
	for (var i=0; i<generalArr.length; i++) {
		var accordElem = document.createElement('div');
		accordElem.addEventListener('dblclick', removeAccord);
		accordElem.classList.add('accordElem');
		accordElem.innerHTML = generalArr[i];
		accordElements.appendChild(accordElem);
	}
}

function removeAccord() {
	// console.log(generalArr.indexOf(this.innerHTML));
	var indexOfRemoveElem = generalArr.indexOf(this.innerHTML);
	generalArr.splice(indexOfRemoveElem, 1);
	this.remove();
}

function generateRandomAccordList() {
	randomChainTable.innerHTML = '';
	squareCountNum = Number(squareCount.value);
	var rowCount = Math.ceil(squareCountNum/4);
	var randNumber;
	var tdElems = [];

	for (var i=0; i<rowCount; i++) {
		var trElem = document.createElement('tr');
			for (var j=0; j<4; j++) {
				var tdElem = document.createElement('td');
				tdElems.push(tdElem);
				




				trElem.appendChild(tdElem);
			}
			randomChainTable.appendChild(trElem);

	}

	for (var k=0; k<squareCountNum; k++) {
		randNumber = randomNumber(0, generalArr.length-1);
		tdElems[k].innerHTML = generalArr[randNumber];


	}


}

function generateRandomAccordList2() {
	shuffle(generalArr);

	randomChainTable.innerHTML = '';
	squareCountNum = Number(squareCount.value);
	var rowCount = Math.ceil(squareCountNum/4);
	var randNumber;
	var tdElems = [];

	for (var i=0; i<rowCount; i++) {
		var trElem = document.createElement('tr');
			for (var j=0; j<4; j++) {
				var tdElem = document.createElement('td');
				tdElems.push(tdElem);
				




				trElem.appendChild(tdElem);
			}
			randomChainTable.appendChild(trElem);

	}

	for (var k=0; k<squareCountNum; k++) {
		if (generalArr[k]!=undefined) {
			tdElems[k].innerHTML = generalArr[k];
		}


	}

	

}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}




function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}



var generateRandomFightBtn = document.getElementById('generateRandomFightBtn');
var randomFightCount = document.getElementById('randomFightCount');
var randomFightTable = document.getElementById('randomFightTableElem');
var fightWays = ['&uarr;', '&darr;', '&#10006;', '']


generateRandomFightBtn.addEventListener('click', generateRandomFight);

function generateRandomFight() {
	randomFightTable.innerHTML = '';
	var tactsCount = Number(randomFightCount.value);
	console.log(tactsCount);

	for (var i = 0; i<tactsCount; i++) {
		var fightTdElem = document.createElement('td');
		fightTdElem.innerHTML = fightWays[randomNumber(0, 3)];
		randomFightTable.appendChild(fightTdElem);
	}


}

var randOrder = document.getElementById('randOrder');
var generateRandOrderBtn = document.getElementById('generateRandOrderBtn');
var fredsStart = document.getElementById('fredsStart');
var fredsFinish = document.getElementById('fredsFinish');


generateRandOrderBtn.addEventListener('click', generateRandOrder);

function generateRandOrder() {
	var startNum = fredsStart.value;
	var finishNum = fredsFinish.value;
	var fredsArr = [];
	var fredPlayArr = [];

	for (var i=startNum; i<=finishNum; i++) {
		fredsArr.push(i);
	}

	fredPlayArr = shuffle(fredsArr).splice(0, 4);

	var stringFreds = fredPlayArr.join('-');
	randOrder.innerHTML = stringFreds;
	




}





