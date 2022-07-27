var marks = [22,44,55,23,67,87,33];
var max = marks [0];
for (var i = 0; i<marks.length; i++){
    var eliment = marks[i];
    if(eliment>max){
        max = eliment;
    }
}
console.log("The biger number is:", max);