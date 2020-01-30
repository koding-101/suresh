/*Create a function that moves all capital letters to the front of a word.
Examples
capToFront("hApPy") ➞ "APhpy"
Assumptions:
* No spaces*/

const moveCapLetter = str => {
  var capLetters = "";
  var smallLetter = "";
  var updatedstr = "";

  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      capLetters += str[i];
    } else {
      smallLetter += str[i];
    }
  }
  updatedstr = concatStr(capLetters, smallLetter);
  return updatedstr;
}

const concatStr = (str1, str2) => {
  for (var i = 0; i < str2.length; i++) {
    str1 += str2[i];
  }
  return str1;
}

function testmoveCapLetter(str, exp) {
  if (moveCapLetter(str) === exp) {
    console.log("Moved Correctly");
  } else {
    console.log("Not Moved Correctly")
  }
}

console.log(testmoveCapLetter("aBcDeF", "BDFace"));
console.log(testmoveCapLetter("aB23cDRe1F", "BDRFa23ce1"));
console.log(testmoveCapLetter("a", "a"));
console.log(testmoveCapLetter("A", "A"));
console.log(testmoveCapLetter("a1", "a1"));
console.log(testmoveCapLetter("1A", "A1"));
console.log(testmoveCapLetter("@Aa", "A@a"));
console.log(testmoveCapLetter("a%1A", "Aa%1"));
console.log(testmoveCapLetter("a1A*", "Aa1*"));
console.log(testmoveCapLetter("123", "123"));
console.log(testmoveCapLetter("", ""));
console.log(testmoveCapLetter(" ", " "));
console.log(testmoveCapLetter("moveMENT", "MENTmove"));
console.log(testmoveCapLetter("shOrtCAKE", "OCAKEshrt"));
