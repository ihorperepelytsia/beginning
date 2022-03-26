"use strict";
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  return login.length >= 4 && login.length <= 16 ? true : false;
};

const isLoginUnique = function (allLogins, login) {
  return !allLogins.includes(login);
};

const addLogin = function (allLogins, login) {
  if (isLoginValid(login) === false) {
    return console.log("Ошибка! Логин должен быть от 4 до 16 символов");
  }
  if (isLoginUnique(allLogins, login) === false) {
    return console.log("Такой логин уже используется!");
  }

  allLogins.push(login);
  console.log("Логин успешно добавлен!");
};

addLogin(logins, "Ajax"); // 'Логин успешно добавлен!'
addLogin(logins, "robotGoogles"); // 'Такой логин уже используется!'
addLogin(logins, "Zod"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, "jqueryisextremelyfast"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(logins);
