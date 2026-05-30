import { useState } from "react";

import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      };
    });
  }

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <UserInput onChange={handleChange} userInput={userInput} />
      {inputIsValid ? <Results input={userInput} /> : <p className="center">Please enter a duration greater than zero.</p>}
    </>
  );
}

export default App
