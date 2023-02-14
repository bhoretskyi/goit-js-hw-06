let valueEl = 0;

const valueSpan = document.querySelector("#value");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const incrementBtnHandler = () => {
    valueEl += 1;
    console.log(valueEl)
 
  valueSpan.textContent = valueEl;
};
console.log(valueEl);

const decrementBtnHandler = () => {
  valueEl -= 1;
  valueSpan.textContent = valueEl;
};

incrementBtn.addEventListener('click', incrementBtnHandler);
decrementBtn.addEventListener("click", decrementBtnHandler);


