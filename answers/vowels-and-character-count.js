import { test } from "./helpers/test";

// find vowels using object to store vowels
const vowels = (str) => {
  const vowel = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  }

  let count = 0
  const lowerCasedStr = str.toLowerCase();

  for (let i = 0; i < lowerCasedStr.length; i++) {
    if (vowel[lowerCasedStr[i]]) {
      count++
    }
  }
  return count;
}

const vowelTest = (string, expect) => test(vowels(string), expect);
vowelTest("aeio", 4);
vowelTest("haeioh", 4);
vowelTest(" aeio ", 4);
vowelTest("a", 1);
vowelTest(" a", 1);
vowelTest("a ", 1);
vowelTest("supercalifragilisticexpialidocious", 16);
vowelTest("   super cali fragilistic?! expialidocious!    ", 16);

//-------------------------------------------//
// ---- Option 2 check any characters ------ //
//-------------------------------------------//

/*
 write a function that returns the number of vowels in the str;
 write a function that returns the number of "a" in the str;
*/

//letter - characters to check (string)
//strings - input string to check from (string)
function countOfletters (letters, string) {
  const lettersLowerCasedLength = letters.length;
  const stringLowerCasedLength = string.length;

  //Edge case checks
  if (lettersLowerCasedLength === 0 || stringLowerCasedLength === 0 ) {
    return 0;
  }

  // two loops to change all to lowerCase
  const lettersLowerCased = letters.toLowerCase();
  const stringsLowerCased = string.toLowerCase();
  let countOfletters = 0
  //if letters + string length is less than 20 it is faster to use includes (just a guess)
  if ( lettersLowerCasedLength + stringLowerCasedLength < 20) {
    for (let i = 0; i < stringLowerCasedLength; i++) {
      if (lettersLowerCased.includes(stringsLowerCased[i])) {
        countOfletters++
      }
    }
    return countOfletters;
  }
  //creating an object and removing duplicates in letters.
  const lettersObject = {};
  for (let i = 0; i < lettersLowerCasedLength; i++) {
    const currentChar = lettersLowerCased[i];
    lettersObject[currentChar] = true;
  }
  for (let i = 0; i < stringLowerCasedLength; i++) {
    if (lettersObject[stringsLowerCased[i]]) {
      countOfletters++
    }
  }
  return countOfletters;
}

const countOflettersTest = (letters, string,  expect) => test(countOfletters(letters, string), expect);

countOflettersTest("a", "supercalifragilisticexpialidocious", 3)
countOflettersTest("aaaaaaa", "supercalifragilisticexpialidocious", 3)
countOflettersTest("a", "aaaa", 4)
countOflettersTest("aeiou", "supercalifragilisticexpialidocious", 16)
countOflettersTest("aeiou", "   super cali fragilistic?! expialidocious!    ", 16);
countOflettersTest("a", "a", 1);
countOflettersTest(" a", "a", 1);
countOflettersTest("a ", "a", 1);
countOflettersTest("a", " a", 1);
countOflettersTest("a", " a ", 1);
countOflettersTest("a", "a ", 1);

countOflettersTest(" a", " a", 2);
countOflettersTest(" a ", " a ", 3);
countOflettersTest("a ", "a ", 2);
countOflettersTest("+_&^#%@", "+super*cal#ifrag####ilis^tice&xpia_li%doci@ous@", 12);
