//Destructuring is a way to unpack arrays, 
// and objects and assigning to a distinct variable.

const numbers=[1,2,3 ]
let [ numOne , numTwo, numThree]=numbers
console.log(numOne,numTwo,numThree);

const names = ['Asabeneh', 'Brook', 'David', 'John']
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names

console.log(firstPerson, secondPerson,thirdPerson, fourthPerson)


const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants

console.log(e,pi,gravity, bodyTemp, boilingTemp)

const fullStack=[
['HTML','CSS','JS','REACT'],
['NODE','EXPRESS','MONGODB']

]
const [frontEnd, backEnd] =fullStack
console.log(frontEnd);
console.log(backEnd);

//If we like to skip on of the values in the array we use additional comma. The comma helps to omit the value at that specific index

let nums = [1, 2, 3]
let [numO,  , numT] = nums //2 is omitted

console.log(numO, numT)

const namesN = ['Asabeneh', 'Brook', 'David', 'John']
let [, secondPersons, , fourthPersons] = namesN // first and third person is omitted

console.log(secondPersons, fourthPersons)

//We can use default value in case the value of array for that index is undefined:

 let namez = [undefined, 'Brook', 'David']
let [
  firstPersonz = 'Asabeneh',
  secondPersonz,
  thirdPersonz,
  fourthPersonz = 'John'
] = namez

console.log(firstPersonz, secondPersonz, thirdPersonz, fourthPersonz)

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = num

console.log(num1, num2, num3)
console.log(rest)

//Destructuring during iteration
const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]
for (const [country,city] of countries) {
    console.log(country,city);
}

const fullStacks = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  
  for(const [first, second, third] of fullStacks) {
  console.log(first, second, third)
  }

  //Destructuring Object
  const rectangle = {
    width: 20,
    height: 10,
    area: 200
  }
  let { width, height, area, perimeter } = rectangle
  
  console.log(width, height, area, perimeter)
  

  //Renaming during structuring
  let{width:w,height:h, area:a,perimeter:p}=rectangle
  console.log(w,h,a,p=20);

  //Object parameter without destructuring
  // Without destructuring
const rect = {
    width: 20,
    height: 10
  }
  const calculatePerimeter = rectangle => {
    return 2 * (rectangle.width + rectangle.height)
  }
  
  console.log(calculatePerimeter(rect)) // 60
  
  const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)']
  }
// Let us create a function which give information about the person object without destructuring
  const getPersonInfo= obj=>{
const skills=obj.skills
const formattedskills=skills.slice(0,-1).join(',')

const languages = obj.languages
const formattedLanguages = languages.slice(0, -1).join(', ')

let personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
  obj.age
} years old. He is an ${obj.job}. He teaches ${formattedskills} and ${
  skills[skills.length - 1]
}. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

return personInfo


  }
  console.log(getPersonInfo(person))

  ////with destructuring
  
const calculatePerimeters = ({ width, height }) => {
    return 2 * (width + height)
  }
  
  console.log(calculatePerimeters(rect)) // 60

  // Let us create a function which give information about the person object with destructuring
