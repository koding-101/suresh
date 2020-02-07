/*************************************************************************************
* Create a function that takes a string and censors words over four characters with *.
* Examples
* censor("The code is fourty") ➞ "The code is ******"
* censor("Two plus three is five") ➞ "Two plus ***** is five"
* censor("aaaa aaaaa 1234 12345") ➞ "aaaa ***** 1234 *****"
* Notes
* Don't censor words with exactly four characters.
* If all words have four characters or less, return the original string.
* The amount of * is the same as the length of the word. 
**************************************************************************************/
const censorWord = str => {
  let inputStr = str.split(" ");
  let tempWord = "";

  for (let i = 0; i < inputStr.length; i++){    
    tempWord = inputStr[i];   
    inputStr[i] = (tempWord.length > 4 ? "*".repeat(tempWord.length) : tempWord);
  }  
  return inputStr.join(" ");
}

const testCensorWord = (str , expected) => {
  return censorWord(str) === expected;
}

console.log(testCensorWord("The code is fourty", "The code is ******"));
console.log(testCensorWord("The code   fourty", "The code   ******"));
console.log(testCensorWord("These apples are tasty", "***** ****** are *****"));
console.log(testCensorWord("@!@#$@ code is fourty", "****** code is ******"));
