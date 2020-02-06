// Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:
// {
//   "product": "Milk",
//   "quantity": 1,
//   "price": 1.50
// }
// Examples
// // 1 bottle of milk:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 }
// ]) ➞ 1.5
// // 1 bottle of milk & 1 box of cereals:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Cereals", quantity: 1, price: 2.50 }
// ]) ➞ 4
//Assumptions:
//Quantity and Price if item is always a numeric
function itemPrice(obj) {
  const { quantity, price } = obj;
  return quantity * price;
}

function getTotalPrice(array) {
  var totalPrice = 0;
  for (let i = 0; i < array.length; i++) {
    totalPrice += itemPrice(array[i]);
  }
  return totalPrice;
}


function testGetTotalPrice(input, expected){
  console.log(getTotalPrice(input));
  console.log(getTotalPrice(input)===expected ? "pass": "fail");
}
testGetTotalPrice([{ product: "Milk", quantity: 1, price: 1.50 },
{ product: "Cereals", quantity: 1, price: 2.50 }], 4);
testGetTotalPrice([{ product: "Milk", quantity: 1, price: 1.50 },
{ product: "Cereals", quantity: 1, price: 2.50 },
{ product: "Bread", quantity: 3, price: 2.50 }], 11.5);
testGetTotalPrice([{ product: "Milk", quantity: 1.5, price: 2 },
{ product: "Cereals", quantity: 1, price: 2.50 },
{ product: "Bread", quantity: 3, price: 2.50 }], 13);
