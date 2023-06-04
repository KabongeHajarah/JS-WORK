// Higher order functions are functions which take other function as a parameter
//  or return a function as a value. 
// The function passed as a parameter is called callback.

//A callback ---is a function which can be passed as parameter to other function. 
const callback=(n)=>{
    return n**2
}
console.log(callback(10));


// function that takes other function as a callback
function cube(callback, n) {
    return callback(n) * n
  }

  console.log(cube(callback, 3))

  // Returning a function
  
  //Higher order functions return another function as avalue
  const higherOrder= n=>{
    const doSomething=m=>{
        const doWhatever=t=>{
            return 2* n + 3 *m +t
        }
        return doWhatever
    }
    return doSomething
  }
console.log(higherOrder(2)(3)(10));

//forEach uses call back
const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
  let sum = 0
  const callback = function(element) {
    sum += element
  }
  arr.forEach(callback)
  return sum

}
console.log(sumArray(numbers))
