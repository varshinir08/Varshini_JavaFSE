import React from 'react';
import ListofPlayers from './components/ListOfPlayers';
import IndianPlayers from './components/IndianPlayers';

const App = () => {
  const flag = false;  

  return (
    <div style={{ padding: '20px' }}>
      <h1>Cricket App</h1>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
};

export default App;
