import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

interface NavProps {
  connectWallet: () => Promise<void>;
  walletAddress: string | null;
}

const Nav: React.FC<NavProps> = ({ connectWallet, walletAddress }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation" style={{ backgroundColor: '#fff', position: 'sticky', top: 0, zIndex: 1000 }}>
      <div className="navbar-brand">
        <a href="/" className="navbar-item" style={{ marginLeft: '1cm' }}>
          <img src="/logo512.png" alt="Logo" style={{ height: '40px', marginRight: '0.5rem' }} />
        </a>
        <div className="navbar-burger" onClick={toggleDropdown} style={{ marginRight: '1cm', marginTop: 'auto', marginBottom: 'auto' }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`navbar-menu ${dropdownVisible ? 'is-active' : ''}`}>
        <div className="navbar-end">
          {walletAddress ? (
            <div className="navbar-item">
              <span>{walletAddress}</span>
            </div>
          ) : (
            <div className="navbar-item">
              <button className="button is-primary" onClick={connectWallet}>
                <FontAwesomeIcon icon={faWallet} />
                <span style={{ marginLeft: '0.5rem' }}>Connect MetaMask Wallet</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
