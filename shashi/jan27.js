//Assumptions:
//All names in the arrya are alohabets
//No Numeric values
//No special characters
//No Empty names
//Case of the 1st letter is case sensitive

function secretSocityName(arr) {
  var teamName = "";
  
  const reducer = (accumulator, currentValue) => accumulator + currentValue.charAt(0);
  
  return (teamName = arr.sort().reduce(reducer, ""));
  
}

function testName(arr, expName) {
  console.log("fn returns: ", secretSocityName(arr));
  if (secretSocityName(arr) === expName) {
    console.log("Generated name is correct!");
  } else {
    console.log("Generated name is not correct!")
  }
}

testName(["Adam", "Sarah", "Malcolm"], "AMS");
testName(["Harry", "Newt", "Luna", "Cho"], 'CHLN');
testName(["", "Malcolm", "Adam", "Newt"], "AMN");
testName(["S", "John", "Rob", "Rob", "Peter"], "JPRRS");
testName(["riv", "sim", "arg"], "ars");
testName(["riv", "sim", "arg"], "ARS"); //negative scenario