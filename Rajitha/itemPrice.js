/**********************************************************************
 * Create a function that takes an array of objects (groceries) which 
 * calculates the total price and returns it as a number. A grocery 
 * object has a product, a quantity and a price,
 ***********************************************************************/
const getItemPrice = arr => {
  let itemPrice = 0;
 
  for (let i = 0; i < arr.length; i++){
    itemPrice += arr[i].price * arr[i].quantity;
  }
  return itemPrice
}

const testGetItemPrice = (arr,expected) => {
  if (getItemPrice(arr) === expected) {
    console.log("PASS 👍");
  } else {
    console.log("Fail 😢");
  }
}

testGetItemPrice([{product: "Milk", quantity: 1, price: 1.50}], 1.5);
testGetItemPrice([{product: "Milk", quantity: 2, price: 1.50}], 3);
testGetItemPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Cereals", quantity: 1, price: 2.50 }
  ], 4);
testGetItemPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Cereals", quantity: 1, price: 2.50 },
    { product: "Milk", quantity: 1, price: " " },
    { product: "Milk", quantity: 1, price: 9 }
  ], 13);
testGetItemPrice([
    { product: "Milk", quantity: 0, price: 1.50 },
    { product: "Cereals", quantity: 3, price: 2.50 }
  ], 7.5);

