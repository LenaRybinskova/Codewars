// https://www.codewars.com/kata/5a023c426975981341000014/train/javascript

// Вам даны два внутренних угла (в градусах) треугольника.
// 
// Напишите функцию, возвращающую 3-е число.
// 
// Примечание: будут проверены только положительные целые числа.
// 
// https://en.wikipedia.org/wiki/Треугольник

function otherAngle(a, b) {
    return 180 - a - b;
}

console.log(otherAngle(60, 60));
