/*********************************************************************************************************
 * Write a function that creates an object with each (key, value) pair being the (lower case, upper case)
 * versions of a letter, respectively.
 * Examples
 * mapping(["p", "s"]) ➞ { "p": "P", "s": "S" }
 * mapping(["a", "b", "c"]) ➞ { "a": "A", "b": "B", "c": "C" }
 * mapping(["a", "v", "y", "z"]) ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z"}
 *********************************************************************************************************/
const arrayToObject = arr => {
  let obj = { };  
  for (let i = 0; i < arr.length; i++){
    obj[arr[i]] = arr[i].toUpperCase();
  }
  return JSON.stringify(obj);
} 

const testarrayToObject = (arr, expected) => {
  if (arrayToObject(arr) === JSON.stringify(expected)) {
        console.log("PASS 👍");
      } else {
        console.log("Fail 😢");
      }
}
testarrayToObject(["p", "s"], { "p": "P", "s": "S" });
testarrayToObject(["p", " ", "s"], { "p": "P", " ": " ", "s": "S" });
testarrayToObject(["a", "b", "c"], {"a": "A", "b": "B", "c": "C" });
testarrayToObject(["a", "v", "y", "z"], { "a": "A", "v": "V", "y": "Y", "z": "Z"});