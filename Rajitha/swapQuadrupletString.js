/*****************************************************************************
 * Swapping Two by Two
 * Write a function that swaps the first pair (1st and 2nd characters) with
 * the second pair (3rd and 4th characters) for every quadruplet substring.
 * Examples
 * swapTwo("ABCDEFGH") ➞ "CDABGHEF"
 * swapTwo("AABBCCDDEEFF") ➞ "BBAADDCCFFEE"
 * swapTwo("munchkins") ➞ "ncmuinhks"
 * swapTwo("FFGGHHI") ➞ "GGFFHHI"
 * Notes
 * Keep leftover strings in the same order.
 ****************************************************************************/
const swapTwo = str => {
  let strLength = str.length;  
  let iterate = Math.trunc(strLength / 4);
  let leftOver = strLength % 4;
  let tempStr;
  let outputStr = "";

  for (let i = 0; i < iterate; i++){
    tempStr = str.substr(0,4);
    str = str.substr(4);
    outputStr += tempStr.substr(2) + tempStr.substr(0,2);
  }

  if (leftOver > 0) {
    outputStr += str.substr(strLength-strLength*4);
  }
  return outputStr;
}

const testSwapTwo = (str, expected) => {
  if (swapTwo(str) === expected) {
    console.log("Pass");
  }
  else {
    console.log("Fail");
  }
}

testSwapTwo("ABC", "ABC");
testSwapTwo("ABCD", "CDAB");
testSwapTwo("ABCDEFGH", "CDABGHEF");
testSwapTwo("munchkins", "ncmuinhks");
testSwapTwo("AABBCCDDEEFF", "BBAADDCCFFEE");
testSwapTwo("FFGGHHI", "GGFFHHI");
testSwapTwo("This is kilo weight", "isThs  ilokiei wght");