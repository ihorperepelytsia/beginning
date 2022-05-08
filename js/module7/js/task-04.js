const btnIncrement = document.querySelector('button[data-action="increment"]');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector("#value");
let counterValue = 0;

const increment = () => {
  value.textContent = counterValue += 1;
};

const decrement = () => {
  value.textContent = counterValue -= 1;
};

btnIncrement.addEventListener("click", increment);
btnDecrement.addEventListener("click", decrement);
