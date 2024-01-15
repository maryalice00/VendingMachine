
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; 

const Snack2 = () => {
  return (
    <div className="snack-container">
      <h2>Snack 2</h2>
      <p>This is Snack 2. Enjoy!</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
};

export default Snack2;
