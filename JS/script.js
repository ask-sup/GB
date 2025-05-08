function Calc() {
    let firstDigit = prompt("Введите первое число для сложения");
    let secondDigit = prompt("Введите второе число для сложения");
    firstDigit = parseInt(firstDigit, 10);
    secondDigit = parseInt(secondDigit, 10);
    let calcResult = firstDigit + secondDigit;
    alert(`Результат сложения: ${calcResult}`);
}

Calc();