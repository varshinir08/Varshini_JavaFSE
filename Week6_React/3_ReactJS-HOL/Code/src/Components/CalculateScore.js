import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore() {
  const name = "Varshini";
  const school = "The Vikasa School";
  const total = 520;
  const goal = 600;
  const average = (total / goal) * 100;

  return (
    <div className="score-container">
      <h2>Student Score Report</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>School:</strong> {school}</p>
      <p><strong>Total Score:</strong> {total}</p>
      <p><strong>Goal:</strong> {goal}</p>
      <p><strong>Average Score:</strong> {average.toFixed(2)}%</p>
    </div>
  );
}

export default CalculateScore;
