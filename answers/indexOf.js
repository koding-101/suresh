import { test } from "./helpers/test.js";

function indexOf(strArr, find, fromIndex = 0) {
  //make sure starting index is greater than 0 and is a whole number;
  if (typeof strArr === "string" )  {
    if (find === "" || Array.isArray(find)) {
      return 0;
    }

    if (typeof find !== "string") {
      return -1
    }
    const startIndex = fromIndex > 0 ? Math.ceil(fromIndex) : 0;
    let firstIndexMatched = -1;
    let currentFindIndex = 0;
    for (let i = startIndex; i < strArr.length; i++ ) {
      //find matched;
      if (strArr[i] === find[currentFindIndex]) {
        if (firstIndexMatched === -1) {
          firstIndexMatched = i;
        } 
        currentFindIndex++;
      } else if ( currentFindIndex > 0) {
        //found all matched
        if (currentFindIndex === find.length) {
          break;
        }
        //reset if not matched
        firstIndexMatched = -1;
        currentFindIndex = 0;
      // Deal with "find" greater than "strArr"
      } else if (find.length - currentFindIndex > strArr.length - i) {
        return -1;
      }
    }
    return firstIndexMatched;
  }

  if (fromIndex < 0) {
    for (let i = strArr.length + fromIndex; i < strArr.length; i++ ) {
      if (strArr[i] === find) {
        return i;
      }
    }
  } else {
    for (let i = startIndex; i < strArr.length; i++ ) {
      if (strArr[i] === find) {
        return i;
      }
    }
  }
  return -1;
}

const testIndexOf = (strArr, find, start) => test(indexOf(strArr, find, start), strArr.indexOf(find, start));
testIndexOf("a", "a");
testIndexOf("", "a");
testIndexOf("a", "");
testIndexOf("a", []); //not sure why array return 0 and not -1;
testIndexOf("a", null);
testIndexOf("a", undefined);
testIndexOf("a", 0);
testIndexOf("a", 1);
testIndexOf("ba", "a");
testIndexOf("ba", "a", 1);
testIndexOf("ba", "a", 2);
testIndexOf("", "");
testIndexOf("", "", 1);
testIndexOf("supercalifragilisticexpialidocious", "d");
testIndexOf("supercalifragilisticexpialidocious", "li");
testIndexOf("supercalifragilisticexpialidocious", "fragil");
testIndexOf("supercalifragilisticexpialidocious ", " ");
testIndexOf(" supercalifragilisticexpialidocious ", " ");
testIndexOf(" supercalifragilisticexpialidocious ", " ", 1);
testIndexOf("abcdefgabc", "abc");
testIndexOf("abcdefgabc", "abc", 1);
testIndexOf("abcdefgabc", "abc", -1);
testIndexOf("abcdefgabc", "abc", -100);


const superInArray = ["s", "u", "p", "e", "r", "c", "a", "l", "i", "f", "r", "a", "g", "i", "l", "i", "s", "t", "i", "c", "e", "x", "p", "i", "a", "l", "i", "d", "o", "c", "i", "o", "u", "s"];

testIndexOf(["a"], "a");
testIndexOf([""], "a");
testIndexOf(["a"], "");
testIndexOf(["b", "a"], "a");
testIndexOf(["b", "a"], "a", 1);
testIndexOf(["b", "a"], "a", 2);
testIndexOf([""], "");
testIndexOf([""], "", 1);
testIndexOf(superInArray, "d");
testIndexOf(superInArray, "li");
testIndexOf(superInArray, "fragil");
testIndexOf(["s", "u", "p", "e", "r", " "], " ");
testIndexOf([" ", "s", "u", "p", "e", "r", " "], " ");
testIndexOf([" ", "s", "u", "p", "e", "r", " "], " ", 1);
testIndexOf(["abc","defg", "abc"], "abc");
testIndexOf(["abc","defg", "abc"], "abc", 1);
testIndexOf(["abc","defg", "abc"], "abc", -1);
testIndexOf(["abc","defg", "abc"], "abc", -2);
testIndexOf(["abc","defg", "abc"], "abc", -3);
testIndexOf(["abc","defg", "abc"], "abc", -100);
testIndexOf([1,"defg", "abc"], 1);
testIndexOf([1,"defg", 1], 1, 1);
testIndexOf([1,"defg", 1, undefined], undefined);
testIndexOf([1, null, 1], null);

testIndexOf([], []);
testIndexOf([], null);
testIndexOf([], undefined);
testIndexOf([1], []);
testIndexOf([1], null);
testIndexOf([1], undefined);