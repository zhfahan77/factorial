import React, { useState } from 'react';

const Factorial = () => {
  const [ givenNumber, setGivenNumber] = useState(0);
  const [ factorial, setFactorial ] = useState(0);

  const factorialize = (num) => {
    if (num < 0) {
      return -1;
    } else if (num === 0) {
      return 1;
    } else {
      return (num * factorialize(num - 1));
    }
  }

  const handleChange = (e) => {
    if(e) {
      e.preventDefault();
      setGivenNumber(e.target.value);
    }
  }

  const handleSubmit = (e) => {
    if(e) {
      e.preventDefault();
      const number = givenNumber;
      const factorialValue = factorialize(number);
      setFactorial(factorialValue);
    }
  }

  return (
    <div>
      <h1>Factorial Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Enter a number..." value={givenNumber} onChange={handleChange}/>
        <br />
        <button>Calculate Factorial</button>
      </form>
      <h2>Factorial: { factorial }</h2>
    </div>
  );
}

export default Factorial