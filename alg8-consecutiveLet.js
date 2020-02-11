/*Create a function that takes a word and returns true if the word has two consecutive identical letters.
Examples
doubleLetters("loop") ➞ true
doubleLetters("yummy") ➞ true
doubleLetters("orange") ➞ false
doubleLetters("munchkin") ➞ false*/

const consecutive = (str, numCons) => {
  var count = 1;

  for(var i = 1; i < str.length; i++){
    if (str[i] === str[i-1]) {
      count++;
      if (count === numCons) {
        return true;
      }
    } else if(count > 1) {
      count = 1;
    }
  }
  return false;
}

function testConsecutive(str, numCons, expected) {
  if (consecutive(str, numCons) === expected) {
    console.log("PASS 👍");
  } else {
    console.log("Fail 😢");
  }
}

testConsecutive("loop", 2, true);
testConsecutive("loop", 3, false);
testConsecutive("yummy", 2, true);
testConsecutive("yummmy", 3, true);
testConsecutive("yummmy", 2, true);
testConsecutive("abcd", 2, false);
testConsecutive("yummmmmy", 2, true);
testConsecutive("yummmmmy", 5, true);
testConsecutive("yummmmmy", 6, false);
testConsecutive("", 2, false);
testConsecutive("ab@@cd", 2, true);
testConsecutive("ab11222cd", 3, true);
testConsecutive("a##@@cd", 2, true);
