function Calc() {
    var firstDigit = prompt("Введите первое число для сложения");
    var secondDigit = prompt("Введите второе число для сложения");
    firstDigit = parseInt(firstDigit, 10);
    secondDigit = parseInt(secondDigit, 10);
    var calcResult = firstDigit + secondDigit;
    alert("Результат сложения: " + calcResult);
};

Calc();