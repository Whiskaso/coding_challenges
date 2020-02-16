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

// CODING CHALLENGE 2 

var averageScoreTeamJohn = (115 + 123 + 111) / 3; 
var averageScoreTeamMike = (115 + 123 + 111) / 3; 
var averageScoreTeamMarry = (115 + 123 + 111) / 3;

if (averageScoreTeamJohn > averageScoreTeamMike && averageScoreTeamJohn > averageScoreTeamMarry) {
    console.log('John\'s team wins with the average score: ' + averageScoreTeamJohn + ' points!');
} else if (averageScoreTeamMarry > averageScoreTeamMike && averageScoreTeamMarry > averageScoreTeamJohn) {
    console.log('Marry\'s team wins with the average score: ' + averageScoreTeamMarry + ' points!');
} else if (averageScoreTeamJohn > averageScoreTeamMike && averageScoreTeamJohn > averageScoreTeamMarry) {
    console.log('John\'s team wins with the average score: ' + averageScoreTeamJohn + ' points!'); 
} else {
    console.log('Teams have the same average: ' + averageScoreTeamJohn + ' points!');
}