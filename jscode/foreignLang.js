var card = document.getElementsByClassName('card'); //array of "card"-forms, where words are written
var cards = document.getElementById('cards'); //an element includes all cards
var fillCards = document.getElementById('fillCards'); //an element to fill words
var outputWord = document.getElementById('outputWord'); //an element with random word from list
var inputWord = document.getElementById('inputWord'); //an element with string that person writes
var learnWords = document.getElementById('learnWords'); //an element to learn words
var saving = document.getElementById('saveCards'); //a button to save changes
var showing = document.getElementById('showCards'); //a button to show cards and change them
var settings = document.getElementById('settings'); //a button of settings
var sidebar = document.getElementById('sidebar'); //sidebar element
var wordsList = document.getElementById('wordsList');
var rightAnswer = document.getElementById('rightAnswer'); //an element where contains right answer

var wordLang1=[]; //array of words in first language
var wordLang2=[]; //array of words in second language
var randWord = ''; //random word from list
var answer = ''; //a word that person writes

//settings
var setVisible = false; //settings showing
var sidebarOn = false; //is sidebar visible
var waitingAnswer = false; //waiting right answer
var reversing = false; 
var showRightAnswer = false; //showing right answer




function addCard() {
	newCard = card[0].cloneNode(true);
	newCard.children[0].value='';
	newCard.children[1].value='';
	cards.appendChild(newCard);

}

function delCard(elem) {
	var delElem = elem.parentElement;
	delElem.remove();
}

function saveCards() {
		card = document.getElementsByClassName('card');
		var lang1Arr = document.getElementsByClassName('lang1');
		var lang2Arr = document.getElementsByClassName('lang2');
		wordLang1 = [];
		wordLang2 = [];

		for (let j = 0; j<card.length; j++) {
			wordLang1[j] = lang1Arr[j].value;
			wordLang2[j] = lang2Arr[j].value;
		} 
		
		fillCards.style.display="none";
		saving.style.display='none';
		showing.style.display='block';
		fillInSidebarList();
		learn();
	
	
}

function fillInSidebarList() {
	wordsList.innerHTML = '';
	for (let j = 0; j<wordLang1.length; j++) {
		var wordInList = document.createElement('div');
		wordInList.innerHTML = wordLang1[j]+' - '+wordLang2[j];
		wordsList.appendChild(wordInList);
	}
}

function showCards() {
	fillCards.style.display="block";
	learnWords.style.display="none";
	saving.style.display='block';
	showing.style.display='none';

}


function checkEnter(elem) {
	if (elem.which==13) {
		check();
	}
}

function learn() {
	learnWords.style.display="block";
	inputWord.style.borderColor='black';
	inputWord.style.color='black';
	inputWord.value = '';
	rightAnswer.innerHTML = '';

	var randNum = getRandomInt(0, wordLang1.length-1);
	randWord = wordLang1[randNum];
	outputWord.innerHTML = randWord;
	answer = wordLang2[randNum];
}

function check() {
	if (answer==inputWord.value) {
		inputWord.style.borderColor='lightgreen';
		inputWord.style.color='green';
		setTimeout(learn, 800);
	} else {
		if (waitingAnswer==false) {
			inputWord.style.borderColor='pink';
			inputWord.style.color='red';
			setTimeout(learn, 800);
		} else {
			inputWord.style.borderColor='pink';
			inputWord.style.color='red';
			setTimeout(function() {
				inputWord.style.borderColor='black';
				inputWord.style.color='black';
			}, 800);
		}
		if(showRightAnswer==true) {
			rightAnswer.innerHTML = ' - '+answer;
		}
	}
}

function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

function set() {
	if (setVisible==false) {
		settings.style.display = 'block';
		setVisible=true;
	} else {
		settings.style.display = 'none';	
		setVisible=false;	
	}
}

function showListFunc() {
	if (sidebarOn==false) {
		sidebar.style.display = 'block';
		sidebarOn=true;
	} else {
		sidebar.style.display = 'none';
		sidebarOn=false;
	}
}

function reverseWords() {
	var auxilArr = wordLang1;
		wordLang1 = wordLang2;
		wordLang2 = auxilArr;
	if (reversing == false) {
		reversing = true;
	} else {
		reversing = false;		
	}
	fillInSidebarList();
	learn();
}

function waitRightAnswer() {
	if (waitingAnswer==false) {
		waitingAnswer=true;
	} else {
		waitingAnswer=false;
	}
}

function showingAnswer() {
	if (showRightAnswer==false) {
		showRightAnswer=true;
	} else {
		showRightAnswer=false;
	}
}