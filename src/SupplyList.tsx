import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIceCream, faPlusCircle, faTimes, faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from './SupplyList.module.css';

interface Supply {
  name: string;
  description: string;
  weight: number;
}

interface RecommendationItem {
  text: string;
}

const SupplyList: React.FC = () => {
  const supplies: Supply[] = [
    { name: 'Apples', description: 'Pink lady apples from New Zealand', weight: 10 },
    { name: 'Chocolates', description: 'Lindt Chocolate from Swizterland', weight: 15 },
    { name: 'Ice Cream', description: 'Gelato Ice Cream from Italy', weight: 20 },
  ];

  const [recommendations, setRecommendations] = useState<RecommendationItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGenerateSupplyListRecommendation = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3003/generate-supply-list-recommendation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ supplies })
      });

      if (response.ok) {
        const data = await response.json();
        setRecommendations(data);
      } else {
        console.error('Error generating supply list recommendation');
      }
    } catch (error) {
      console.error('Error generating supply list recommendation:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="section">
      <div className="container">
        <br></br>
        <h1 className="title">
          <FontAwesomeIcon icon={faPlusCircle} /> Supply List
        </h1>
        <div className="card">
          <div className="card-content">
            <Link to="/supplies" className="button is-primary">
              <FontAwesomeIcon icon={faPlusCircle} /> &nbsp;&nbsp; Add Supply
            </Link>
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Weight</th>
                </tr>
              </thead>
              <tbody>
                {supplies.map((supply, index) => (
                  <tr key={index}>
                    <td>{supply.name}</td>
                    <td>{supply.description}</td>
                    <td>{supply.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="control">
              <button
                className="button is-primary"
                type="button"
                onClick={handleGenerateSupplyListRecommendation}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <FontAwesomeIcon icon={faSpinner} spin /> &nbsp;&nbsp; Loading...
                  </>
                ) : (
                  'Generate Supply List Recommendation'
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
        <Link to="/vision-ai" className="button is-primary">
          <FontAwesomeIcon icon={faIceCream} /> &nbsp;&nbsp; View Refrigerator
        </Link>
      </div>
      <div><br></br></div>
      <div>
        <p>
          <Link to="/max" className="button is-link is-light">
            <FontAwesomeIcon icon={faTimes} /> &nbsp;&nbsp; Back to Max
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SupplyList;
