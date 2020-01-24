/****************************************************
* Create a function to get the factoral of a number.
* Input: factoral(5)  Output: 120
****************************************************/
function factorial(number) {
  if (number > 0){
    return (number * factorial(number - 1))
  } else {
    return 1;
  }
};

function test(callback, input, expect){
  const result = callback(input);
  console.log(result === expect? "Pass" : `Fail ${result} is not same as ${expect}`);
}
test(factorial, 6, 720);
test(factorial, 1, 1);
test(factorial, 10, 3628800);

/*********************************************************
* Create a function to get the power of a number.
* Multiply the first input x(second input) number of times
* Input: power(2, 5)
* Output: 32
* reason: 2x2x2x2x2
**********************************************************/
var numPower = function(num,exp) {
  if (exp === 0){
    return 1;
  } else {
    return num * numPower(num,exp-1);
  }
};

function testPower(callback, input1, input2, expect){
  const result = callback(input1, input2);
  console.log(result === expect? "Pass" : `Fail ${result} is not same as ${expect}`);
}
testPower(numPower, 2, 5, 32);
testPower(numPower, 100, 1, 100);
testPower(numPower, -2, 3, -8);
testPower(numPower, 0.2, 5, 0.00032000000000000013);

/***************************************************
* Reverse a string
* Input: reverse("Recursion Sucks")
* Output: "skcuS noisruceR"
****************************************************/
const reverseString = str => {
  if (str === "") {
    return "";
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}
test(reverseString, "This is big bucket", "tekcub gib si sihT");
test(reverseString, "Hello", "olleH");
test(reverseString, "12345", "54321");
test(reverseString, "Koding is fun :-)", ")-: nuf si gnidoK");