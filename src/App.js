import React from 'react';
import HomePage from './HomePage';
import './App.css'; // Import the animated space background CSS

const App = () => {
  return (
    <div className="background-container">
      <div className="stars"></div> {/* Stars Layer */}
      <div className="glow"></div> {/* Glow Effect Layer */}

      <div className="container"> {/* Content Layer */}
        <HomePage />
      </div>
    </div>
  );
};

export default App;
