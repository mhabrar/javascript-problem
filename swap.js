var a = 10;
var b = 20;
console.log("before sawp: a=", a, "b =", b );
var temp = a;
b = a;
a = b;
console.log("after swap : a=", a, "b=", b)