import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faKeyboard, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';

const Waste: React.FC = () => {
  const [isScaleInput, setIsScaleInput] = useState(true);
  const [scaleWeight, setScaleWeight] = useState<number | null>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [manualWeight, setManualWeight] = useState('');

  const fetchScaleWeight = async () => {
    try {
      // Make an API call to fetch the scale weight
      const response = await fetch('API_ENDPOINT');
      const data = await response.json();
      setScaleWeight(data.weight);
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
  };

  return (
    <div className="container">
        <Link to="/" className="button is-link is-light">
          <FontAwesomeIcon icon={faTimes} /> Back to Dashboard
        </Link>
      <h1 className="title">
      <FontAwesomeIcon icon={faTrash} />Waste</h1>
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
              placeholder="Enter waste name"
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
              placeholder="Enter waste description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
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
                placeholder="Enter waste weight"
                value={manualWeight}
                onChange={(e) => setManualWeight(e.target.value)}
                required
              />
            </div>
          </div>
        )}
        <div className="field">
          <div className="control">
            <button className="button is-primary" type="submit">
              Log Waste
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Waste;
