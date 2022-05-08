const input = document.querySelector("#validation-input");
const getAttrInput = +input.getAttribute("data-length");

input.addEventListener("blur", (e) => {
  const valueLegth = e.currentTarget.value.length;
  if (0 < valueLegth < getAttrInput || getAttrInput > valueLegth) {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
  if (valueLegth === getAttrInput) {
    input.classList.replace("invalid", "valid");
  }
});
