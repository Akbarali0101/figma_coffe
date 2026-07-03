import React from 'react';
import './Beat.css';

const Beat = () => {
  return (
    <div className="beat-container">
  
      <div className="summary-wrapper">
        <div className="summary-container">
          <p className="summary-label">ORDER SUMMARY</p>
          <p className="summary-text">
            "I drink my coffee as <span className="highlight">Filter</span>, 
            with a <span className="highlight">Decaf</span> type of bean. 
            <span className="highlight"> 250g</span> ground ala 
            <span className="highlight"> Cafetiére</span>, 
            sent to me <span className="highlight"> Every Week</span>."
          </p>
        </div>
        <div className="button-container">
          <button className="create-plan-btn">Create my plan!</button>
        </div>
      </div>
    </div>
  );
};

export default Beat;