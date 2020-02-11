
import { test } from "./helpers/test.js";
// Swapping Two by Two
// Write a function that swaps the first pair (1st and 2nd characters) with the second pair (3rd and 4th characters) for every quadruplet substring.
// Examples
// swapTwo("ABCDEFGH") ➞ "CDABGHEF"
// swapTwo("AABBCCDDEEFF") ➞ "BBAADDCCFFEE"
// swapTwo("munchkins") ➞ "ncmuinhks"
// swapTwo("FFGGHHI") ➞ "GGFFHHI"
// Notes
// Keep leftover strings in the same order.

function swapTwo(str) {
  let result = "";

  for(let i = 3; i < str.length; i += 4) {
    result += str[i - 1] + str[i] + str[i - 3] + str[i - 2];
  }

  const remainingLength = str.length % 4;

  if (remainingLength) {
    const iterateStart = str.length - remainingLength;
    for (let i = iterateStart;  i < str.length; i++ ) {
      result += str[i];
    }
  }

  return result;
}

const testSwapTwo = (arr, expect) => test(swapTwo(arr), expect);

testSwapTwo("ABCDEFGH", "CDABGHEF" );
testSwapTwo("ABCDEFGHI", "CDABGHEFI" );
testSwapTwo("ABCDEFGHII", "CDABGHEFII" );
testSwapTwo("ABCDEFGHIOP", "CDABGHEFIOP" );
testSwapTwo("AABBCCDDEEFF", "BBAADDCCFFEE" );
testSwapTwo("munchkins", "ncmuinhks" );
testSwapTwo("FFGGHHI", "GGFFHHI" );
testSwapTwo("ABCDEFGH", "CDABGHEF" );
testSwapTwo("", "" );
testSwapTwo(" ", " " );
testSwapTwo("  ", "  " );
testSwapTwo("   ", "   " );
testSwapTwo("    ", "    " );
testSwapTwo("A", "A" );
testSwapTwo("AB", "AB" );
testSwapTwo("ABC", "ABC" );
testSwapTwo("ABCD", "CDAB" );
testSwapTwo(" A B C D", " B A D C" );