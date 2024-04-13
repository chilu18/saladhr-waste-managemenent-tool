import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Dashboard from './Dashboard';
import Max from './Max';
import Maisy from './Maisy';
import Marcel from './Marcel';
import 'bulma/css/bulma.min.css';

const App: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    if (typeof window !== 'undefined' && window.ethereum) {
      try {
        // Request access to MetaMask
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Get the selected wallet address
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error('Failed to connect wallet:', error);
      }
    } else {
      console.error('MetaMask not detected');
    }
  };

  return (
    <Router>
      <div>
        <Nav connectWallet={connectWallet} walletAddress={walletAddress} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/max" element={<Max />} />
          <Route path="/maisy" element={<Maisy />} />
          <Route path="/marcel" element={<Marcel />} />
          {/* Add more routes for other components */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;