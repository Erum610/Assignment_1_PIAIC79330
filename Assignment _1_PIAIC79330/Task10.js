var a;
document.write("Variable after value declaration is:  " + a +"<br>");

a=5;
document.write("  Initial value: " + a +"<br>");

a= ++a;
document.write(" Value after increment is :  " + a + "<br>");
a=a+7;
document.write(" Value after addition is :  " + a + "<br>");
a=--a;

document.write(" Value after decrement is :  " + a + "<br>");
a=a%3;
document.write("Output: 'The remainder is: " + a + "'");