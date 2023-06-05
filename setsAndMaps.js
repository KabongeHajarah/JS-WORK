
     // SETS
//Set is a collection of elements
// Set can only contains unique elements.

const companies=new Set()
console.log(companies);

//Creating set from array
const languages=[
'English','finnish','French','German'

]
const setOfLanguages=new Set (languages)
console.log(setOfLanguages);

for (const language of languages){
    console.log(language);
}


//Adding an element to a set

console.log(companies.size) // 0
companies.add('Google') // add element to the set
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')
console.log(companies.size) // 5 elements in the set
console.log(companies)

//We can also use loop to add elements to a set
const setOfcompanys=new Set()
for (const company of companies){
    setOfcompanys.add(company)
}
console.log(setOfcompanys);

//Deleting an element a set
//We can delete an element from a set using a delete method.

console.log(companies.delete('Google'))
console.log(companies.size) // 4 elements left in the set
 

//checking if an element exists in  set
//we use has method
console.log(companies.has('Apple')) // false
console.log(companies.has('Facebook')) // true

//clearing a set
companies.clear()
console.log(companies)

//example
const langSet = new Set(languages)
console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
console.log(langSet.size) // 4

const counts = []
const count = {}

for (const l of langSet) {
  const filteredLang = languages.filter((lng) => lng === l)
  console.log(filteredLang) // ["English", "English", "English"]
  counts.push({ lang: l, count: filteredLang.length })
}
console.log(counts)

//Union of sets
// To find a union to two sets can be achieved using spread operator.
// Lets find the union of set A and set B (A U B)

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)


//Intersection of sets
// To find an intersection of two sets can be achieved using filter. Lets find the intersection of set A and set B (A ∩ B)

let m = [1, 2, 3, 4, 5]
let n = [3, 4, 5, 6]

let M = new Set(m)
let N = new Set(n)

let o= m.filter((num) => N.has(num))
let O = new Set(o)

console.log(o)

//Difference of sets
// To find an the difference between two sets can be achieved using filter. Lets find the different of set A and set B (A \ B)



c = a.filter((num) => !B.has(num))
 C = new Set(c)

console.log(C)


            //Maps
const map= new Map()
console.log(map);

// Adding values to the Map
const countriesMap = new Map()
console.log(countriesMap.size) // 0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)
console.log(countriesMap.size)

//Getting a value from Map
console.log(countriesMap.get('Finland'))

//Checking key in Map
// Check if a key exists in a map using has method. It returns true or false.
console.log(countriesMap.has('Finland'))

for (const country of countriesMap) {
    console.log(country)
  }

  for (const [country, city] of countriesMap){
    console.log(country, city)
   }
