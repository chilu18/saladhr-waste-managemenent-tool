import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faChartPie, faCoins, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const GreenTokenDash: React.FC = () => {
  const tokenData = {
    totalTokens: 10000,
    tokensIssued: 6500,
    tokensRedeemed: 2000,
  };

  const tokenPercentages = {
    issuedPercentage: (tokenData.tokensIssued / tokenData.totalTokens) * 100,
    redeemedPercentage: (tokenData.tokensRedeemed / tokenData.totalTokens) * 100,
  };

  return (
    <section className="section">
      <div className="container">
        <br></br>
        <h1 className="title has-text-centered">
          <FontAwesomeIcon icon={faCoins} className="mr-2" /> Green Token Dashboard
        </h1>
        <div className="columns is-multiline">
          <div className="column is-one-third">
            <div className="card">
              <div className="card-content has-text-centered">
                <h2 className="title is-4">Total Tokens</h2>
                <p className="is-size-1">{tokenData.totalTokens}</p>
              </div>
            </div>
          </div>
          <div className="column is-one-third">
            <div className="card">
              <div className="card-content has-text-centered">
                <h2 className="title is-4">Tokens Issued</h2>
                <p className="is-size-1">{tokenData.tokensIssued}</p>
                <progress
                  className="progress is-success"
                  value={tokenPercentages.issuedPercentage}
                  max="100"
                >{tokenPercentages.issuedPercentage}%</progress>
              </div>
            </div>
          </div>
          <div className="column is-one-third">
            <div className="card">
              <div className="card-content has-text-centered">
                <h2 className="title is-4">Tokens Redeemed</h2>
                <p className="is-size-1">{tokenData.tokensRedeemed}</p>
                <progress
                  className="progress is-danger"
                  value={tokenPercentages.redeemedPercentage}
                  max="100"
                >{tokenPercentages.redeemedPercentage}%</progress>
              </div>
            </div>
          </div>
        </div>
        <div className="has-text-centered mt-4">
          <Link to="/green-token-analytics" className="button is-link">
            <FontAwesomeIcon icon={faChartLine} className="mr-2" /> View Analytics
          </Link>
        </div>
      </div>
      <div><br></br></div>
      <div className="has-text-centered mt-4">
          <Link to="/marcel" className="button is-link is-light">
            <FontAwesomeIcon icon={faTimes} className="mr-2" /> Back to Marcel
          </Link>
        </div>
    </section>
  );
};

export default GreenTokenDash;