/*Create a function that takes a string and returns a new string with all vowels removed.
Examples
removeVowels("I have never seen a thin person drinking Diet Coke.")
➞ " hv nvr sn  thn prsn drnkng Dt Ck."*/

const removingVowel = str => {
	var newString = "";
  var vowels = {
    'a': true,
    'e': true,
    'i': true,
    'o': true,
    'u': true
  };

  for(var i = 0; i < str.length; i++) {
    if (!vowels[str[i].toLowerCase()]) {
      newString += str[i];
    }
  }
  return newString;
}

function testRemovingVowel(str) {
  console.log(removingVowel(str));
}

testRemovingVowel("I have never seen a thin person drinking Diet Coke.");
testRemovingVowel("I");
testRemovingVowel("hello");
testRemovingVowel("");
testRemovingVowel("My age is 0, 0 si ega ym");
testRemovingVowel("  WOW! Ren is so active?");
