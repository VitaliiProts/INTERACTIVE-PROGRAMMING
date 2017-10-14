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
	$("").offset({
		left: event.pageX,
		top: event.pageY
	});
});

/* УПРАЖНЕНИЯ */

/*
	#1. Следом за кликами
		Измените последний пример с mousemove так, чтобы заголовок
		следовал не за указателем мышки, а только за кликами: вы кли-
		каете в любом месте страницы, и заголовок перемещается туда.
		*/
		$("html").click(function (event) {
			$("#heading3").offset({
				left: event.pageX,
				top: event.pageY
			});
		});

/*
	#2. Создайте собственную анимацию
		Используйте setInterval для анимации заголовка h1, двигая
		его по квадрату, вдоль краев страницы. Пусть он переместится
		на 200 пикселей вправо, на 200 пикселей вниз, 200 пикселей
		влево, 200 пикселей вверх, а затем начнет с начала. Подсказка:
		нужно запоминать текущее направление (вправо, вниз, влево
		или вверх), чтобы знать, увеличивать или уменьшать для заго-
		ловка отступы слева (left) и сверху (top). Кроме того, при
		достижении угла квадрата нужно будет менять направление.
	#3. Остановка анимации по клику
		Доработайте упражнение #2: добавьте к двигающемуся эле-
		менту h1 обработчик клика, который останавливает анимацию.
		Подсказка: отменить запуск кода по интервалу можно функцией
		clearInterval.
*/

var leftOffset = 0;
var topOffset = 0;
var right = "right";

var animate = function () {
	$("#test").offset({ 
		left: leftOffset,                        
		top: topOffset
	});

	if(right == "right")    
		leftOffset++;
	else
		leftOffset--;

	if(leftOffset < 0 && topOffset > 0) {
		leftOffset = 0;
		topOffset--;
	} else if(topOffset == 0) {
		right = "right";
	}
	if (leftOffset > 200) {
		leftOffset = 200;

		topOffset++;
		if (topOffset > 200) {
			topOffset = 200;
			right = "left";
		} else if(topOffset < 0) {
			topOffset = 0;
		}
	}
};

animate();
window.intervalId = setInterval(animate, 20);

$("body").on("click", function () {
	$("#test").stop(true, false);
	clearInterval(window.intervalId)
});