import React, { useState } from 'react';

function App() {
  const [hage, setHage] = useState('');
  const [wage, setWage] = useState('');
  const [result, setResult] = useState('Enter age');

  const handleSubmit = (event) => {
    event.preventDefault();
    let groomAge = parseInt(hage);
    let brideAge = parseInt(wage);

    if (groomAge >= 21 && brideAge >= 18) {
      setResult("Eligible for marriage");
    } else {
      setResult("Not eligible for marriage");
    }
  }

  return (
    <div>

      <h1>Marriage Validator</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Husband's age"
          value={hage}
          onChange={(e) => setHage(e.target.value)}
        />
        <input
          type="text"
          placeholder="Wife's age"
          value={wage}
          onChange={(e) => setWage(e.target.value)}
        />
        <button type="submit">
          Check
        </button>
        <p>{result}</p>
      </form>

    </div>
  );
}

export default App;
