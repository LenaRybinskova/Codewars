
function multiply(a, b){
    return a * b
  }

  var summation = function (num) {
    res=0
    for(let i=0;i<=num; i++){
        res=res+i
    }
    return res
  }


  function makeUpperCase(str) {
    return str.toUpperCase()
  }


  function maps(x){
return x.map((n)=>n*2)
}


const reverseSeq = n => {
    let res=[];
    for(let i=n; i>0; i--){
        res.push(i)
    }
    return res
  };


  var countSheep = function (num){
    if(num===0){
        return ""
    } else{
        let str=""
        for(let i=1; i<=num; i++){
            str+=`${i} sheep...`
        }
    return str;
    }
  }


// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers){
    let arr=numbers.split(" ")
    return `${Math.max(...arr)} ${Math.min(...arr)}`
          }




function positiveSum(arr) {
    let res=0;
    for(let i=0; i<arr.length; i++){
      arr[i]>0 ? res+=arr[i] : res
    }
    return res
  }




function makeNegative(num) {
    return num<=0? num : num*-1    
    }

function solution(str){
   return str.split("").reverse().join("")
 }


 function opposite(number) {
    return -number
   }


function removeChar(str){
return str.slice(1, str.length-1)
};


function findNeedle(haystack) {
    for(let i=0; i<haystack.length;i++){
        if(haystack[i]=== "needle"){
            return `found the needle at position ${i}`
        }
    }
  }

  function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
  }


  function check(a, x) {
    return a.includes(x)
  }
//   console.log(check("cинее море", "море"))


const eng = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
function disemvowel(str) {
    let newStr = str.split("")
let newnew = newStr.filter((el) => !eng.includes(el))
    newnew = newnew.join("")
    
    return newnew
  }
//   console.log(disemvowel("This website is for losers LOL!" ))
  

function findAverage(array) {
    return array.length===0 ? 0 : 
    (array.reduce((acc, el)=>acc+el))/array.length
  }
// console.log(findAverage([1,2,3]))

const stringToNumber = function(str){
    return Number(str);
  }

function simpleMultiplication(number) {
    return number%2===0 ? number *8: number* 9;
}
const eng2 = ["a", "e", "i", "o", "u"]
function getCount(str) {
    let newStr=str.split("")
    let newStr2=newStr.filter((el)=>eng2.includes(el))
    return newStr2.length
  }

  function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }
//   console.log(getCount("abracadabra"))

function squareDigits(num){
let res=[...num.toString()].map(n => n*n)
let res2=res.join("")
return Number(res2)
}
// console.log(squareDigits(3212))

// является ли оно квадратным числом :
      var isSquare = function(n){
        if(n<0){
            return false
        } else {
            return Number.isInteger(Math.sqrt(n)) ? true : false
        }
          }      
//   console.log(isSquare(25))

// https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

// var number = function(busStops){
//     let plus=0
//     let minus=0
//     for (let i = 0; i < busStops.length; i++) {
//         plus=plus+busStops[i][0]
//         minus=minus+busStops[i][1]
// }
//     return plus-minus
// }
// 
// //
const number = (busStops) => busStops.reduce((acc, [on, off]) => acc + on - off, 0);
// console.log(number([[10,0],[3,5],[5,8]]))



function countPositivesSumNegatives(input) {
    if(input===null || input.length===0){
        return []
    } else {
        let pos=0
        let neg=0
        for(let i=0; i<input.length; i++){
            if(input[i]>0){
                pos=pos+1
            }
            if(input[i]<0){
                neg=neg+input[i]
            }
        }
    return [pos, neg]
    }
    }
// console.log(countPositivesSumNegatives([]))

function stringToArray(string){
return string.split(" ")
}
// console.log(stringToArray("Robin Singh"))



// https://www.codewars.com/kata/559590633066759614000063/train/javascript
// Напишите функцию, которая возвращает минимальное и максимальное количество заданного списка/массива.
// function minMax(arr){
//    return arr.length===1 ? [arr[0],arr[0]]: [Math.min(...arr),Math.max(...arr)]
//   }

  function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
  }
// console.log(minMax([1,2,3,4,5]))



function greet(name){
    return `Hello, ${name} how are you doing today?`
  }
//  console.log(greet("Ryan")) 