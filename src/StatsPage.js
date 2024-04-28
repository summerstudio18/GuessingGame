import React from 'react';
import './GuessingGame.css'; 

function StatsPage({ gamesWon, totalGuesses, totalGamesPlayed, onClearStats }) {
  // Calculate average number of guesses
  const averageGuesses = totalGamesPlayed > 0 ? totalGuesses / totalGamesPlayed : 0;

  return (
    <div>
      <h1 className="stats-title">Game Statistics</h1>
      <div className="stats-container">
        <p className="stats-item">Number of games won: {gamesWon}</p>
        <p className="stats-item">Total number of guesses: {totalGuesses}</p>
        <p className="stats-item">Total number of games played: {totalGamesPlayed}</p>
        <p className="stats-item">Average number of guesses: {averageGuesses.toFixed(2)}</p>
      </div>
      <button className="clear-button" onClick={onClearStats}>Clear Stats</button>
    </div>
  );
}

export default StatsPage;
