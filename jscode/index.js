var cards = document.getElementsByClassName('card');

for (var i=0; i<cards.length; i++) {
	if (i%2==0) {
		cards[i].classList.add('card1');
	} else {
		cards[i].classList.add('card2');
	}
}