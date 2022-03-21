const credits = 23580;
const pricePerDroid = 3000;
const inquiry = prompt("Сколько хотел купить ?");
let message;
let totalPrice;
totalPrice = inquiry * pricePerDroid;

if (inquiry === null) {
  message = alert("Отменено пользователем");
} else if (totalPrice > credits) {
  message = alert("Недостаточно средств на счету!");
} else {
  message = alert(
    `Вы купили ${inquiry} дроидов, на счету осталось ${
      credits - totalPrice
    } кредитов.`
  );
}
