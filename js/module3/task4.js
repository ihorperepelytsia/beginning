const countTotalSalary = function (employees) {
  //   const values = Object.values(employees);
  let total = 0;

  //   for (const value of values) {
  //     total += value;
  //   }

  for (const value in employees) {
    total += employees[value];
  }
  return console.log(total);
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
countTotalSalary({}); // 0

countTotalSalary({
  mango: 100,
  poly: 150,
  alfred: 80,
}); // 330

countTotalSalary({
  kiwi: 200,
  lux: 50,
  chelsy: 150,
}); // 400
