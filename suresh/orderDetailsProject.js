var items = {
  Shoes: 12,
  Pants: 14,
  Dress: 18,
	Hat: 13,
	Socks: 3,
  Bandaid: 1000
}

var tax = 0.09; 

var orderDetails = [];
function customerBought(customer, orderedItem, qty) {
	return orderDetails.push({
 		customer,
  	orderedItem,
  	qty
  })
}

customerBought('Dan', 'Shoes', 1);
customerBought('Dan', 'Pants', 2);
customerBought('Sally', 'Dress', 1);
customerBought('Sally', 'Socks', 2);
customerBought('Jon', 'Hat', 1);
customerBought('Jon', 'Socks', 5);
customerBought('Dan', 'Bandaid', 1);
customerBought('Jon', 'Bandaid', 5);

console.log(orderDetails);

function noOfPeopleScannedBefore(customer, orderDetails) {
	for (var i = 0; i < orderDetails.length; i++) {
  	if ( orderDetails[i].customer === customer) {
    	return i;
    }
  }
}

console.log('Number of People scanned before Jon: ' + noOfPeopleScannedBefore('Jon', orderDetails));

function noOfPeopleBoughtItem(item, orderDetails) {
	var noOfPeople = 0;
	for (var i = 0; i < orderDetails.length; i++) {
  	if ( orderDetails[i].orderedItem === item) {
    	noOfPeople += 1;
    }
  }
  return noOfPeople;
}

console.log('Number of People bought Socks: ' + noOfPeopleBoughtItem('Socks', orderDetails));

function totalQtySold(orderDetails) {
	var totalQty = 0;
	for (var i = 0; i < orderDetails.length; i++) {
  	totalQty += orderDetails[i].qty;
  }
  return totalQty;
}

console.log('Total Quantity Sold: ' + totalQtySold(orderDetails));

function verifyItemBoughtByCustomer(customer, item, orderDetails) {
	for (var i = 0; i < orderDetails.length; i++) {
  	if (orderDetails[i].customer === customer && orderDetails[i].orderedItem === item) {
			return true;
    }
  }
  return false;
}

console.log('Does Sally buy a Dress: ' + verifyItemBoughtByCustomer('Sally', 'Dress', orderDetails));
console.log('Does Dan buy a Dress: ' + verifyItemBoughtByCustomer('Dan', 'Dress', orderDetails));

function totalAmount(orderDetails) {
	var total = 0;
	for (var i = 0; i < orderDetails.length; i++) {
  	total += orderDetails[i].qty * items[orderDetails[i].orderedItem];
  }
  return total;
}
console.log('Total amount before tax:' + totalAmount(orderDetails));

var totalPriceAfterTax = function (tax, totalAmountBeforeTax, orderDetails, customer) {
  var totalPrice = totalAmountBeforeTax(orderDetails, customer);
  return totalPrice + totalPrice * tax; 
}

console.log('Total sale amount after tax:' + totalPriceAfterTax(tax, totalAmount, orderDetails));

function totalAmountPerCustomer(orderDetails, customer) {
  var total = 0;
  for (var i = 0; i < orderDetails.length; i++) {
    if (orderDetails[i].customer === customer)
    total += orderDetails[i].qty * items[orderDetails[i].orderedItem];
  }
  return total;
}

console.log('Total amount after tax for Sally:' + totalPriceAfterTax(tax, totalAmountPerCustomer, orderDetails, 'Sally')); 
