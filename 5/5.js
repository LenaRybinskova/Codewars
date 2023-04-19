// Напишите функцию, которая принимает целое число n и строку s  качестве параметров и возвращает строку, sповторяющуюся ровно столько nраз.
//
// Примеры (ввод -> вывод)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/javascript

function repeatStr(n, s) {
    let i = 0;
    let res = ""
    while (i <= n) {
        res = s.concat(s)
    }
    return res;
}

repeatStr(5, "Hello")