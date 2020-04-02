import { test } from "./helpers/test.js";
// Create a function that takes a word, number of consecutives and returns true if the word has number of consecutive identical letters.
// Examples
// doubleLetters("loop", 2) ➞ true
// doubleLetters("yummy", 3) ➞ false
// doubleLetters("yummmy", 3) ➞ true
// doubleLetters("orange") ➞ false
// doubleLetters("munchkin") ➞ false

//Assumptions:
//Input is a string
//function returns true if string has specified or more count consecutive same character 

function consecutiveChar(str, count) {
  let numCharMatched = 1; //taken from shashi!

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      numCharMatched++
      if (numCharMatched === count) {
        return true;
      } 

    } else if (numCharMatched > 0) {
      numCharMatched = 1;
    }
  }

  return false;
}

function testConsecutiveChar(string, num, expect ) {
  test(consecutiveChar(string, num), expect);
} 

//stealing shashi's test cases
testConsecutiveChar("orrrrrrrrange", 8, true);
testConsecutiveChar("orrrrrrrrange", 7, true);
testConsecutiveChar("cooonsecutives", 3, true);
testConsecutiveChar("loop", 2, true);
testConsecutiveChar("yummy", 3, false);
testConsecutiveChar("yummmy", 3, true);
testConsecutiveChar("soooon", 4, true);
testConsecutiveChar("1122333333", 6, true);
testConsecutiveChar("this haaas some wooooords", 5, true);
testConsecutiveChar("this haaas some wooooords", 3, true);
testConsecutiveChar("this haaas some wooooords", 7, false);
testConsecutiveChar("12333444445555555555", 6, true);
testConsecutiveChar("somechar$$$$$", 5, true);
testConsecutiveChar("", 1, false);
testConsecutiveChar("", 0, false);
testConsecutiveChar(" ", 1, false);
testConsecutiveChar("   ", 1, false);
testConsecutiveChar("  ", 2, true);