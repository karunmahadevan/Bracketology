import React, { useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {
  const [numPlayers, setNumPlayers] = useState(2);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bracketology</h1>
        <p>Enter the amount of players:</p>
        <TextField
          type="number"
          inputProps={{ min: 2, max: 64 }}
          variant="outlined"
          value={numPlayers}
          onChange={(e) => setNumPlayers(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => console.log(`Selected ${numPlayers} players`)}
          style={{ marginTop: '20px' }}
        >
          Start Tournament
        </Button>
      </header>
    </div>
  );
}

export default App;