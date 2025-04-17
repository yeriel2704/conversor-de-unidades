document.addEventListener('DOMContentLoaded', () => {
    // Elementos del DOM
    const amountInput = document.getElementById('amount');
    const fromCurrency = document.getElementById('from-currency');
    const toCurrency = document.getElementById('to-currency');
    const swapBtn = document.getElementById('swap-btn');
    const convertBtn = document.getElementById('convert-btn');
    const convertedAmount = document.getElementById('converted-amount');
    const exchangeRate = document.getElementById('exchange-rate');

    // Función para obtener las tasas de cambio
    async function getExchangeRate(from, to) {
        try {
            const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
            const data = await response.json();
            return data.rates[to];
        } catch (error) {
            console.error('Error al obtener las tasas de cambio:', error);
            return null;
        }
    }

    // Función para realizar la conversión
    async function convertCurrency() {
        const amount = parseFloat(amountInput.value);
        const from = fromCurrency.value;
        const to = toCurrency.value;

        if (isNaN(amount) || amount <= 0) {
            alert('Por favor, ingrese una cantidad válida');
            return;
        }

        const rate = await getExchangeRate(from, to);
        if (rate) {
            const result = (amount * rate).toFixed(2);
            convertedAmount.textContent = result;
            exchangeRate.textContent = rate.toFixed(4);
        } else {
            alert('Error al obtener las tasas de cambio. Por favor, intente nuevamente.');
        }
    }

    // Función para intercambiar las monedas
    function swapCurrencies() {
        const temp = fromCurrency.value;
        fromCurrency.value = toCurrency.value;
        toCurrency.value = temp;
        convertCurrency();
    }

    // Event Listeners
    convertBtn.addEventListener('click', convertCurrency);
    swapBtn.addEventListener('click', swapCurrencies);

    // Convertir automáticamente cuando cambia la cantidad
    amountInput.addEventListener('input', convertCurrency);

    // Convertir automáticamente cuando cambian las monedas
    fromCurrency.addEventListener('change', convertCurrency);
    toCurrency.addEventListener('change', convertCurrency);
}); 