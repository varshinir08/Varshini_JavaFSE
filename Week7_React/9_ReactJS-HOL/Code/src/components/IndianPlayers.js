import React from 'react';

const IndianPlayers = () => {
  const oddTeam = ['Rohit', 'Dhoni', 'Jadeja', 'Shami', 'Pant'];
  const evenTeam = ['Kohli', 'Hardik', 'Gill', 'Bumrah', 'Surya', 'Ashwin'];

  const [firstOdd, ...restOdd] = oddTeam;
  const [firstEven, ...restEven] = evenTeam;

  const T20Players = ['Rohit', 'Kohli', 'Gill'];
  const RanjiPlayers = ['Rahane', 'Pujara', 'Iyer'];

  const allPlayers = [...T20Players, ...RanjiPlayers];

  return (
    <div>
      <h2>Indian Players</h2>
      <h4>Odd Team: {firstOdd}, {restOdd.join(', ')}</h4>
      <h4>Even Team: {firstEven}, {restEven.join(', ')}</h4>

      <h3>Merged Players (T20 + Ranji):</h3>
      <ul>
        {allPlayers.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
