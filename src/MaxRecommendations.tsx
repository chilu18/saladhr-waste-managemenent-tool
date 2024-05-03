import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faTimes } from '@fortawesome/free-solid-svg-icons';

const MaxRecommendations: React.FC = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  const handleInputChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput1(event.target.value);
  };

  const handleInputChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput2(event.target.value);
  };

  const handleInputChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput3(event.target.value);
  };

  const handleGenerateRecommendation = () => {
    // Logic to generate recommendation based on inputs
  };

  return (
    <section className="section">
      <div className="container">
        <br></br>
        <h1 className="title">
          <FontAwesomeIcon icon={faLightbulb} /> Recommendations
        </h1>
        <div className="card">
          <div className="card-content">
            <p className="subtitle">
              Get personalized recommendations for optimizing your supplies.
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
                >
                  Generate Recommendation
                </button>
              </div>
            </form>
          </div>
        </div>
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

export default MaxRecommendations;
