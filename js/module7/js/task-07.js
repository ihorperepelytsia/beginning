const inputRoll = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

inputRoll.addEventListener("input", (e) => {
  span.style.fontSize = `${e.currentTarget.value}px`;
});
