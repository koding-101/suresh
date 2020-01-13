//calculate Factorial of a number
const calcFactorial = num => {
  if (num < 0) {
    return `Not a value number to calculate factorial`;
  }
  if (num === 0 || num === 1) {
    return 1;
  }
  if (num > 1) {
    return num * calcFactorial(num - 1);
  }
}

console.log(calcFactorial(5));

//calculate power of a number
const power = (num, times) => {
  const recursive = (num, times) => {
    if (times === 1) {
      return num;
    }
    if (times > 1) {
      return num * recursive(num, times - 1);
    }
  }
  if (times < 0 || num < 0) {
    return -1;
  }
  if (num === 0 || times === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  return recursive(num, times);
}

console.log(power(2, 4));

//Reverse a string
const reverse = str => {
  return str.split("").reverse().join("");
}

console.log(reverse("Recursion Sucks"));

const reverseRecur = str => {
  if (str === "") {
    return "";
  } else {
    return reverseRecur(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverseRecur("Recursion Sucks"));

//Given an array of numbers, find the max sum using elements that are not adjacent to the previously included element.
//For example, if I decide to use the first element `1`, I cannot include the second element `2` as they  are adjacent.

maxSum([1, 2, 9, 4, 5, 0, 4, 11, 6])

const maxSum = arr => {
	let incl = arr[0];
  let excl = 0;
  let excl_new = 0;
  for (let i = 1; i < arr.length-1; i++) {
  	excl_new = incl;
    incl = Math.max(excl + arr[i], incl);
    excl = excl_new;
  }
  return incl;
}

console.log(maxSum([1,2,9,4,5,0,4,11,6]));
