import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const dummyData = [
  { date: '2023-06-01', waste: 100 },
  { date: '2023-06-02', waste: 150 },
  { date: '2023-06-03', waste: 120 },
  { date: '2023-06-04', waste: 180 },
  { date: '2023-06-05', waste: 200 },
];

const WasteHistory: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <br></br>
        <h1 className="title">
          <FontAwesomeIcon icon={faTrash} /> Waste History
        </h1>
        <div className="card">
          <div className="card-content">
            <div className="columns">
              <div className="column">
                <div className="table-container">
                  <table className="table is-striped is-fullwidth">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Waste (kg)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dummyData.map((entry, index) => (
                        <tr key={index}>
                          <td>{entry.date}</td>
                          <td>{entry.waste}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="column">
                <div className="chart-container">
                  <LineChart width={600} height={300} data={dummyData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="waste" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div><br></br></div>
        <Link to="/maisy" className="button is-link is-light">
          <FontAwesomeIcon icon={faTimes} /> &nbsp;&nbsp; Back to Maisy
        </Link>
      </div>
    </section>
  );
};

export default WasteHistory;
