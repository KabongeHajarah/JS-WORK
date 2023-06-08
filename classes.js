//Class Instantiation
// Instantiation class means creating an object from a class.
 class Person {

 }
 let person =new Person()
 console.log(person);
 
 //constructor
 class Persons {
    constructor(firstName, lastName){
        console.log(this);
        this.firstName=firstName
        this.lastName=lastName
    }
 }
 person = new Persons('Bellah', 'Rayan')
console.log(person);

// Default values with constructor
// The constructor function properties may have a default value like other regular functions.

class Person1 {
  constructor(
    firstName = 'Asabeneh',
    lastName = 'Yetayeh',
    age = 250,
    country = 'Finland',
    city = 'Helsinki'
  ) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
  }
}

const person1 = new Person1() // it will take the default values
const person2 = new Person1('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1)
console.log(person2)

//Class Methods


