const toppings = document.querySelectorAll(".topping");

toppings.forEach((topping) => {
  topping.addEventListener("click", (e) => {
    console.log(topping.dataset);
  });
});

 const checkoutButton = document.querySelector(".button");
 const ingredients = document.querySelectorAll(".order .topping"); //html line 10 =.order -- get all the .toppings class **inside only .order div** (there are other topping classes in the #nav, etc)

 const answerHolder = document.querySelector("#total");
 let total = 0;

 checkoutButton.addEventListener("click", () => {
   ingredients.forEach((ingredient) => {
     total += Number(ingredient.dataset.price);
   });
   answerHolder.innerHTML = `The total cost of your burger is $${total}`;
 });