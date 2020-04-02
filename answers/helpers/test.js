//test function does not compare between array to array and objects to objects.
export function test(result, expect) {
  if (result === expect) {
    console.log("PASS 👍")
  } else {
    console.log("Fail 😢 expect ", expect, " received ", result)
  }
}

//compare array to array
export function testArray(input, expect) {
  const resultStringified = JSON.stringify(input);
  const expectStringified = JSON.stringify(expect);

  test(resultStringified, expectStringified);
}
