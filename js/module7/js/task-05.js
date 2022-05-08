const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", changeSpan);

function changeSpan(e) {
  span.textContent = e.currentTarget.value;
  if (e.currentTarget.value === "") {
    span.textContent = "Незнакомец";
  }
}
