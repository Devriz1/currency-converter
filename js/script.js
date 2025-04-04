const exchangeRates = {
    "USD": { "INR": 83.10, "EUR": 0.91, "GBP": 0.78, "USD": 1 },
    "INR": { "USD": 0.012, "EUR": 0.011, "GBP": 0.0094, "INR": 1 },
    "EUR": { "USD": 1.10, "INR": 90.80, "GBP": 0.85, "EUR": 1 },
    "GBP": { "USD": 1.28, "INR": 106.40, "EUR": 1.17, "GBP": 1 }
};

const flags = {
    "USD": "https://flagcdn.com/w40/us.png",
    "EUR": "https://flagcdn.com/w40/eu.png",
    "INR": "https://flagcdn.com/w40/in.png",
    "GBP": "https://flagcdn.com/w40/gb.png"
};

document.getElementById("convert").addEventListener("click", function() {
    let amount = parseFloat(document.getElementById("amount").value);
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;

    if (isNaN(amount) || amount <= 0) {
        document.getElementById("exchangeRate").innerText = "❌ Please enter a valid amount!";
        return;
    }

    let exchangeRate = exchangeRates[fromCurrency][toCurrency];
    let convertedAmount = (amount * exchangeRate).toFixed(2);

    document.getElementById("exchangeRate").innerText = 
        ` 1 ${fromCurrency} = ${exchangeRate} ${toCurrency}
         \n Converted Amount: ${convertedAmount} ${toCurrency}`;
});

document.getElementById("swap").addEventListener("click", function() {
    let fromCurrency = document.getElementById("fromCurrency");
    let toCurrency = document.getElementById("toCurrency");

    // Swap values
    [fromCurrency.value, toCurrency.value] = [toCurrency.value, fromCurrency.value];

    updateFlags();
});

document.getElementById("fromCurrency").addEventListener("change", updateFlags);
document.getElementById("toCurrency").addEventListener("change", updateFlags);

function updateFlags() {
    document.getElementById("fromFlag").src = flags[document.getElementById("fromCurrency").value];
    document.getElementById("toFlag").src = flags[document.getElementById("toCurrency").value];
}

// Initial flag setup
updateFlags();
