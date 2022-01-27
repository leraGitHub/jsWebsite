var yearSpan = document.getElementById('year');
var daysDiv = document.getElementById('days');
var monthDays = document.querySelectorAll('.day');
var monthContainer = document.getElementById('monthContainer');


var monthsArr = [
	'Январь',
	'Февраль',
	'Март',
	'Апрель',
	'Май',
	'Июнь',
	'Июль',
	'Август',
	'Сентябрь',
	'Октябрь',
	'Ноябрь',
	'Декабрь'
];

var date = new Date();
var thisYear = date.getFullYear();
var thisMonth = date.getMonth();
var thisDay = date.getDate();
var activeMonth;
var dayId;
var activeMonthsArr = [];



function daysCounter (year, month) {
	var max = 31;
	var checking = new Date (year, month, max);
	while (checking.getMonth()!=month) {
		max--;
		checking = new Date (year, month, max);
	}

	return max;
}



function fillYear(year, month) {
	yearSpan.innerHTML = year+' '+monthsArr[month];
}




function fillDaysInMonth() {
	var daysInMonth = daysCounter(thisYear, thisMonth);
	startDay = getStartDay(thisYear, thisMonth);


	var monthDiv = document.createElement('div');
	var checkingAvailability;

	monthDiv.id = thisMonth + '-' + thisYear;


	for (var k = 0; k<activeMonthsArr.length; k++) {	
		if (activeMonthsArr[k].id==monthDiv.id) {
			monthDiv = activeMonthsArr[k];

			checkingAvailability = true;
			break;
		} else {
			checkingAvailability = false;
		}

	} 

	activeMonth = monthDiv;

	 if (!checkingAvailability) {
	 	activeMonthsArr.push(monthDiv);


		for (var i = 0; i<42; i++) {
			var monthDay = document.createElement('div');
			monthDay.classList.add('day');
			monthDay.id = (i+1) + '-' + thisMonth + '-' + thisYear;
			monthDiv.appendChild(monthDay);
			monthDay.classList.remove('today');

		}


		for (var j = 0; j<daysInMonth; j++) {
			var n = j+startDay;
			monthDiv.children[n].innerHTML = j+1;
			monthDiv.children[n].style.cursor = 'pointer';
			monthDiv.children[n].classList.add('full');
			monthDiv.children[n].addEventListener('click', showTask);


			if (j+1==date.getDate() && date.getMonth()==thisMonth && date.getFullYear()==thisYear) {
				monthDiv.children[n].classList.add('today');
				monthDiv.children[n].classList.remove('full');
			} 
		}

			monthContainer.appendChild(monthDiv);
	

	} else {
		monthDiv.style.display = 'block';
	}
}


function getStartDay(year, month) {
	var date = new Date(year, month, 1);
	var weekDay = date.getDay();
	if(weekDay==0) {
		weekDay = 6;
	} else {
		weekDay--;
	}
	return weekDay;
}

function previous() {
	activeMonth.style.display="none";
	if (thisMonth>0) {	
		thisMonth--;
	} else {
		thisMonth = 11;
		thisYear--;
	}



	fillYear(thisYear, thisMonth);
	fillDaysInMonth();

}

function next() {
	activeMonth.style.display="none";
	if (thisMonth<11) {	
		thisMonth++;
	} else {
		thisMonth = 0;
		thisYear++;
	}
	fillYear(thisYear, thisMonth);
	fillDaysInMonth();
}







var taskPanel = document.getElementsByClassName('tasks')[0];
var addTaskInp = document.getElementById('addTaskInp');
var mainContainer = document.getElementById('mainContainer');
var calendarElemShowTask;
var taskDivsArr = [1];
addTaskInp.addEventListener('keyup', mediator);



function showTask() {
	var taskDate = this.textContent;
	calendarElemShowTask = this;
	// goWhite();
	taskPanel.firstElementChild.innerHTML = addZero(taskDate)+'.'+addZero(thisMonth+1)+'.'+thisYear;
	taskPanel.style.display = 'block';
	checkDate();
	dayId = this.id;
}

