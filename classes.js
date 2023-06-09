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
class Person3 {
    constructor (firstName,lastName,age,country,city){
this.firstName=firstName
this.lastName=lastName
this.age=age
this.country=country
this.city=city
    }


getFullName() {
    const fullName=this.firstName + '' +this.lastName
    return fullName
}
}
const person3 = new Person3('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person4 = new Person3('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person3.getFullName())
console.log(person4.getFullName())
//Properties with values
class People{
    constructor(firstName,lastName,age,country,city){
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
        this.country=country
        this.city=city
        this.score=0
        this.skills=[]   
    }
    getInfo(){
        const info=     `${this.firstName}  ${this.lastName} is ${this.age} from ${this.country} ${this.city} and scored ${this.score} with ${this.skills}`
        return info
    
    
    }
}
const people1=new People('Bella','Ellah',21,'Uganda','Entebbe')
console.log(people1);
console.log(people1.getInfo());

//A method could be regular method or a getter or a setter. Let us see, getter and setter.

//Getter
//The get method allow us to access value from the object.

// setter
// The setter method allow us to modify the value of certain properties.
 class People2{
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
      }
      getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
      }
    get getScore() {
        return this.score
      }
    get getSkills() {
        return this.skills
      }
    set setScore(score) {
        this.score += score
      }
    set setSkill(skill) {
        this.skills.push(skill)
      }
}
const people=new People2('Bella','Ellah',21,'Uganda','Entebbe')
console.log(people.getSkills);
console.log(people.getScore);
people.setScore = 1
people.setSkill = 'HTML'
people.setSkill = 'CSS'
people.setSkill = 'JavaScript'

console.log(people.getSkills);
console.log(people.getScore);
//regular expression
class Regular{
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
      }
      getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
      }
      get getScore() {
        return this.score
      }
      get getSkills() {
        return this.skills
      }
      set setScore(score) {
        this.score += score
      }
      set setSkill(skill) {
        this.skills.push(skill)
      }

getPersonInfo() {
    
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`
    let formattedSkills = skills ? `He knows ${skills}` : ''

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
    return info
  }
}
const human = new Regular('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
console.log(human.getPersonInfo());

//STATIC method
//The static keyword defines a static method for a class.


