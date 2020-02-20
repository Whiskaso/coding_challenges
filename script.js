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

// CODING CHALLENGE 3 

function tipCalculator (bill) {
    
// calculating tip 
    var percentageOfTip;
    var tip;

    if(bill < 50) {
        percentageOfTip = 0.2; 
    } else if (bill >= 50 && bill < 200) {
        percentageOfTip = 0.15; 
    } else {
        percentageOfTip = 0.1; 
    }
    return percentageOfTip * bill; 
}

var bills = [124, 48, 268]; 
var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];
var finalBills = [bills[0]+ tips[0], bills[1]+ tips[1], bills[2]+ tips[2]];

console.log( tips, finalBills);


// CODING CHALLENGE 4 


var mark = {
    fullName: 'Mark Smith',
    mass: 80,
    height: 1.8,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
    }
};
mark.calcBMI();
console.log(mark);

var john = {
    fullName: 'John Smith',
    mass: 80,
    height: 1.8,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
    }
};

john.calcBMI();
console.log(john);

if (mark.BMI > john.BMI) {     // mark.BMI  can be replace by fucntion call when the function calcBMI will have inside return this.BMI 
    console.log(mark.fullName + ' has higher BMI than ' + john.fullName);
} else if (john.BMI > mark.BMI) {
    console.log(john.fullName + ' has higher BMI than ' + mark.fullName);
} else {
    console.log(mark.fullName + ' and ' + john.fullName + ' have the same BMI');
}