const input = document.querySelector("#controls input");
const boxes = document.querySelector("#boxes");
const btnRender = document.querySelector("[data-action=render]");
const btnDestroy = document.querySelector("[data-action=destroy]");

btnRender.addEventListener("click", () => createBoxex(input.value));
btnDestroy.addEventListener("click", destroyBoxes);

const randomNumber = (min, max) =>
  Math.floor(min + Math.random() * (max + 1 - min));

let sizeDiv = 30;
boxes.style.display = "flex";
function createBoxex(amount) {
  let arr = [];
  for (let i = 0; i < +amount; i++) {
    let div = document.createElement("div");
    div.style = `margin-right: 5px;
    height: ${sizeDiv}px;
    width: ${sizeDiv}px;
    background-color: rgb(${randomNumber(1, 256)},${randomNumber(
      1,
      256
    )},${randomNumber(1, 256)})`;

    sizeDiv += 10;
    arr.push(div);
  }

  boxes.append(...arr);
}

function destroyBoxes() {
  boxes.innerHTML = "";
  sizeDiv = 25;
}
