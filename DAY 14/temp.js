function fahrenheitToCelsius(fahrenheit) 
{
  const celsius = (fahrenheit - 32) * 5 / 9;
  return celsius;
}
const fahrenheit=68;
fahrenheit(68)
const result = fahrenheitToCelsius(fahrenheit);
console.log(`The temperature of ${fahrenheit}°F is equal to ${result}°C.`);