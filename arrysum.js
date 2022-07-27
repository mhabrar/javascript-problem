function arrysum (number){
    var sum = 0;
    for(var i = 0; i<number.length; i++){
        var eliment = number[i];
        sum = sum + eliment;
    }
    return sum;
}
var number =[212,22,2,,3,434,42,23,2322,4,]
var result =arrysum(number);
console.log(result);