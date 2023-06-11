// There are two Web Storage objects:

// sessionStorage--Only available within browser tab
// localStorage--The HTML5 localStorage is the para of the web storage API which is used to store data on the browser with no expiration data. 
// localStorage is similar to sessionStorage, except that while data stored in localStorage has no expiration time, data stored in sessionStorage gets cleared when the page session ends — that is, when the page is closed.

// The keys and the values are always strings (note that, as with objects, integer keys will be automatically converted to strings).

// Web Storage objects:

// localStorage - to display the localStorage object
// localStorage.clear() - to remove everything in the local storage
// localStorage.setItem() - to store data in the localStorage. It takes a key and a value parameters.
localStorage.setItem('firstName', 'Asabeneh') // since the value is string we do not stringify it
console.log(localStorage)
   //storing number in local storage
   localStorage.setItem('age', 200)
   console.log(localStorage)
   //Storing an array in a localStorage. If we are storing an array, an object or object array, we should stringify the object first. See the example below.
   let skills = ['HTML', 'CSS', 'JS', 'React']
   //Skills array has to be stringified first to keep the format.
   const skillsJSON = JSON.stringify(skills, undefined, 4)
   localStorage.setItem('skills', skillsJSON)
   console.log(localStorage)
   //Storing an object in a localStorage. Before we storage objects to a localStorage, the object has to be stringified.
const user = {
    firstName: 'Asabeneh',
    age: 250,
    skills: ['HTML', 'CSS', 'JS', 'React']
  }
  
  const userText = JSON.stringify(user, undefined, 4)
  localStorage.setItem('user', userText)

// localStorage.getItem() - to display data stored in the localStorage. It takes a key as a parameter.
let firstName = localStorage.getItem('firstName')
let age = localStorage.getItem('age')
 skills = localStorage.getItem('skills')
console.log(firstName, age, skills)

// localStorage.removeItem() - to remove stored item form a localStorage. It takes key as a parameter.
// localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter.


//As you can see the skill is in a string format. Let us use JSON.parse() to parse it to normal array.

 skills = localStorage.getItem('skills')
let skillsObj = JSON.parse(skills, undefined, 4)
console.log(skillsObj)