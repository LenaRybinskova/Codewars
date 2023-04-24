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

console.log(maps([1, 2, 3]))