function addZero(num) {
	if (num<=9) {
		num = '0'+num;
	}
	
	return num;

}



function checkDate() {
	for (var i = 0; i<mainContainer.children.length; i++) {
		if (mainContainer.children[i].id == taskPanel.firstElementChild.textContent) {
			mainContainer.children[i].style.display="block";
		} else {
			mainContainer.children[i].style.display="none";

		}
	}

}



function mediator(event) {
	if (event.keyCode == 13) {
		addTask();
	}

}

function addTask() {
	var task = addTaskInp.value;
	addTaskInp.value = '';
	var taskDate = taskPanel.firstElementChild.innerHTML;
	var checkTaskDivExist = false;
	
	for (var i = 0; i<taskDivsArr.length; i++) {
		if(taskDivsArr[i]==taskDate) {
			checkTaskDivExist = true;
			var newDayTask = document.getElementById(taskDivsArr[i]);
			break;
		} else {
			checkTaskDivExist = false;
		}
	}

	if (!checkTaskDivExist) {
		newDayTask = document.createElement('div');
		newDayTask.id = taskDate;
		mainContainer.appendChild(newDayTask);
		taskDivsArr.push(taskDate);
	}


	var newTask = document.createElement('div');
	newTask.classList.add('dayTasks');

	var delElem = document.createElement('div');
	delElem.classList.add('delTask');
	delElem.innerHTML = '&#215;';
	delElem.addEventListener('click', deleteTask);

	var inpElem = document.createElement('input');
	inpElem.type = 'checkbox';
	inpElem.addEventListener('change', taskDone);

	var spanElem = document.createElement('span');
	spanElem.innerHTML = task;
	spanElem.addEventListener('dblclick', resetTask);

	newTask.appendChild(delElem);
	newTask.appendChild(inpElem);
	newTask.appendChild(spanElem);

	newDayTask.appendChild(newTask);




	document.getElementById(dayId).classList.add('hasTasks');

	checkAllTasksDone(newTask);




}


function taskDone() {
	var taskElem = this.parentElement;
	if (this.checked) {	
		taskElem.style.color="gray";
	} else {
		taskElem.style.color="black";
	}

	checkAllTasksDone(taskElem);

}


function deleteTask () {
	var deletingElem = this.parentElement;
	var parentElem = deletingElem.parentElement;
	deletingElem.remove();
	checkAllTasksDone(parentElem.children[0]);

}

function checkAllTasksDone(elem) {
	if (elem!=undefined) {

		var allElems = elem.parentElement.children;
		var allInps = [1];
		var checkInpChecked = 1;

		for (var i = 0; i<allElems.length; i++) {
			allInps.push(allElems[i].children[1]);
		}

		for (var j = 0; j<allInps.length; j++) {
			if (allInps[j].checked) {
				checkInpChecked++;
			}
		}

		if (checkInpChecked==allInps.length) {
			calendarElemShowTask.classList.add('allTasksDone');
		} else {
			calendarElemShowTask.classList.remove('allTasksDone');
		}

	} else {
		calendarElemShowTask.classList.remove('allTasksDone');
		calendarElemShowTask.classList.remove('hasTasks');	
	}

}


function resetTask() {
	var resetingElem = this;
	resetingElem.removeEventListener('dblclick', resetTask);
	var task = this.innerHTML;
	var resetInp = document.createElement('input');
	var save = document.createElement('input');
	save.type="button";
	save.value="сохранить";

	resetInp.value = task;
	resetingElem.innerHTML='';
	resetingElem.appendChild(resetInp);
	resetingElem.appendChild(save);

	save.addEventListener('click', function() {
		resetingElem.innerHTML = resetInp.value;
		resetingElem.addEventListener('dblclick', resetTask);
	})
}





fillYear(thisYear, thisMonth);
fillDaysInMonth();
activeMonthsArr.push(document.getElementById(thisMonth+'-'+thisYear));
