/* Create a function that takes a string and censors words over four characters with *.
Examples
censor("The code is fourty") ➞ "The code is ******"
censor("Two plus three is five") ➞ "Two plus ***** is five"
censor("aaaa aaaaa 1234 12345") ➞ "aaaa ***** 1234 *****"
Notes
Don't censor words with exactly four characters.
If all words have four characters or less, return the original string.
The amount of * is the same as the length of the word. */

const censorsWord = str => {
  var inputStr = str.split(" ");

  for (var i = 0; i < inputStr.length; i++) {
    if (inputStr[i].length > 4){
      inputStr[i] = makeCensorWord(inputStr[i].length);
    }
  }
  return inputStr.join(" ");
}

const makeCensorWord = cnt => {
  var temp = "";

  for (var i = 0; i < cnt; i++){
    temp += "*";
  }
  return temp;
}

function testCensorsWord(str, exp) {
  if (censorsWord(str) === exp) {
    console.log("Censored words over four characters with *");
  } else {
    console.log("Words over four characters are not censored");
  }
}

testCensorsWord("The code is fourty", "The code is ******");
testCensorsWord("Two plus three is five", "Two plus ***** is five");
testCensorsWord("aaaa aaaaa 1234 12345", "aaaa ***** 1234 *****");
testCensorsWord("@#$*C1 plus three is five", "****** plus ***** is five");
testCensorsWord("Hi, how are you", "Hi, how are you");
testCensorsWord("HiHi HiHi HiHi", "HiHi HiHi HiHi");
testCensorsWord("aaaaa aaaaaa aaaaaaa", "***** ****** *******");
testCensorsWord("h 1 @", "h 1 @");
testCensorsWord("HELLO, HOW ARE YOU DOING?", "****** HOW ARE YOU ******");
