const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  const array = [];
  for (const obj of arr) {
    for (const key in obj) {
      if (prop === key) {
        array.push(obj[key]);
      }
    }
  }
  console.log(array);
};

getAllPropValues(products, "name"); // ['Радар', 'Сканер', 'Дроид', 'Захват']

getAllPropValues(products, "quantity"); // [4, 3, 7, 2]

getAllPropValues(products, "category"); // []