const getPersonInfos = ({
    firstName,
    lastName,
    age,
    country,
    job,
    skills,
    languages
  }) => {
    const formattedSkills = skills.slice(0, -1).join(', ')
    const formattedLanguages = languages.slice(0, -1).join(', ')
  
    let personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
      skills[skills.length - 1]
    }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`
  
    return personInfo
  }
  console.log(getPersonInfos(person))
  /*
  Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)
  */

//   Destructuring object during iteration
const todoList = [
{
  task:'Prepare JS Test',
  time:'4/1/2020 8:30',
  completed:true
},
{
  task:'Give JS Test',
  time:'4/1/2020 10:00',
  completed:false
},
{
  task:'Assess Test Result',
  time:'4/1/2020 1:00',
  completed:false
}
]

for (const {task, time, completed} of todoList){
  console.log(task, time, completed)
}

     

        //SPREAD OPERATOR
 //We can copy an object using a spread operator
        const user = {
            name:'Asabeneh',
            title:'Programmer',
            country:'Finland',
            city:'Helsinki'
          }
          
          const copiedUser = {...user}
          console.log(copiedUser)

//Modifying or changing the object while copying

  const copiedUser2 = {...user, title:'instructor'}
  console.log(copiedUser2)


      //Spread operator with arrow function
// Whenever we like to write an arrow function which takes unlimited number of arguments we use a spread operator. 
// If we use a spread operator as a parameter, 
// the argument passed when we invoke a function will change to an array.
const sumAllNums=(...args)=>{
    console.log(args );
    let sum=0
    for (const num of args) {
        sum+=num
    }
    return sum
}

console.log( sumAllNums(1,2,3,4,5));


//Exercises
// Exercises: Level 1
const constants = [2.72, 3.14, 9.81, 37, 100]
const countries1 = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle1 = {
  width1: 20,
 height1: 10,
 area1: 200, 
perimeter1: 60
 }
 const users = [
{
  name:'Brook',
 scores:75,
 skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]
// Destructure and assign the elements of constants array 
// to e1, pis, gravity, humanBodyTemp, waterBoilingTemp.
let [e1,pis,gravitys,humanBodyTemp,waterBoilingTemp]=constants
console.log(e1,pis,gravitys,humanBodyTemp,waterBoilingTemp);
// Destructure and assign the elements of countries array to fin, est, sw, den, nor
const [fin, est, sw, den, nor] = countries1;
console.log(countries1);
// Destructure the rectangle object by its properties or keys.
let{width1,height1,area1,perimeter1}=rectangle1
console.log(width1,height1,area1,perimeter1);

// Exercises: Level 2

// Iterate through the users array and get all the keys of the object using destructuring
users.forEach((user) => {
    const keys = Object.keys(user);
    console.log(keys);
  });
  for (const user of users) {
    const keys = Object.entries(user);
    console.log(keys);
  }
  

// Find the persons who have less than two skills
const personsWithLessThanTwoSkills = users.filter((user) => user.skills.length < 2);
console.log(personsWithLessThanTwoSkills);


// Exercises: Level 3
// Destructure the countries object print name, capital, population and languages of all countries
// A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
//   const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
//   console.log(name, skills, jsScore, reactScore)
// David (4) ["HTM", "CSS", "JS", "React"] 90 95
// Write a function called convertArrayToObject which can convert the array to a structure object.
//     const students = [
//         ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
//         ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
//       ]

//     console.log(convertArrayToObject(students))
//     [
//       {
//         name: 'David',
//         skills: ['HTM','CSS','JS','React'],
//         scores: [98,85,90,95]
//       },
//       {
//         name: 'John',
//         skills: ['HTM','CSS','JS','React'],
//         scores: [85, 80,85,80]
//       }
//     ]
// Copy the student object to newStudent without mutating the original object. In the new object add the following ?
// Add Bootstrap with level 8 to the front end skill sets
// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets
//     const student = {
//       name: 'David',
//       age: 25,
//       skills: {
//         frontEnd: [
//           { skill: 'HTML', level: 10 },
//           { skill: 'CSS', level: 8 },
//           { skill: 'JS', level: 8 },
//           { skill: 'React', level: 9 }
//         ],
//         backEnd: [
//           { skill: 'Node',level: 7 },
//           { skill: 'GraphQL', level: 8 },
//         ],
//         dataBase:[
//           { skill: 'MongoDB', level: 7.5 },
//         ],
//         dataScience:['Python', 'R', 'D3.js']
//       }
//     }
// The copied object output should look like this:

//     {
//     name: 'David',
//     age: 25,
//     skills: {
//       frontEnd: [
//         {skill: 'HTML',level: 10},
//         {skill: 'CSS',level: 8},
//         {skill: 'JS',level: 8},
//         {skill: 'React',level: 9},
//         {skill: 'BootStrap',level: 8}
//       ],
//       backEnd: [
//         {skill: 'Node',level: 7},
//         {skill: 'GraphQL',level: 8},
//         {skill: 'Express',level: 9}
//       ],
//       dataBase: [
//         { skill: 'MongoDB',level: 7.5},
//         { skill: 'SQL',level: 8}
//       ],
//       dataScience: ['Python','R','D3.js','SQL']
//     }
//   }