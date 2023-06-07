//Creating a pattern with RegExp Constructor

//Declaring regular expression without global flag and case insensitive flag.
let pattern ='love'
let regEx=new RegExp (pattern)

//Decalring regular expression with global flag and case insenstivi flag
let pattern1='love'
let flag='gi'
regEx=new RegExp(pattern,flag)

//writting both flag and pattern inside
 regEx = new RegExp('love','gi')

 //Creating a pattern without RegExp Constructor
 regEx= /love/gi


 //RegExpp Object Methods
  
 //test():Tests for a match in a string. Returns true or false 
 const strng='I love javascript'
 const pattern2=/love/
 let result= pattern2.test(strng)
 console.log(result);

 //Array containing all matches
 //match(): Returns an array containign all of the matches, including groups , or null if no match found

 let str='I love JavaScript'
 let  patterns=/love/
 result=str.match(patterns)
 console.log(result);

 
 patterns = /love/g
 result = str.match(patterns)
console.log(result)

//search(): Tests for a match in  a string
    //it returns the index of the match, or -1 if search fails

 str='i love javascript'
 pattern=/love/g
 result= str.search(pattern)
 console.log(result);

//Replacing a substring
//replace(): Executes a search for a match in a string, and replaces the matched substring with a replacement substring.

let txt='Python is the most beautiful language that a human has ever created.\ I recommend python for a first programming language'
matchReplaced=txt.replace(/Python|python/,'Javascript')
console.log(matchReplaced);

matchReplaced = txt.replace(/Python|python/g, 'JavaScript')
console.log(matchReplaced)


 txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

matches = txt.replace(/%/g, '')
console.log(matches) 


//square Braackets
pattern='[Aa]pple'
txt='Apple and banana are fruits. An old cliche says an  apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
matches= txt.match(pattern)
console.log(matches);

pattern=/[Aa]pple/g
matches=txt.match(pattern)
console.log(matches);

//Escape character (\) in RegExp
 pattern = /\d/g  // d is a special character which means digits
 txt = 'This regular expression example was made in January 12,  2020.'
matches = txt. match(pattern)
console.log(matches)  // ["1", "2", "2", "0", "2", "0"], this is not what we want

//one or more times
pattern = /\d+/g
matches = txt. match(pattern)
console.log(matches)

//period(.)
pattern=/[a]./g // this square bracket means a and . means any character except new line
txt='Apple and Banana are fruits'
matches=txt.match(pattern)
console.log(matches);


//zero or one times(*)
pattern=/[a].*/g
txt='Apple and banana are fruits'
matches=txt.match(pattern)
console.log(matches)

//zero or one times(?)
pattern=/[Ee]-?mail/g
txt = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
matches=txt.match(pattern)
console.log(matches);


// Quantifier in RegExp
// We can specify the length of the substring we look for in a text,
// using a curly bracket. 
//Let us see, how ot use RegExp quantifiers. 
//Imagine, we are interested in substring that their length are 4 characters

txt = 'This regular expression example was made in December 6,  2019.'
pattern = /\\b\w{4}\b/g  //  exactly four character words
matches = txt.match(pattern)
console.log(matches)  //['This', 'made', '2019']

 txt = 'This regular expression example was made in December 6,  2019.'
 pattern = /\b[a-zA-Z]{4}\b/g  //  exactly four character  words without numbers
 matches = txt.match(pattern)
console.log(matches)  //['This', 'made']


//Cart 
//starts with
 let txts = 'This regular expression example was made in December 6,  2019.'
 pattern = /^This/ // ^ means starts with
matches = txts.match(pattern)
console.log(matches)  // ['This']

// Exact match
// It should have ^ starting and $ which is an end.
pattern = /^[A-Z][a-z]{3,12}$/;
let name = 'Asabeneh';
 result = pattern.test(name)

console.log(result) // true




