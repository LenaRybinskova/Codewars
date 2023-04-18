// Завершите функцию квадратной суммы, чтобы она возводила в квадрат каждое переданное ей число, а затем суммировала результаты.
// 
// Например, for [1, 2, 2]он должен возвращаться 9, потому что
// 1
// 2
// +
// 2
// 2
// +
// 2
// 2
// "="
// 9
// 1 
// 2
//  +2 
// 2
//  +2 
// 2
//  "="9.
// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript


const arr = [1, 2, 2];

function squareSum(numbers){
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
      result += numbers[i] * numbers[i];
  }
  return result; 
}

squareSum(arr)
