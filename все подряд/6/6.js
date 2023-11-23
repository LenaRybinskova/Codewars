// Напишите функцию, которая удаляет пробелы из строки, а затем возвращает результирующую строку.
//
//     Примеры:
//
// Input -> Output
// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"

// https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript

function noSpace(x) {
    let i = 0;
    let res = ""
    while (i < x.length) {
        if (x[i] != " ") {
            res = res.concat(x[i])
        }
        i++;
    }
    return res

}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"))
