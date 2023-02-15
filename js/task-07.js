const refs = {
  input: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange() {
  console.log(refs.input.value);
  refs.text.style.fontSize = refs.input.value + "px";
}
