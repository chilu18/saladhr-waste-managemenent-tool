import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const MaisyRecommendations: React.FC = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [recommendation, setRecommendation] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleInputChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput1(event.target.value);
  };

  const handleInputChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput2(event.target.value);
  };

  const handleInputChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput3(event.target.value);
  };

  const handleGenerateRecommendation = async () => {
    setIsLoading(true);
    setError('');
    setRecommendation([]);

    try {
      const response = await axios.post('http://localhost:3003/generate-recommendation', {
        input1,
        input2,
        input3,
      });
      console.log('Response from server:', response); // Log the response
      setRecommendation(response.data);
    } catch (error) {
      console.error('Error generating recommendation:', error);
      setError('An error occurred while generating the recommendation.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="section">
      <div className="container">
        <br />
        <h1 className="title">
          <FontAwesomeIcon icon={faLightbulb} /> Recommendations
        </h1>
        <div className="card">
          <div className="card-content">
            <p className="subtitle">
              Get personalized recommendations for optimizing your Waste.
            </p>
            <form>
              <div className="field">
                <label className="label">Priority 1:</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    value={input1}
                    onChange={handleInputChange1}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Priority 2:</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    value={input2}
                    onChange={handleInputChange2}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Priority 3:</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    value={input3}
                    onChange={handleInputChange3}
                  />
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
                      <FontAwesomeIcon icon={faSpinner} spin /> Generating...
                    </>
                  ) : (
                    'Generate Recommendation'
                  )}
                </button>
              </div>
            </form>
            {error && <div className="notification is-danger">{error}</div>}
            {recommendation.length > 0 && (
              <div className="content">
                <h3>Recommendation:</h3>
                {recommendation.map((item, index) => (
                  <p key={index}>{item.text}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div><br></br></div>
        <Link to="/maisy" className="button is-link is-light">
          <FontAwesomeIcon icon={faTimes} /> &nbsp;&nbsp; Back to Maisy
        </Link>
    </section>
  );
};

export default MaisyRecommendations;
