
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; 

const Snack3 = () => {
  return (
    <div className="snack-container">
      <h2>Snack 3</h2>
      <p>This is Snack 3. Enjoy!</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
};

export default Snack3;
