import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './GuessingGame.css'; 

function SettingsPage({ setMaxGuesses, setNumberRange }) {
  const [maxGuessesLocal, setMaxGuessesLocal] = useState(5);
  const [minNumber, setMinNumber] = useState(1);
  const [maxNumber, setMaxNumber] = useState(100);
  const history = useHistory();

  const handleSave = () => {

    // Update the maximum guesses allowed
    setMaxGuesses(maxGuessesLocal);
    
    // Update the number range to guess
    setNumberRange({ min: minNumber, max: maxNumber });

    // Navigate back to the homepage
    history.push('/');
  };

  return (
    <div>
      <h1 className="settings-title">Settings</h1>
      <div className="settings-container">
        <h2>Number of Guesses Allowed</h2>
        <label>
          Maximum Guesses:
          <input
            type="number"
            value={maxGuessesLocal}
            onChange={(e) => setMaxGuessesLocal(parseInt(e.target.value))}
          />
        </label>
      </div>
      <div className="settings-container">
        <h2>Number Range to Guess</h2>
        <label>
          Minimum Number:
          <input
            type="number"
            value={minNumber}
            onChange={(e) => setMinNumber(parseInt(e.target.value))}
          />
        </label>
        <label>
          Maximum Number:
          <input
            type="number"
            value={maxNumber}
            onChange={(e) => setMaxNumber(parseInt(e.target.value))}
          />
        </label>
      </div>
      <button className="savesettings-button" onClick={handleSave}>Save</button>
    </div>
  );
}

export default SettingsPage;
