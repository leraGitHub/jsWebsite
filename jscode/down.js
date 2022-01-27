var yes = document.getElementsByClassName('Linput')[0];
var no = document.getElementsByClassName('Rinput')[0];

console.log(no);

yes.addEventListener('click', funcYes);
no.addEventListener('click', funcNo);



function randomNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function funcYes() {
	document.getElementById('question').innerHTML='Я знал))';
	yes.style.display="none";
	no.style.display="none";
	document.getElementById('menu').href="index.html";
}

function funcNo() {
	var a = randomNum(100, 800);
	var b = randomNum(100, 400);
	no.style.left=a+'px';
	no.style.top=b+'px';
}

