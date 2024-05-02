import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlusCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

interface Waste {
  name: string;
  description: string;
  inputWeight: number;
  outputWeight: number;
  calculatedTokens: number;
}

const WasteList: React.FC = () => {
  const wastes: Waste[] = [
    {
      name: 'Waste 1',
      description: 'This is a sample waste',
      inputWeight: 10,
      outputWeight: 5,
      calculatedTokens: 20,
    },
    {
      name: 'Waste 2',
      description: 'Another sample waste',
      inputWeight: 15,
      outputWeight: 8,
      calculatedTokens: 25,
    },
    {
      name: 'Waste 3',
      description: 'Yet another sample waste',
      inputWeight: 20,
      outputWeight: 12,
      calculatedTokens: 30,
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <br></br>
        <h1 className="title">
          <FontAwesomeIcon icon={faTrash} /> Waste List
        </h1>
        <div className="card">
          <div className="card-content">
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Input Weight</th>
                  <th>Output Weight</th>
                  <th>Calculated Tokens</th>
                </tr>
              </thead>
              <tbody>
                {wastes.map((waste, index) => (
                  <tr key={index}>
                    <td>{waste.name}</td>
                    <td>{waste.description}</td>
                    <td>{waste.inputWeight}</td>
                    <td>{waste.outputWeight}</td>
                    <td>{waste.calculatedTokens}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div><br></br></div>
        <Link to="/waste" className="button is-primary">
          <FontAwesomeIcon icon={faPlusCircle} /> &nbsp;&nbsp; Add Waste
        </Link>
      </div>
      <div><br></br></div>
        <Link to="/maisy" className="button is-link is-light">
          <FontAwesomeIcon icon={faTimes} /> &nbsp;&nbsp; Back to Maisy
        </Link>
    </section>
  );
};

export default WasteList;