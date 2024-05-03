import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faChartPie, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';

const dummyData = [
  { month: 'Jan', tokens: 1000 },
  { month: 'Feb', tokens: 800 },
  { month: 'Mar', tokens: 1200 },
  { month: 'Apr', tokens: 900 },
  { month: 'May', tokens: 1500 },
  { month: 'Jun', tokens: 1300 },
];

const pieData = [
  { name: 'Issued', value: 6500 },
  { name: 'Redeemed', value: 2000 },
  { name: 'Remaining', value: 1500 },
];

const COLORS = ['#00d1b2', '#ffdd57', '#ff3860'];

const GreenTokenAnalytics: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <br></br>
        <h1 className="title has-text-centered">
          <FontAwesomeIcon icon={faChartBar} className="mr-2" /> Green Token Analytics
        </h1>
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-content">
                <h2 className="title is-4">Token Issuance by Month</h2>
                <BarChart width={600} height={300} data={dummyData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="tokens" fill="#00d1b2" />
                </BarChart>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <h2 className="title is-4">Token Distribution</h2>
                <PieChart width={600} height={300}>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
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
        <div className="has-text-centered mt-4">
          <Link to="/marcel" className="button is-link is-light">
            <FontAwesomeIcon icon={faTimes} className="mr-2" /> Back to Marcel
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GreenTokenAnalytics;