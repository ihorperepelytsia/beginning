class Storage {
  constructor(array) {
    this.array = array;
  }
  get items() {
    return this.array;
  }
  getItems() {
    return this.array;
  }
  addItem(item) {
    return this.array.push(item);
  }
  removeItem(item) {
    const thisArr = this.array;
    if (thisArr.includes(item)) {
      const deleteEl = thisArr.indexOf(item);
      thisArr.splice(deleteEl, 1);
    }
    return thisArr;
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
