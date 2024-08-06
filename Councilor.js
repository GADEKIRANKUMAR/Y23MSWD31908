import React from 'react';
import '../App.css';


const Councilor = () => {
  const councilorData = [
    { name: 'Anita pradhan', id: '7123', totalStudents: 50 },
    { name: 'Ramaiah', id: '4353', totalStudents: 60 },
    { name: 'mahesh babu', id: '4668', totalStudents: 70 }
  ];

  return (
    <div className="councilor-container">
      <h2>Councilor Details</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Total Students</th>
          </tr>
        </thead>
        <tbody>
          {councilorData.map((councilor, index) => (
            <tr key={index}>
              <td>{councilor.name}</td>
              <td>{councilor.id}</td>
              <td>{councilor.totalStudents}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Councilor;