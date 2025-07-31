import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Rohit', score: 90 },
    { name: 'Kohli', score: 85 },
    { name: 'Dhoni', score: 60 },
    { name: 'Hardik', score: 45 },
    { name: 'Jadeja', score: 75 },
    { name: 'Gill', score: 40 },
    { name: 'Surya', score: 88 },
    { name: 'Bumrah', score: 55 },
    { name: 'Shami', score: 30 },
    { name: 'Pant', score: 95 },
    { name: 'Ashwin', score: 80 },
  ];

  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((p, i) => (
          <li key={i}>{p.name} - {p.score}</li>
        ))}
      </ul>

      <h3>Players with score &lt; 70</h3>
      <ul>
        {lowScorers.map((p, i) => (
          <li key={i}>{p.name} - {p.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
