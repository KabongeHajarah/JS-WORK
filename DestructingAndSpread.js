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