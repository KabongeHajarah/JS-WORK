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
class Persons1 {
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
  static favoriteSkill() {
    const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
    const index = Math.floor(Math.random() * skills.length)
    return skills[index]
  }
  static showDateTime(){
let now=new Date()
let year =now.getFullYear()
let month = now.getMonth() + 1
let date = now.getDate()
let hours = now.getHours()
let minutes = now.getMinutes()

if (minutes<10){
  minutes='0'+minutes
}
let dateMonthYear= date +'.'+month+'.'+ year
let time = hours + ':' + minutes
let fullTime = dateMonthYear + ' ' + time
return fullTime
}


  }

  console.log(Persons1.favoriteSkill())
  console.log(Persons1.showDateTime())

  //IKnheritance
 //syntax
 // syntax
class ChildClassName extends Persons1{
saySomething (){
  console.log('Hi am a child of the person class');
  
}

 }
 const s1 = new ChildClassName('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki')

console.log(s1.saySomething())
console.log(s1.getFullName())
console.log(s1.getPersonInfo())

class Student extends Persons1{
constructor (firstName,lastName,age,country,city,gender){
  super(firstName, lastName, age, country, city)
  this.gender = gender
}
saySomething() {
  console.log('I am a child of the person class')
}
getPersonInfo() {
  let fullName = this.getFullName()
  let skills =
    this.skills.length > 0 &&
    this.skills.slice(0, this.skills.length - 1).join(', ') +
      ` and ${this.skills[this.skills.length - 1]}`

  let formattedSkills = skills ? `He knows ${skills}` : ''
  let pronoun = this.gender == 'Male' ? 'He' : 'She'

  let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
  return info
}



}
const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
s1.setScore = 1
s1.setSkill = 'HTML'
s1.setSkill = 'CSS'
s1.setSkill = 'JavaScript'

s2.setScore = 1
s2.setSkill = 'Planning'
s2.setSkill = 'Managing'
s2.setSkill = 'Organizing'

console.log(s1)

console.log(s1.saySomething())
console.log(s1.getFullName())
console.log(s1.getPersonInfo())

console.log(s2.saySomething())
console.log(s2.getFullName())
console.log(s2.getPersonInfo())
console.log(s2.gender);
