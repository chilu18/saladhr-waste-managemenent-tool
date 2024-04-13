import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faHistory, faLightbulb, faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';

const Max: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <Link to="/" className="button is-link is-light">
          <FontAwesomeIcon icon={faTimes} /> &nbsp;&nbsp;Back to Dashboard
        </Link>
        <h1 className="title">Max</h1>
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">
                  <FontAwesomeIcon icon={faBoxOpen} /> Supplies
                </p>
                <p className="subtitle">Manage and track your supplies inventory.</p>
                <Link to="/supplies" className="button is-primary">
                  Go <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">
                  <FontAwesomeIcon icon={faHistory} /> Supply History
                </p>
                <p className="subtitle">View and analyze your supply usage history.</p>
                <Link to="/supply-history" className="button is-primary">
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
                <p className="subtitle">Get personalized recommendations for optimizing your supplies.</p>
                <Link to="/recommendations" className="button is-primary">
                  Go <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Max;
