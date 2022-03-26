const findBestEmployee = function (employees) {
  const max = Math.max(...Object.values(employees));
  for (const key in employees) {
    if (employees[key] === max) {
      console.log(key);
    }
  }
};

findBestEmployee({
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
}); // lorence

findBestEmployee({
  poly: 12,
  mango: 17,
  ajax: 4,
}); // mango

findBestEmployee({
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
}); // lux
