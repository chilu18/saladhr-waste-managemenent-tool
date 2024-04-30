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
                  <FontAwesomeIcon icon={faLeaf} /> Carbon Credits
                </p>
                <p className="subtitle">Manage and track your carbon credits and offsetting.</p>
                <Link to="/carbon-credits" className="button is-primary">
                  Go <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">
                  <FontAwesomeIcon icon={faHistory} /> Carbon History
                </p>
                <p className="subtitle">View and analyze your carbon credit history.</p>
                <Link to="/carbon-credit-history" className="button is-primary">
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
                <p className="subtitle">Get personalized recommendations for offsetting carbon emissions.</p>
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
