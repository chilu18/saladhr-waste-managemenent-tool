import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTimes, faSpinner } from '@fortawesome/free-solid-svg-icons';
import applePng from './apple.png';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import styles from './VisionAI.module.css';

const appleSupplyData = [
  { date: '2023-05-01', supply: 80 },
  { date: '2023-05-02', supply: 75 },
  { date: '2023-05-03', supply: 92 },
  { date: '2023-05-04', supply: 70 },
  { date: '2023-05-05', supply: 85 },
];

interface RecommendationItem {
  text: string;
}

const VisionAI: React.FC = () => {
  const [recommendations, setRecommendations] = useState<RecommendationItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGenerateRecommendation = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3003/generate-vision-ai-recommendation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ appleCount: 92 })
      });

      if (response.ok) {
        const data = await response.json();
        setRecommendations(data);
      } else {
        console.error('Error generating vision AI recommendation');
      }
    } catch (error) {
      console.error('Error generating vision AI recommendation:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="section">
      <div className="container">
        <br></br>
        <h1 className="title">
          <FontAwesomeIcon icon={faEye} /> Fridge Vision AI
        </h1>
        <div className="card">
          <div className="card-content">
            <div className="columns">
              <div className="column">
                <img src={applePng} alt="Apple" className="image" />
                <p className="mt-4">
                  You currently have <strong>92</strong> apples in stock.
                </p>
              </div>
              <div className="column">
                <div className="chart-container">
                  <LineChart width={400} height={300} data={appleSupplyData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="supply" stroke="#00d1b2" activeDot={{ r: 8 }} />
                  </LineChart>
                </div>
              </div>
            </div>
            <div className="control">
              <button
                className="button is-primary"
                type="button"
                onClick={handleGenerateRecommendation}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <FontAwesomeIcon icon={faSpinner} spin /> &nbsp;&nbsp; Loading...
                  </>
                ) : (
                  'Generate Recommendation'
                )}
              </button>
            </div>
            {recommendations.length > 0 && (
              <div>
                <h2 className="title">Recommendations</h2>
                <ul className={styles.recommendations}>
                  {recommendations.map((recommendation, index) => (
                    <li key={index} className={styles.recommendationItem}>
                      {recommendation.text.replace(/##\s?/g, '').replace(/\*\*/g, '')}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div><br></br></div>
        <Link to="/supply-list" className="button is-link is-light">
          <FontAwesomeIcon icon={faTimes} /> &nbsp;&nbsp; Back to Supply List
        </Link>
      </div>
    </section>
  );
};

export default VisionAI;