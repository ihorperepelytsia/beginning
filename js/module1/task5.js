let message;
let price = 0;
const youAreCountre = prompt("You are countre?");
if (youAreCountre === null) {
  message = alert("Отменено пользователем");
} else {
  switch (youAreCountre.toLowerCase()) {
    case "китай":
      price = 100;
      message = alert(
        `Доставка в ${youAreCountre} будет стоить ${price} кредитов`
      );
      break;

    case "чили":
      price = 250;
      message = alert(
        `Доставка в ${youAreCountre} будет стоить ${price} кредитов`
      );
      break;

    case "австралия":
      price = 170;
      message = alert(
        `Доставка в ${youAreCountre} будет стоить ${price} кредитов`
      );
      break;

    case "индия":
      price = 80;
      message = alert(
        `Доставка в ${youAreCountre} будет стоить ${price} кредитов`
      );
      break;

    case "италия":
      price = 120;
      message = alert(
        `Доставка в ${youAreCountre} будет стоить ${price} кредитов`
      );
      break;

    default:
      message = alert("В вашей стране доставка не доступна");
  }
}
