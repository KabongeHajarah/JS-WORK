//Callback
const doSomething = callback => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      callback('It did not go well', skills)
    }, 2000)
  }
  
  const callback = (err, result) => {
    if (err) {
      return console.log(err)
    }
    return console.log(result)
  }
  
  doSomething(callback)

  //Promise Constructor
  const doPromise =new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        const skills=['html','css','js']
        if(skills.length>0){
            resolve (skills)
        } else{
            reject('Something went wrong')
        }
    },2000)
  })
  doPromise
  .then(result=>{
    console.log(result);
  })
  .catch(error=>console.log(error))

  //Async and Await
  //This is an elegant way to handle promises
  const square= async function(n){
   //The word async in front of a function means that function will return a promise.
    return n*n
  }
 console.log(square(10)); 

 //How do we access the value from the promise? 
 //To access the value from the promise, we will use the keyword await.
 const squares = async function (n) {
    return n * n
  }
  const value  = await squares(2)
  console.log(value)