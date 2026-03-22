function fahrenheitToCelsius(fahrenheit) 
{
    return (fahrenheit - 32) * 5 / 9;
}

// Calling the function and logging the result
const inputFahrenheit = 68;
const resultCelsius = fahrenheitToCelsius(inputFahrenheit);

console.log(`${inputFahrenheit}°F is equal to ${resultCelsius.toFixed(2)}°C`);