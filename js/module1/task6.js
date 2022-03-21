let input;
let total = 0;

// for (let i = 0; i >= -1; i += 1) {
//   input = prompt("Введите число");

//   total = total + +input;
//   if (input === null) {
//     console.log(`Общая сумма чисел равна ${total}`);
//     break;
//   }
// }

for (let i = 0; i >= -1; i += 1) {
  input = prompt("Введите число");

  if (input !== null) {
    if (!Number.isNaN(+input)) {
      total += +input;
    } else {
      console.log("Было введено не число, попробуйте еще раз");
    }
  } else if (input === null) {
    console.log(`Общая сумма чисел равна ${total}`);
    break;
  }
}
