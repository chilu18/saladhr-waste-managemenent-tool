import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faHistory, faLightbulb, faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';

const Maisy: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <Link to="/" className="button is-link is-light">
          <FontAwesomeIcon icon={faTimes} /> &nbsp;&nbsp; Back to Dashboard
        </Link>
        <h1 className="title">Maisy</h1>
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">
                  <FontAwesomeIcon icon={faTrash} /> Waste
                </p>
                <p className="subtitle">Track and manage your waste generation.</p>
                <Link to="/waste" className="button is-primary">
                  Go <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">
                  <FontAwesomeIcon icon={faHistory} /> Waste History
                </p>
                <p className="subtitle">View and analyze your waste generation history.</p>
                <Link to="/waste-history" className="button is-primary">
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
                <p className="subtitle">Get personalized recommendations for reducing waste.</p>
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

export default Maisy;
