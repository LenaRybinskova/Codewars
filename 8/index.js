
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


  
