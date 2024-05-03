import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faKeyboard, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { mint_and_send_tokens, calculate_num_tokens } from './mint-and-send-tokens';
import { ethers } from 'ethers';

const Waste: React.FC = () => {
  const [isScaleInput, setIsScaleInput] = useState(true);
  const [scaleWeight, setScaleWeight] = useState<number | null>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [manualWeight, setManualWeight] = useState('');
  const [inputWeight, setInputWeight] = useState('');
  const [calculatedTokens, setCalculatedTokens] = useState(0);
  const [walletAddress, setWalletAddress] = useState('');
  const [transactionComplete, setTransactionComplete] = useState(false); // State for transaction completion

  const fetchScaleWeight = async () => {
    try {
      // Make an API call to fetch the scale weight
      const response = await fetch('API_ENDPOINT');
      const data = await response.json();
      setScaleWeight(data.weight);
      setInputWeight(data.weight.toString());
    } catch (error) {
      console.error('Failed to fetch scale weight:', error);
    }
  };

  const handleToggle = () => {
    setIsScaleInput(!isScaleInput);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform logging logic here
    console.log('Logged waste data:', { name, description, weight: isScaleInput ? scaleWeight : manualWeight });
    // Reset form fields
    setName('');
    setDescription('');
    setManualWeight('');
    setInputWeight('');
  };

  const calculateTokens = () => {
    const inWeight = parseFloat(inputWeight);
    const outWeight = parseFloat(manualWeight);
    const tokens = calculate_num_tokens(inWeight, outWeight);
    setCalculatedTokens(tokens);
    console.log('Tokens calculated successfully');
  };

  const completeTransaction = async () => {
    if (calculatedTokens > 0) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = await new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const walletAddress = await signer.getAddress();
        setWalletAddress(walletAddress);
        await mint_and_send_tokens(calculatedTokens, walletAddress);
        console.log('Tokens sent successfully');
        setTransactionComplete(true); // Set transaction completion state
      } catch (error) {
        console.error('Failed to send tokens:', error);
      }
    }
  };

  return (
    <section className="section">
      <div className="container">
        <br></br>
        <h1 className="title">
          <FontAwesomeIcon icon={faTrash} /> Waste
        </h1>
        {transactionComplete && <div className="notification is-success">Transaction Sent!</div>} {/* Confirmation message */}
        <div className="card">
          <div className="card-content">
            <div className="field">
              <input
                id="switchInputMode"
                type="checkbox"
                className="switch is-rounded"
                checked={isScaleInput}
                onChange={handleToggle}
              />
              <label htmlFor="switchInputMode">
                <FontAwesomeIcon icon={isScaleInput ? faBalanceScale : faKeyboard} className="mr-2" />
                {isScaleInput ? 'Scale Input' : 'Manual Input'}
              </label>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Description</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="field">
                <label className="label">Input Weight</label>
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    placeholder="Enter input weight"
                    value={inputWeight}
                    onChange={(e) => setInputWeight(e.target.value)}
                    required
                  />
                </div>
              </div>
              {isScaleInput ? (
                <div className="field">
                  <label className="label">Scale Weight</label>
                  <div className="control">
                    <input className="input" type="number" value={scaleWeight || ''} readOnly />
                    <button className="button is-primary mt-2" type="button" onClick={fetchScaleWeight}>
                      Fetch Weight
                    </button>
                  </div>
                </div>
              ) : (
                <div className="field">
                  <label className="label">Manual Weight</label>
                  <div className="control">
                    <input
                      className="input"
                      type="number"
                      placeholder="Enter weight"
                      value={manualWeight}
                      onChange={(e) => setManualWeight(e.target.value)}
                      required
                    />
                  </div>
                </div>
              )}
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-primary" type="submit">
                    Log Data
                  </button>
                </div>
                <div className="control">
                  <button className="button is-primary" type="button" onClick={calculateTokens}>
                    Calculate Tokens
                  </button>
                </div>
              </div>
              <div className="field">
                <label className="label">Calculated Tokens</label>
                <div className="control">
                  <input className="input" type="number" value={calculatedTokens} readOnly />
                </div>
              </div>
              {calculatedTokens > 0 && (
                <div className="field">
                  <div className="control">
                    <button className="button is-primary" type="button" onClick={completeTransaction}>
                      Complete Transaction
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
        <div><br></br></div>
        <Link to="/waste-list" className="button is-link is-light">
          <FontAwesomeIcon icon={faTimes} /> &nbsp;&nbsp; Back to Waste List
        </Link>
      </div>
    </section>
  );
};

export default Waste;
