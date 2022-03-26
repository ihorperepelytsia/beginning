let input;
const numbers = [];
let total = 0;

const sumMassive = function () {
  for (let i = 0; i >= -1; i += 1) {
    input = prompt("you write number please");
    if (input !== null) {
      if (!Number.isNaN(+input)) {
        numbers.push(+input);
      } else {
        console.log("Было введено не число, попробуйте еще раз");
      }
    } else if (input === null) {
      for (const number of numbers) {
        total += number;
      }
      return numbers.length > 0
        ? console.log(`Общая сумма чисел равна ${total}`)
        : console.log(`пусто`);
    }
  }
};

sumMassive();
