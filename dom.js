//getElementsByTagName
let allTitles= document.getElementsByTagName('h1');
console.log(allTitles);
console.log(allTitles.length);

for (let i=0; i<allTitles.length; i++){
    console.log(allTitles[i]);
}

//getElementsByClassName
allTitles=document.getElementsByClassName('title')
console.log(allTitles);

//getElementsById() targets a single HTML element. We pass the id without # as an argument.
let firstTitle = document.getElementById('first-title')
console.log(firstTitle) // <h1>First Title</h1>

//querySelector: can be used to select HTML element by its tag name, id or class. If the tag name is used it selects only the first element.
 firstTitle = document.querySelector('h1') // select the first available h1 element
 firstTitle = document.querySelector('#first-title') // select id with first-title
 firstTitle = document.querySelector('.title') // select the first available element with class title

//  querySelectorAll: can be used to select html elements by its tag name or class. It returns a nodeList which is an array like object which supports array methods. We can use for loop or forEach to loop through each nodeList elements.
 allTitles = document.querySelectorAll('h1') //selects all the available h1 elements in the page

console.log(allTitles.length) // 4
for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i])
}

allTitles.forEach(title => console.log(title))
allTitles = document.querySelectorAll('.title') // the same goes for selecting using class

// The setAttribute() method set any html attribute. 
//It takes two parameters the type of the attribute and the name of the attribute.
// Let's add class and id attribute for the fourth title.

const titles = document.querySelectorAll('h1')
titles[3].setAttribute('class', 'title')
titles[3].setAttribute('id', 'fourth-title')

////another way to setting an attribute
titles[3].className = 'title'
titles[3].id = 'fourth-title'

//Adding class using classList
// The class list method is a good method to append additional class. 
// It does not override the original class if a class exists rather it adds additional class for the element.

//another way to setting an attribute: append the class, doesn't over ride
titles[3].classList.add('title', 'header-title')

//Removing a class
////another way to setting an attribute: append the class, doesn't over ride
titles[3].classList.remove('title', 'header-title')

//Adding Text content using textContent
//The textContent property is used to add text to an HTML element.
const titles = document.querySelectorAll('h1')
titles[3].textContent = 'Fourth Title'

//Adding Text Content using innerHTML
// Most people get confused between textContent and innerHTML. textContent is meant to add text to an HTML element, however innerHTML can add a text or HTML element or elements as a child.