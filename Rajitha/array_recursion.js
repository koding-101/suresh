/***************************************************************************************
 * Create a function that takes two numbers as arguments (num, length) and returns an
 * array of multiples of num up to length.
 * Examples
 * arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
 * arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
 * arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
 * Notes
 * Notice that num is also included in the returned array
 ****************************************************************************************/
const arrayMultitple = (num, length) => {
  let arr = [];
  
 if (num ===  0 || length === 0){
   return arr;
  }

  for (let i = 1; i <= length; i++){
    arr.push(num * i); 
  }
  return arr;
}

const testarrayMultitple = (num, length, expected) => {
  if (JSON.stringify(arrayMultitple(num, length)) === JSON.stringify(expected)) {
    console.log("PASS 👍");
  } else {
    console.log("Fail 😢");
  }
}

testarrayMultitple(7, 5, [7, 14, 21, 28, 35]);
testarrayMultitple(12, 10, [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]);
testarrayMultitple(17, 6, [17, 34, 51, 68, 85, 102]);
testarrayMultitple(2, 1, [2]);
testarrayMultitple(3, 0, []);
testarrayMultitple(0, 3, []);