// Filter out Strings from an Array
// Create a function that takes an array of non-negative numbers and strings and return a new array without the strings.
// Examples
// filterArray([1, 2, "a", "b"]) ➞ [1, 2]
// filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
// filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
// Notes
// Zero is a non-negative number.

function filterOutString (arr){
  const result = [];

  for(let i = 0; i < arr.length; i++) {
    const currentVal = arr[i];
    if( typeof currentVal !== "string") {
        result.push(currentVal)
    }
  }

  return result;
}

const filterOutStringArrayMethod = arr => arr.filter(currentVal => typeof currentVal !== "string");