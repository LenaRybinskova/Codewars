// Создайте функцию, которая принимает целое число в качестве аргумента и возвращает значение "Even"для четных или "Odd"нечетных чисел.
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

function evenOrOdd(number) {
    if(number%2===0){
      return "Even"
    } else {
      return "Odd"
    }
  }