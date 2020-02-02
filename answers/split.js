import { testArray } from "./helpers/test";

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
     if (
        str[i] != delimiter[delimiterIndex]
        && delimiterIndex > 0
    ) {
      word += delimiterWord;
      delimiterWord = "";
      delimiterIndex = 0;
    }
    if (str[i] === delimiter[delimiterIndex]) {
      if (delimiterIndex === delimiter.length-1) {
        result.push(word);
       word = "";
        delimiterWord = "";
        delimiterIndex = 0;
      } else {
        delimiterWord += str[i];
        delimiterIndex++
      }
    } else {
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
testSplit("")