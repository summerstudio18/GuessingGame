import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import gameImage from './gameImage.jpg';
import './GuessingGame.css'; 

function GuessingGame({ setGamesWon, setTotalGuesses, setTotalGamesPlayed, maxGuesses }) {
    const [randomValue, setRandomValue] = useState(generateRandomValue());
    const [count, setCount] = useState(0);
    const [won, setWon] = useState(false);
    const [hint, setHint] = useState('');
    const [guess, setGuess] = useState('');
    const history = useHistory();

    function generateRandomValue() {
        return Math.floor(Math.random() * 100) + 1;
    }

    function handleGuess() {
        const val = parseInt(guess);
        if (isNaN(val) || val < 1 || val > 100) {
            setHint("Please enter a valid number between 1 and 100!");
            return;
        }

        if (val === randomValue) {
            setHint(`Congratulations, you won in ${count + 1} attempts! Please hit Restart below to play again.`);
            setGamesWon(prev => prev + 1);
            setWon(true);
        } else if (Math.abs(randomValue - val) > 10) {
            setHint(val < randomValue ? "Your guess is too low!" : "Your guess is too high!");
        } else {
            setHint(val < randomValue ? "Your guess is slightly low!" : "Your guess is slightly high!");
        }

        setCount(prev => prev + 1);
        setTotalGuesses(prev => prev + 1);

        if (!won && count >= 4) { 
            setHint(`You lost, the answer was ${randomValue}. Please hit Restart below to play again.`);
        }
    }

    function handleRestart() {
        setRandomValue(generateRandomValue());
        setCount(0);
        setWon(false);
        setHint('');
        setGuess('');
        setTotalGamesPlayed(prev => prev + 1);
    }

    const handleSettingsClick = () => {
        history.push('/settings');
    };

    const handleStatsClick = () => {
        history.push('/stats');
    };

    return (
        <div className="container">
            <div className="image-container">
                <img src={gameImage} alt="Game Image" />
            </div>
            <div className="input-container">
                <label>Guess the Number</label>
                <input type="number" placeholder='Enter your number' value={guess} onChange={(e) => setGuess(e.target.value)} disabled={won} />
                <button onClick={handleGuess} disabled={won}>Guess</button>
            </div>

            <div className="button-container">
                <button onClick={handleSettingsClick} className='settings-button'>Settings</button>
                <button onClick={handleStatsClick} className='stats-button'>Stats</button>
            </div>
            <div className="stats-container">
                <p>Attempts: {count}</p>
            </div>
            <div className="hint-container">
                <p>{hint}</p>
            </div>
            
            <div className="button-container">
                <button onClick={handleRestart} className="restart-button">Restart</button>
            </div>
        </div>
    );
}

export default GuessingGame;
