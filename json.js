// JavaScript Object Notation

//JSON format is text or string only.
//JSON is mostly used when data is sent from a server to a client.
//The difference is the key of a JSON object should be with double quotes or it should be a string. 
{
    "users"[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }

    //Converting JSON to JavaScript Object

    // In JavaScript the keyword JSON has parse() and stringify() methods
//When we want to change the object to JSON we use JSON.stringify().
const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`
    
    const usersObj = JSON.parse(usersText, undefined, 4)
    console.log(usersObj)
    
    //Using a reviver function with JSON.parse()
    //To use the reviver function as a formatter, we put the keys we want to format first name and last name value. Let us say, we are interested to format the firstName and lastName of the JSON data .
const usersObject=JSON.parse(usersText,(key,value)=>{
    let newValue=
    typeof value =='string' && key!='email'? value.toUpperCase():value
    return newValue
})
console.log(usersObject);

//Converting Object to json
//When we want to change the object to JSON we use JSON.stringify()
const userJson= JSON.stringify(usersText,undefined,4)
console.log(userJson);

//Using a Filter Array with JSON.stringify
// Now, lets use the replacer as a filter. The user object has long list of keys but we are interested only in few of them. We put the keys we want to keep in array as show in the example and use it the place of the replacer.
const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    country: 'Finland',
    city: 'Helsinki',
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
    age: 250,
    isLoggedIn: false,
    points: 30
  }
  
  const txt = JSON.stringify(user,['firstName', 'lastName', 'country', 'city', 'age'],4)
  console.log(txt)
