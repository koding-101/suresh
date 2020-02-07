/* Swapping Two by Two
Write a function that swaps the first pair (1st and 2nd characters) with the second pair (3rd and 4th characters) for every quadruplet substring.
Examples
swapTwo("ABCDEFGH") ➞ "CDABGHEF"
swapTwo("AABBCCDDEEFF") ➞ "BBAADDCCFFEE"
swapTwo("munchkins") ➞ "ncmuinhks"
swapTwo("FFGGHHI") ➞ "GGFFHHI"
Notes
Keep leftover strings in the same order.*/

const swapPair = str => {
  var swappedstr = "";
  var strLnth = str.length;
  var noOfIterations = 4 * Math.trunc(strLnth / 4);
  var remaining = strLnth % 4

  if (str.length < 4) {
    return str;
  }

  for ( var i = 0; i < noOfIterations; i+=4) {
    swappedstr += str[i+2] + str[i+3] + str[i] + str[i+1];
  }
  
  if (remaining > 0) {
    swappedstr += str.substr(noOfIterations);
  }
  return swappedstr;
}

function testswapPair(str, exp) {
  if (swapPair(str) === exp) {
    console.log("PASS 👍");
  } else {
    console.log("Fail 😢");
  }
}

testswapPair("ABCDEFGH", "CDABGHEF");
testswapPair("AABBCCDDEEFF", "BBAADDCCFFEE");
testswapPair("munchkins", "ncmuinhks");
testswapPair("FFGGHHI", "GGFFHHI");
testswapPair("ABC", "ABC");
testswapPair("", "");
testswapPair("AB12CD34", "12AB34CD");
testswapPair("123456789", "341278569");
testswapPair("@@##$$%%", "##@@%%$$");
testswapPair("Hello, I AM SURESH", "llHe Io,M  ARESUSH");
