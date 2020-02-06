const sortArray = arr => {
  let ipArr = arr;
  let opArr = [];

  for (let i = 0; i < ipArr.length; i++){
    if(typeof(ipArr[i]) === "number"){
      opArr.push(ipArr[i]);
    }
  }
  return opArr;
}

const testsortArray = (arr, expected) => {
  return (JSON.stringify(sortArray(arr))===JSON.stringify(expected)? true : false);
}
console.log(testsortArray([1, 2, "aasf", "1", "123", 123], [1, 2, 123]));
console.log(testsortArray([1, 2, "a", "b"], [1, 2]));
console.log(testsortArray([1, "a", "b", 0, 15], [1, 0, 15]));
console.log(testsortArray([2, "a", "b"], [2]));
console.log(testsortArray([,1, 2, "a", "b"], [1, 2]));