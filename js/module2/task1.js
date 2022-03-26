const logItems = function (arrays) {
  for (const array of arrays) {
    console.log(`${arrays.indexOf(array) + 1} - `, array);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
