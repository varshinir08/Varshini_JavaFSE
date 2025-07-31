import React from 'react';
import './App.css';

function App() {
  const heading = <h1>Office Space Rental Portal</h1>;

 const imageUrl = "https://png.pngtree.com/background/20230604/original/pngtree-modern-corporate-business-office-background-wallpaper-picture-image_2873050.jpg";

  const office = {
    name: 'Workspace Galaxy',
    rent: 45000,
    address: 'Bangalore, India'
  };

  const officeList = [
    { name: 'Sky Tower', rent: 75000, address: 'Mumbai, India' },
    { name: 'Tech Hive', rent: 58000, address: 'Hyderabad, India' },
    { name: 'Innovate Plaza', rent: 63000, address: 'Pune, India' },
    { name: 'CodeNest', rent: 40000, address: 'Chennai, India' }
  ];

  const getRentStyle = (rent) => ({
    color: rent > 60000 ? 'green' : 'red',
    fontWeight: 'bold'
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {heading}
      <img src={imageUrl} alt="Office Space" width="600" height="300" style={{ borderRadius: '10px' }} />

      <h2>Featured Office</h2>
      <p><strong>Name:</strong> {office.name}</p>
      <p><strong>Address:</strong> {office.address}</p>
      <p style={getRentStyle(office.rent)}><strong>Rent:</strong> ₹{office.rent}</p>

      <h2>Other Office Spaces</h2>
      <ul>
        {officeList.map((item, index) => (
          <li key={index} style={{ marginBottom: '15px' }}>
            <strong>{item.name}</strong><br />
            {item.address}<br />
            <span style={getRentStyle(item.rent)}>₹{item.rent}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
