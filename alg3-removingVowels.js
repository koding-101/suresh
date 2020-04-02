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

function testRemovingVowel(str, exp) {
  if (removingVowel(str) === exp) {
    console.log("vowels are removed");
  } else {
    console.log("vowels are not removed");
  }
}

testRemovingVowel("I have never seen a thin person drinking Diet Coke.", " hv nvr sn  thn prsn drnkng Dt Ck.");
testRemovingVowel("I", "");
testRemovingVowel("hello", "hll");
testRemovingVowel("", "");
testRemovingVowel("My age is 0", "My g s 0");
testRemovingVowel("  WOW! Ren is so active?", "  WW! Rn s s ctv?");
testRemovingVowel("AEIOU", "");
testRemovingVowel("aeiou", "");
testRemovingVowel(" aeiou", " ");
testRemovingVowel("aeiou ", "  WW! Rn s s ctv?");
