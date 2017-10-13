var timeUp = function () {
	alert("Время вышло!");
};

// setTimeout(timeUp, 3000);

/* Отмена действия таймера */
var doHomeworkAlarm = function () {
	alert("Эй! Пора делать домашку!");
};

var timeoutId = setTimeout(doHomeworkAlarm, 60000);

clearTimeout(timeoutId); // чтобы отменить действие таймера

/* Многократный запуск кода и setInterval */
var counter = 1;

var printMessage  = function () {
	console.log("Ты смотришь в консоль уже " + counter + " сек");
	counter++;
}

var intervalId = setInterval(printMessage, 1000);
clearInterval(intervalId);

/* Анимация элементов с помощью setInterval */
var leftOffset = 0;

var moveHeading = function () {
	$("#heading").offset({ left: leftOffset });

	leftOffset++;

	if (leftOffset > 200) {
		leftOffset = 0;
	}
};

// setInterval(moveHeading, 20);

/* Реакция на действия пользователя */

var clickHandler = function (event) {
 console.log("Клик! " + event.pageX + " " + event.pageY);
};

$("h1").click(clickHandler);

// Событие mousemove
$("html").mousemove(function (event) {
	$("#heading2").offset({
		left: event.pageX,
		top: event.pageY
	});
});