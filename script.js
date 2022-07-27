const toppings = document.querySelectorAll(".topping");

toppings.forEach((topping) => {
  topping.addEventListener("click", (e) => {
    console.log(topping.dataset);
  });
});

