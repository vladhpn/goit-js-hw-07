const buttonRef = {
  sub: document.querySelector("[data-action='increment']"),
  add: document.querySelector("[data-action='decrement']"),
  span: document.querySelector('#value'),
};

let counterValue = 0;
const increment = () => {
  counterValue += 1;

  buttonRef.span.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  buttonRef.span.textContent = counterValue;
};

buttonRef.sub.addEventListener('click', increment);
buttonRef.add.addEventListener('click', decrement);
