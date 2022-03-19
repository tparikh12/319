var rs = require('readline-sync');
//const input = require('readline-sync')

var num1 = parseInt(rs.question('1st Number : '));

var num2 = parseInt(rs.question('2nd Number : '));

var num3 = parseInt(rs.question('3rd Number : '));

var num4 = parseInt(rs.question('4th Number : '));


console.log("Factorial of the 1st number is = ", eval1(num1));

function eval1(c)
{ if(c==1) return 1;
    return c*eval1((c-1));
}
console.log("The sum of all the digits of the 2nd number is = ", eval2(num2));
function eval2(value)
{ var sum=0;
    while (value) {
        sum += value % 10;
        value = Math.floor(value / 10);
    }
    return sum;
}
console.log("The Reverse of the 3rd number is = ", eval3(num3));


function eval3(val)
{ var sum=0;
    while(val!=0)
    {
        sum = ((sum*10)+(val%10));
        val = Math.floor(val/10);
    }

    return sum;
}
console.log("Is the 4th Number a Palindrome(True/False)? ", eval4(num4));
function eval4(value)
{
    return  parseInt(value) == parseInt(eval3(value));
}
