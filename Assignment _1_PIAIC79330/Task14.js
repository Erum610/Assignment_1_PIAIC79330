var a=2;
var b=1;

document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>" );
var result= --a - --b + ++b + b--
document.write("result is " + result);
// --a is the predecrement in the value of a
// --a - --b (Output shows difference in the value of a and predecremented value of b)
// --a - --b + ++b (Output shows the summation of the value of (--a - --b) and preincremented value of b)
// --a - --b + ++b + b-- (Output shows summation of the value of (--a - --b + ++b) and post decremented value of b)