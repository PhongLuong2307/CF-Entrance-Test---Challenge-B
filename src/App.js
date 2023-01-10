import React, { useState } from 'react';
import './App.css';

function App() {
  const [errorText, setErrorText] = useState('');
  const [result, setResult] = useState('where magic happens');
  const [decimalNumber, setDecimalNumber] = useState('');

  const handleChangeNumber = (event) => {
    let currentNumber = Number(event.target.value);
    setDecimalNumber(currentNumber);

    let isInterger = Number.isInteger(currentNumber);

    if (isInterger === false || currentNumber > 3000) {
      setErrorText('Your number must be integer and lower than 3000.');
    } else if (isInterger === true && currentNumber <= 3000) {
      let decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
      let romanValue = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

      let romanNumber = '';

      for (let i = 0; i < decimalValue.length; i++) {
        while (decimalValue[i] <= currentNumber) {
          currentNumber -= decimalValue[i];
          romanNumber += romanValue[i];
        }
      }

      setResult(romanNumber);
      setErrorText('');
    }
  }

  return (
    <React.Fragment>
      <div className='site-container'>
        <div className='converter'>
          <h1 className='title'>
            Decimal to ROMAN
          </h1>
          <p className='converter-slogan'>
            Enter your decimal number and magic will happens
          </p>

          <div className='form-container'>
            <div className='form-group input-container'>
              <input
                onChange={handleChangeNumber}
                placeholder='Enter your decimal number'
              />
              <div className='error-text'>{errorText}</div>
            </div>

            <div className='form-group'>
              <h1 className='title'>{result}</h1>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
