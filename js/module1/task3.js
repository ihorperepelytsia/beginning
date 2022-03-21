const ADMIN_PASSWORD = "jqueryismyjam";
let message;
const inquiry = prompt("введите пароль");
// console.log(inquiry);
if (inquiry === null) {
  message = alert("Отменено пользователем");
} else if (inquiry === ADMIN_PASSWORD) {
  message = alert("Добро пожаловать!");
} else {
  message = alert("Доступ запрещен, неверный пароль!");
}
