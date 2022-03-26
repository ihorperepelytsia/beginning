const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  for (const arr of allProdcuts) {
    if (productName === arr.name) {
      let total = 0;
      console.log((total = arr.price * arr.quantity));
    }
  }
};

calculateTotalPrice(products, "Радар"); // 5200

calculateTotalPrice(products, "Дроид"); // 2800
