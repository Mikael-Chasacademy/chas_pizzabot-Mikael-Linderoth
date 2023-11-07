const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:

function displayMenu() {
  alert(
    `Hey! Happy to serve your pizza.\n On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
  );
}

function checkOrderName(orderName) {
  return (
    orderName === vegetarian ||
    orderName === hawaiian ||
    orderName === pepperoni
  );
}

function totalCost(orderQuantity) {
  return orderQuantity * pizzaPrice;
}

function cookingTime(orderQuantity) {
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return 15;
  } else {
    return 20;
  }
}

function orderPizza() {
  const orderName = prompt(
    "Enter the name of the pizza you want to order today: (example: Name Pizza)"
  );

  if (checkOrderName(orderName)) {
    const orderQuantity = prompt(
      `How many of ${orderName} do you want to order?`
    );

    const orderTotal = totalCost(orderQuantity);
    const orderCookingTime = cookingTime(orderQuantity);

    alert(
      `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${orderCookingTime} minutes.`
    );
  } else {
    alert("Sorry, we don't have that pizza on our menu.");
  }
}
