
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

//   function highAndLow(numbers){
//     let arr=[]
//     for(let i=0;i<numbers.length;i++){
//         if(numbers[i]!=" " && numbers[i]!="-"){
//             arr.push(Number(numbers[i]))
//         }
//     }
//     console.log(arr)
//     return `${Math.max(...arr)} ${Math.min(...arr)}`
//   }
//   console.log(highAndLow("1 2 3 4 5"))


//   function highAndLow(numbers){
//     let arr=[]
//     numbers.split().map((n)=>arr.push(n))
//     return arr
// 
//   }
//   console.log(highAndLow("1 2 3 4 5"));

function positiveSum(arr) {
    let res=0;
    for(let i=0; i<arr.length; i++){
      arr[i]>0 ? res+=arr[i] : res
    }
    return res
  }

console.log(positiveSum([1,-4,7,12]))