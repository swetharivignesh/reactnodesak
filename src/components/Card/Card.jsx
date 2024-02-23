// Card.jsx

import React from 'react';

const Card = ({ title, subtitle, buttonText, onClick }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <button onClick={onClick}>{buttonText}</button>
    </div>
  );
};

export default Card;
