function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  button: document.querySelector(".change-color"),
  body: document.querySelector("body"),
  span: document.querySelector("span"),
};

refs.button.addEventListener("click", onColorChange);

function onColorChange() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.span.textContent = getRandomHexColor();
}
