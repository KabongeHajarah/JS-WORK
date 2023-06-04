//forEach--we only use it for arrays
let sum=0;
const numbers=[1,2,3,45,5];
numbers.forEach(num=>console.log(num *2))
console.log(sum);

numbers.forEach(num => sum += num)
console.log(sum)

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
countries.forEach((element) => console.log(element.toUpperCase()))

//map---- Iterate an array elements and modify the array elements. It takes a callback function with elements, index , array parameter and return a new array.
const number = [1, 2, 3, 4, 5]
const numbersSquare = number.map((num) => num * num)

console.log(numbersSquare)

const countriesFirstThreeLetters = countries.map((country) =>
  country.toUpperCase().slice(0, 3)
)
console.log(countriesFirstThreeLetters);


//filter
//Filter: Filter out items which full fill filtering conditions and return a new array.
const countriescontainingLand= countries.filter((country)=>country.includes('land'))
console.log(countriescontainingLand);

const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
console.log(countriesEndsByia)


const scores = [
    { name: 'Asabeneh', score: 95 },
     { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
  ]
  
  const scoresGreaterEighty = scores.filter((score) => score.score > 80)
  console.log(scoresGreaterEighty)

  //reduce
//   reduce: Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value.
const nums = [1, 2, 3, 4, 5]
const total = nums.reduce((acc, cur) => acc + cur, 0)

console.log({total})

//every
// every: Check if all the elements are similar in one aspect. It returns boolean
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names.every((name) => typeof name === 'string') // Are all strings?

console.log(areAllStr)

// find
// find: Return the first element which satisfies the condition

const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age)


//findIndex
// findIndex: Return the position of the first element which satisfies the condition

const namez = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const agez= [24, 22, 25, 32, 35, 18]

const result = namez.findIndex((name) => name.length > 7)
console.log(result) // 0

const ageN = agez.findIndex((age) => age < 20)
console.log(ageN) // 5


//some
// some: Check if some of the elements are similar in one aspect. It returns boolean
