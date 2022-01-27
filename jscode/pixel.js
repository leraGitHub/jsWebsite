var colorsArr = [
	['#000000', '#808080', '#c0c0c0', '#ffffff', '#ff00ff', '#800080', '#ff0000', '#800000', '#ffff00', '#808000', '#00ff00', '#008000', '#00ffff', '#008080', '#0000ff', '#000080'],
	['#f5f5f5', '#dcdcdc', '#d3d3d3', '#c0c0c0', '#a9a9a9', '#808080', '#696969', '#778899', '#708090', '#2f4f4f', '#000000'],
	['#f08080', '#fa8072', '#e9967a', '#ffa07a', '#dc143c', '#ff0000', '#cd5c5c', '#b22222', '#a52a2a', '#8b0000', '#800000'],
	['#fff5ee', '#f5f5dc', '#fdf5e6', '#fffaf0', '#faebd7', '#faf0e6', '#ffebcd', '#ffe4c4', '#ffdead', '#f5deb3', '#deb887', '#d2b48c', '#f4a460', '#daa520', '#b8860b', '#cd853f', '#d2691e', '#8b4513', '#a0522d', '#ffa07a', '#ff7f50', '#ff6347', '#ff4500', '#ff8c00', '#ffa500'],
	['#fff8dc', '#fffff0', '#ffffe0', '#fffacd', '#fafad2', '#ffefd5', '#ffe4b5', '#ffdab9', '#eee8aa', '#f0e68c', '#bdb76b', '#ffff00', '#ffd700'],
	['#f0fff0', '#f5fffa', '#adff2f', '#7fff00', '#7cfc00', '#00ff00', '#32cd32', '#98fb98', '#90ee90', '#00fa9a', '#00ff7f', '#3cb371', '#2e8b57', '#228b22', '#008000', '#006400', '#9acd32', '#6b8e23', '#808000', '#556b2f', '#66cdaa', '#8fbc8f', '#20b2aa', '#008b8b', '#008080'],
	['#f0ffff', '#f0f8ff', '#e0ffff', '#00ffff', '#7fffd4', '#40e0d0', '#48d1cc', '#00ced1', '#afeeee', '#b0e0e6', '#add8e6', '#b0c4de', '#87ceeb', '#87cefa', '#00bfff', '#1e90ff', '#6495ed', '#7b68ee', '#5f9ea0', '#4682b4', '#4169e1', '#0000ff', '#0000cd', '#00008b', '#000080', '#191970', '#6a5acd', '#483d8b'],
	['#f8f8ff', '#e6e6fa', '#d8bfd8', '#dda0dd', '#ee82ee', '#da70d6', '#ff00ff', '#c71585', '#ba55d3', '#9370db', '#8a2be2', '#9400d3', '#9932cc', '#8b008b', '#800080', '#4b0082'],
	['#fffafa', '#fff0f5', '#ffe4e1', '#ffc0cb', '#ffb6c1', '#ff69b4', '#ff1493', '#db7093', '#bc8f8f']

];

var activeColor;

var colorsElem = document.getElementsByClassName('colors')[0];

function setActiveColor(event) {
	var activeElem = document.getElementById('border');
	activeElem.id = '';
	event.target.id = "border";
	// activeColor = event.target.sytle.background;
	activeColor = event.target.style.background;
}

for (var j = 0; j<colorsArr.length; j++) {
	var colorsContainer = document.createElement('div');
	colorsContainer.classList.add('colorsContainer');
	for (var i=0; i<colorsArr[j].length;i++) {
		var colorCell = document.createElement('div');
		colorCell.classList.add('colorCell');
		colorCell.style.background=colorsArr[j][i];
		colorsContainer.appendChild(colorCell);
		colorCell.addEventListener('click', setActiveColor);
	}
	colorsElem.appendChild(colorsContainer);
}

var canElem = document.getElementById('createCanvas');
var canvas = document.getElementById('canvas');
var canBtn = document.getElementsByClassName('canvasElem')[2].addEventListener('click', createCanvas);

function toColor() {
	this.style.background=activeColor;
	this.style.outline = "none";
}

function createCanvas () {
	var canWeight = Number(document.getElementsByClassName('canvasElem')[0].value);
	var canHeight = Number(document.getElementsByClassName('canvasElem')[1].value);
	canElem.style.display = "none";

	for (var j=0; j<canHeight;j++) {
		var canvasRow = document.createElement('tr');
			for (var i=0; i<canWeight; i++) {
				var canvasCell = document.createElement('td');
				canvasCell.addEventListener('click', toColor);
				canvasRow.appendChild(canvasCell);
			}
			canvas.appendChild(canvasRow)
	}



}



