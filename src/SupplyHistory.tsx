import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faHistory } from '@fortawesome/free-solid-svg-icons';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const dummyData = [
  { date: '2023-06-01', supply: 500 },
  { date: '2023-06-02', supply: 400 },
  { date: '2023-06-03', supply: 450 },
  { date: '2023-06-04', supply: 350 },
  { date: '2023-06-05', supply: 600 },
];

const SupplyHistory: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <br></br>
        <h1 className="title">
          <FontAwesomeIcon icon={faHistory} /> Supply History
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
                        <th>Supply (units)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dummyData.map((entry, index) => (
                        <tr key={index}>
                          <td>{entry.date}</td>
                          <td>{entry.supply}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="column">
                <div className="chart-container">
                  <BarChart width={600} height={300} data={dummyData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="supply" fill="#8884d8" />
                  </BarChart>
                </div>
              </div>
            </div>
          </div>
          <div className="control">
                <button
                  className="button is-primary"
                  type="button"
                >
                  Generate Recommendation
                </button>
              </div>
        </div>
        <div><br></br></div>
        <Link to="/max" className="button is-link is-light">
          <FontAwesomeIcon icon={faTimes} /> &nbsp;&nbsp; Back to Max
        </Link>
      </div>
    </section>
  );
};

export default SupplyHistory;