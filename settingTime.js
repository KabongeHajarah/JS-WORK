//setInterval function

//The setInterval global method take a callback function and a duration as a parameter. 
//The duration is in milliseconds and the callback will be always called in that interval of time.

function sayHello(){
    console.log('hello there');
}
setInterval(sayHello,1000)

//Setting a time using a setTimeout
function sayHello() {
    console.log('Hello')
  }
  setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.