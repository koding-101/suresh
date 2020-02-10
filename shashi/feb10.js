// Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.
// Examples
// mapping(["p", "s"]) ➞ { "p":"P", "s":"S" }
// mapping(["a", "b", "c"]) ➞ { "a": "A", "b": "B", "c": "C" }
// mapping(["a", "v", "y", "z"]) ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z"}
//Assumption: If any value of input array is not string, same value is added to key and value

const mapping = arr => {
  var obj = {};
  
  arr.forEach(element => {
    if(typeof element === "string"){
      //console.log("element in if", element)
    obj[element.toLowerCase()]= element.toUpperCase();
    } else {
      //console.log("element in else", element)
      obj[element]= element;
    }
  });
  return JSON.stringify(obj);
}

//console.log(mapping([3, "4"]));

const testMapping = (input, output)=> {

  console.log(mapping(input) === JSON.stringify(output)? "pass": "fail");
}

testMapping(["a", "v", "y", "z"], {"a":"A","v":"V","y":"Y","z":"Z"});
testMapping(["p", "s"], { "p": "P", "s": "S" });
testMapping(["a", "b", "c"], { "a": "A", "b": "B", "c": "C" });
testMapping(["T", "s"], { "t": "T", "s": "S" })
testMapping(["p", "$"], {"p":"P", "$":"$"});
testMapping(["", " "], {"":"", " ": " "});
testMapping(["3", 4], {"3":"3","4":4});
testMapping([],{});