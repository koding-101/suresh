//Assumptions:
//All names in the arrya are alohabets
//No Numeric values
//No special characters
//No Empty names
//Any case names

function secretSocityName(arr) {
  var teamName = "";
  arr.sort().forEach(name => {
    teamName = teamName + name.charAt(0);
  })
  return teamName;
}

function testName(arr, expName) {
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