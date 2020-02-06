/* Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:
{
  "product": "Milk",
  "quantity": 1,
  "price": 1.50
}
Examples
// 1 bottle of milk:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 }
]) ➞ 1.5
// 1 bottle of milk & 1 box of cereals:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Cereals", quantity: 1, price: 2.50 }
]) ➞ 4 */

const itemPrice = obj => {
  const { quantity, price } = obj;
  return quantity * price;
}

const totalPrice = array => {
  var ttlPrice = 0;

  for (let i = 0; i < array.length; i++) {
    ttlPrice += itemPrice(array[i]);
  }
  return ttlPrice;
}

function testTotalPrice(object, expected){
  if (totalPrice(object) === expected) {
    console.log("PASS 👍");
  } else {
    console.log("Fail 😢");
  }
}

testTotalPrice([{ product: "Milk", quantity: 1, price: 1.50 }], 1.50);
testTotalPrice([{ product: "Milk", quantity: 1, price: 1.50 },
{ product: "Cereals", quantity: 1, price: 2.50 }], 4);
testTotalPrice([{ product: "Milk", quantity: 1, price: 1.50 },
{ product: "Cereals", quantity: 1, price: 2.50 },
{ product: "Eggs", quantity: 12, price: 0.50 }], 10.0);
testTotalPrice([{ product: "Milk", quantity: 2, price: 1.50 },
{ product: "Cereals", quantity: 1.5, price: 4 },
{ product: "Bread", quantity: 3, price: 3.00 }], 18.00);
