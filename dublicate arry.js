var nameOf = [84,4,4,3,55,3,355,44,44,33,777,55];
var uniqueName = [];

for(i = 0; i< nameOf.length; i++){
    var eliment =nameOf [i];
    var index = uniqueName.indexOf(eliment);
    if (index == -1){
        uniqueName.push(eliment);
    }
}
console,log(uniqueName);