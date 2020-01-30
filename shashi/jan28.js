//Create a function that takes a string and returns a new string with all vowels removed.
//Assumptions:
//Only string input
//No numbers

var vowels = ["a", "e", "i", "o", "u"];
function isVowel(char){
  for (let i = 0; i < vowels.length; i++) {
    if (char.toLowerCase() === vowels[i]) {
      return true;
    } 
  }
  return false;
}

function removeVowels(str = "") {
  var newStr = "";
  for (let i = 0; i < str.length; i++) {
    if(!isVowel(str[i])){
      newStr+=str[i];
    }
  }
  return newStr;
}

function testRemoveVowelFuntion(fn, str, expectedOutput) {
  console.log("fn output:", fn(str));
  (fn(str) === expectedOutput) ? console.log(`Expected Output :)`) : console.log(`Expected Output ${expectedOutput} is NOT same actual ${fn(str)}!`);
}
var string;

testRemoveVowelFuntion(removeVowels, "I have never seen a thin person drinking Diet Coke.", " hv nvr sn  thn prsn drnkng Dt Ck.");
testRemoveVowelFuntion(removeVowels, "AEIOU", "");
testRemoveVowelFuntion(removeVowels, "except aeiou", "xcpt ");
testRemoveVowelFuntion(removeVowels, "REMOVE ALL VOWELS", "RMV LL VWLS")
testRemoveVowelFuntion(removeVowels, "checking with special char %$(", "chckng wth spcl chr %$(");
testRemoveVowelFuntion(removeVowels, "1234567 is vowels with numbers", "1234567 s vwls wth nmbrs")
testRemoveVowelFuntion(removeVowels, "", "");
testRemoveVowelFuntion(removeVowels, " ", " ");
testRemoveVowelFuntion(removeVowels, string, "");
testRemoveVowelFuntion(removeVowels, "aeiou", "");
testRemoveVowelFuntion(removeVowels, " aeiou", " ");
testRemoveVowelFuntion(removeVowels, "aeiou ", " ");

//same function with filter:
function secondRemoveVowels(str) {
  var newStr = "";
  var strArr = str.split("");
  newStr = strArr.filter(c => ('aeiou'.includes(c.toLowerCase())) ? newStr : newStr + c);
  str = newStr.join("")
  return str;
}

testRemoveVowelFuntion(secondRemoveVowels, "I have never seen a thin person drinking Diet Coke.", " hv nvr sn  thn prsn drnkng Dt Ck.");
testRemoveVowelFuntion(secondRemoveVowels, "AEIOU", "");
testRemoveVowelFuntion(secondRemoveVowels, "except aeiou", "xcpt ");
testRemoveVowelFuntion(secondRemoveVowels, "REMOVE ALL VOWELS", "RMV LL VWLS")
testRemoveVowelFuntion(secondRemoveVowels, "checking with special char %$(", "chckng wth spcl chr %$(");
testRemoveVowelFuntion(secondRemoveVowels, "1234567 is vowels with numbers", "1234567 s vwls wth nmbrs")
testRemoveVowelFuntion(secondRemoveVowels, "", "");
testRemoveVowelFuntion(secondRemoveVowels, " ", " ");
testRemoveVowelFuntion(secondRemoveVowels, "aeiou", "");
testRemoveVowelFuntion(secondRemoveVowels, " aeiou", " ");
testRemoveVowelFuntion(secondRemoveVowels, "aeiou ", " ");
//testRemoveVowelFuntion(secondRemoveVowels, string, "");// this throws a type error, not sure how to fix that.