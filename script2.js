// CODING CHALLENGE 5 

var percentage;
var tip;
var i;

var dinnerJohn = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    finalPrice: [],
    calcTip: function() {
        
        for (i = 0; i < this.bills.length; i++) {
        
            if (this.bills[i] < 50) {
                percentage = 0.2;
            } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
                percentage = 0.15;
            } else {
                percentage = 0.1;
            }

            tip = this.bills[i] * percentage;
            this.tips.push(tip);
            this.finalPrice.push(tip + this.bills[i]);
        }
        
    }
}

var dinnerMark = {
    bills: [77, 375, 110, 45],
    tips: [],
    finalPrice: [],
    calcTip: function() {
        
        for (i = 0; i < this.bills.length; i++) {
        
            if (this.bills[i] < 100) {
                percentage = 0.2;
            } else if (this.bills[i] >= 100 && this.bills[i] < 300) {
                percentage = 0.1;
            } else {
                percentage = 0.25;
            }

            tip = this.bills[i] * percentage;
            this.tips.push(tip);
            this.finalPrice.push(tip + this.bills[i]);
        }
        
    }
}

dinnerJohn.calcTip();
dinnerMark.calcTip();



function calcAverageTips(object) {

    var sum = 0;
    var averageTip;

    for (i = 0; i< object.tips.length; i++) {
        sum = sum + object.tips[i];   
    }
    averageTip = sum / object.tips.length;
    object.avrTip = averageTip;
}


calcAverageTips(dinnerMark);
calcAverageTips(dinnerJohn);
console.log(dinnerMark, dinnerJohn);

if (dinnerJohn.avrTip > dinnerMark.avrTip){
    console.log('John\'s family paid bigger tips on average')
} else {
    console.log('Mark\'s family paid bigger tips on average')
}
