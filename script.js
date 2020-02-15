// CODING CHALLENGE 1 

var massJohn = 70;   // KG
var massMark = 75;
var heightJohn = 1.85;   // METERS 
var heightMark = 1.77;

var bmiJohn = massJohn / (heightJohn * heightJohn);
var bmiMark = massMark / (heightMark * heightMark);

console.log(bmiJohn, bmiMark);

var hasMarkHigherBmiThanJohn = bmiMark > bmiJohn;

console.log('Has Mark higher BMi than John ? It\'s ' + hasMarkHigherBmiThanJohn);

