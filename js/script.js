{
    const calculateResult = (amount, exchange) => {
        const rateUSD = 4.22;
        const rateEUR = 4.53;
        const rateCHF = 4.67;
        const rateGBP = 5.21;
        const rateCNY = 0.60;

        switch (exchange) {
            case "USD":
                return amount / rateUSD;
            case "EUR":
                return amount / rateEUR;
            case "CHF":
                return amount / rateCHF;
            case "GBP":
                return amount / rateGBP;
            case "CNY":
                return amount / rateCNY;
        }
    };
    const updateResultText = (amount, result, exchange) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${exchange}`;
    };
    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const exchangeElement = document.querySelector(".js-exchangeRateChoise");
        
        const amount = +amountElement.value;
        const exchange = exchangeElement.value;
        
        let result = calculateResult(amount, exchange);

        updateResultText(amount, result, exchange);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}