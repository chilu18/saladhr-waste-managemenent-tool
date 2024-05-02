import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faHistory, faLightbulb, faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';

const Marcel: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <br></br>
        <h1 className="title">Marcel</h1>
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">
                  <FontAwesomeIcon icon={faLeaf} /> Green Tokens
                </p>
                <p className="subtitle">Manage and track your sustianbility plan and green tokens.</p>
                <Link to="/green-tokens" className="button is-primary">
                  Go <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">
                  <FontAwesomeIcon icon={faHistory} /> Token Analytics
                </p>
                <p className="subtitle">View and analyze your Green Tokens.</p>
                <Link to="/green-token-analytics" className="button is-primary">
                  Go <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">
                  <FontAwesomeIcon icon={faLightbulb} /> Recommendations
                </p>
                <p className="subtitle">Get personalized recommendations for hitting your sustianbility targets.</p>
                <Link to="/marcel-recommendations" className="button is-primary">
                  Go <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div><br></br></div>
      <Link to="/" className="button is-link is-light">
          <FontAwesomeIcon icon={faTimes} /> &nbsp;&nbsp;Back to Dashboard
        </Link>
    </section>
  );
};

export default Marcel;
