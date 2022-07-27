const toppings = document.querySelectorAll(".topping");

toppings.forEach((topping) => {
  topping.addEventListener("click", (e) => {
    console.log(topping.dataset);
  });
});


const checkoutButton = document.querySelector(".button");
 const answerHolder = document.querySelector("#total");
 checkoutButton.addEventListener("click", () => {
   let total = 0;
   const ingredients = document.querySelectorAll(".order .topping"); //html line 10 =.order -- get all the .toppings class **inside only .order div** (there are other topping classes in the #nav, etc)

   ingredients.forEach((ingredient) => {
     total += Number(ingredient.dataset.price);
   });
   total = Math.ceil(total * 100) / 100;
   answerHolder.innerHTML = `Your burger is $${total}`;
   answerHolder.classList.remove("hidden");
 });

const orderDiv = document.querySelector(".order");
const NavButtons = document.querySelectorAll("#nav .topping");
NavButtons.forEach((navButton) => {
  navButton.addEventListener("click", (e) => {
   //tomato will appear under the bun (under the first tomato div) - bc in css, the tomato class has an ORDER (order: 2)
   orderDiv.innerHTML +=
     `<div class="topping ${navButton.dataset.ingredient}" data-ingredient="${navButton.dataset.ingredient}" data-price="${navButton.dataset.price}">${navButton.dataset.ingredient}</div>`;
    removeIngredients();
   });
});


function removeIngredients(){
   // REMOVES INGREDIENTS IF CLICKED
  let ingredients = document.querySelectorAll(".order .topping");
  console.log(ingredients);
  
  ingredients.forEach((ingredient) => {
    ingredient.addEventListener("click", (e) =>{
      ingredient.remove();
    });
  });
};
