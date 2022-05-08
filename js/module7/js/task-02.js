const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const getSelector = document.querySelector("#ingredients");
const creatIngrefientsInHtml = (ingredients) => {
  ingredients.map((el) => {
    const createEl = document.createElement("li");
    createEl.textContent = el;
    getSelector.appendChild(createEl);

    return createEl;
  });
};
creatIngrefientsInHtml(ingredients);
