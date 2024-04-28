import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GuessingGame from './GuessingGame';
import SettingsPage from './SettingsPage';
import StatsPage from './StatsPage'; 

function GuessApp() {
  const [gamesWon, setGamesWon] = useState(0);
  const [totalGuesses, setTotalGuesses] = useState(0);
  const [totalGamesPlayed, setTotalGamesPlayed] = useState(0);
  const [maxGuesses, setMaxGuesses] = useState(5);
  const [numberRange, setNumberRange] = useState({ min: 1, max: 100 });

const clearStats = () => {
    setGamesWon(0);
    setTotalGuesses(0);
    setTotalGamesPlayed(0);
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <GuessingGame
            setGamesWon={setGamesWon}
            setTotalGuesses={setTotalGuesses}
            setTotalGamesPlayed={setTotalGamesPlayed}
            maxGuesses={maxGuesses} // Pass maxGuesses as prop
          />
        </Route>

        <Route path="/settings">
          <SettingsPage 
                setMaxGuesses={setMaxGuesses}
                maxGuesses={maxGuesses}
                setNumberRange={setNumberRange}
                numberRange={numberRange}
          />
        </Route>

        <Route path="/stats">
          <StatsPage
            gamesWon={gamesWon}
            totalGuesses={totalGuesses}
            totalGamesPlayed={totalGamesPlayed}
            onClearStats={clearStats}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default GuessApp;
