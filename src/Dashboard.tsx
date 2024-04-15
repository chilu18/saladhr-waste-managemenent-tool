import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faRecycle, faTrophy, faArrowRight, faTruckField } from '@fortawesome/free-solid-svg-icons';

const Dashboard: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Welcome!</h1>
        <h2 className="subtitle">Explore and connect with our sustainability and waste management tools</h2>
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">
                  <FontAwesomeIcon icon={faTruckField} /> Max
                </p>
                <p className="subtitle">Your supplies, measure and track your supplies.</p>
                <Link to="/max" className="button is-primary">
                  Go <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">
                  <FontAwesomeIcon icon={faRecycle} /> Maisy
                </p>
                <p className="subtitle">Your waste hub, measure and track your waste</p>
                <Link to="/maisy" className="button is-primary">
                  Go <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">
                  <FontAwesomeIcon icon={faTrophy} /> Marcel
                </p>
                <p className="subtitle">Your carbon credits, track your carbon credits like never before.</p>
                <Link to="/marcel" className="button is-primary">
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

export default Dashboard;
