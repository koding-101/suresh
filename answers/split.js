import { testArray } from "./helpers/test.js";

//implement Array.prototype.split
function split(str, delimiter) {
  if (delimiter === undefined) {
    return [str];
  }
  const result = [];
  if (delimiter === "") {
     for (let i = 0; i < str.length; i++ ) {
       result.push(str[i]);
    }
    return result;
  }
  let word = "";
  let delimiterWord = "";
  let delimiterIndex = 0;
  for (let i = 0; i < str.length; i++ ) {   
    //reset if doesn't match entire delimiter eg. 
    //delimiter = "abc"
    //found "abZ" resets on "Z"
     if (
        str[i] != delimiter[delimiterIndex]
        && delimiterIndex > 0
    ) {
      //since not complete delimiter value, add values back to "word"
      word += delimiterWord;
      delimiterWord = "";
      delimiterIndex = 0;
    }

    //Found matching delimiter value;
    if (str[i] === delimiter[delimiterIndex]) {
      //if found all delimited values then
      //add word to result and reset values
      if (delimiterIndex === delimiter.length-1) {
        result.push(word);
        word = "";
        delimiterWord = "";
        delimiterIndex = 0;
      } else {
        //not all delimited values found.
        //save found delimited values, in case not complete delimited values.
        delimiterWord += str[i];
        delimiterIndex++
      }
    } else {
      //keep adding value to word until a delimited value is found.
       word += str[i];
    }
  }
  result.push(word + delimiterWord);
  return result;
}

const testSplit = (str, delimiter) =>  testArray(split(str, delimiter), str.split(delimiter));
testSplit("ab", "ab")
testSplit("aba", "a")
testSplit("abb", "a")
testSplit("bab", "a")
testSplit(" ", "a")
testSplit("   ", "a")
testSplit("_a _ a", "a")
testSplit("aaaaaa", "a")
testSplit("aaaaaa", "")
testSplit("aaaaaa", "adsa")
testSplit("aadsasdsaa", "adsasdsa")
testSplit(" aadsasdsaa ", "adsasdsa")
testSplit(" aadsasdsaa ")
testSplit("", "")
testSplit("")
testSplit("supercalifragilisticexpialidocious", "!")
testSplit("supercali!fragilisticexpi!alidoci!ous", "!")
testSplit("supercali!_fragilisticexpi!alidoci!_ous", "!_")
testSplit("supercali!_fragilisticexpi!alidoci!_ous", "@!_")
testSplit("supercali!_fragilisticexpi!alidoci@ !__ous", "@ !_")
testSplit("@ !_@ !_@ !_", "@ !_")