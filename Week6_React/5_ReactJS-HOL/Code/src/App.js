import React from 'react';
import CohortDetails from './Components/CohortDetails';

function App() {
  return (
    <div className="App">
      <h1>My Academy Dashboard</h1>
      <CohortDetails
        cohortName="React Beginners Batch"
        status="ongoing"
        startDate="01-Aug-2025"
        endDate="30-Sep-2025"
      />
      <CohortDetails
        cohortName="Full Stack Cohort"
        status="completed"
        startDate="01-May-2025"
        endDate="30-Jun-2025"
      />
    </div>
  );
}

export default App;
