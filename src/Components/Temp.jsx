import React, { useState } from 'react';

function Temp() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const celsiusValue = e.target.value;
    setCelsius(celsiusValue);
    setFahrenheit(celsiusToFahrenheit(celsiusValue));
  };

  const handleFahrenheitChange = (e) => {
    const fahrenheitValue = e.target.value;
    setFahrenheit(fahrenheitValue);
    setCelsius(fahrenheitToCelsius(fahrenheitValue));
  };

  const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32;
  };

  const fahrenheitToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5/9;
  };

  return (
    <div>
      <h2>Temperature Converter</h2>
      <div>
        <label>Celsius:</label>
        <input type="number" value={celsius} onChange={handleCelsiusChange} />
      </div>
      <div>
        <label>Fahrenheit:</label>
        <input type="number" value={fahrenheit} onChange={handleFahrenheitChange} />
      </div>
    </div>
  );
}

export default Temp;
