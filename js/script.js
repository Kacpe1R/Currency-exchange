let exchangeRateElement = document.querySelector(".js-exchangeRateChoise");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let exchangeRate = exchangeRateElement.value;
    let result;
    let USD = 4.22;
    let EUR = 4.53;
    let CHF = 4.67;
    let GBP = 5.21;
    let CNY = 0.60;

    switch (exchangeRate) {
        case "USD":
            result = amount / USD;
            break;
        case "EUR":
            result = amount / EUR;
            break;
        case "CHF":
            result = amount / CHF;
            break;
        case "GBP":
            result = amount / GBP;
            break;
        case "CNY":
            result = amount / CNY;
            break;
    }

    resultElement.innerText = `${result.toFixed(2)} ${exchangeRate}`;
});