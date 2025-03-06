function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;
    let resultsBox = document.getElementById("results");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Ошибка! Введите корректные числа.");
        return;
    }

    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Ошибка: Деление на ноль!");
                return;
            }
            result = num1 / num2;
            result = result.toFixed(2);
            break;
    }

    let previousResults = resultsBox.getElementsByClassName("result-item");
    for (let i = 0; i < previousResults.length; i++) {
        previousResults[i].classList.add("old-result");
    }

    let newResult = document.createElement("div");
    newResult.classList.add("result-item");
    newResult.innerHTML = `<b>${num1} ${operator} ${num2} = ${result}</b>`;

    resultsBox.append(newResult);

    if (resultsBox.children.length > 5) {
        resultsBox.removeChild(resultsBox.firstChild);
    }
}
