import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Dashboard from './Dashboard';
import Max from './Max';
import Maisy from './Maisy';
import Marcel from './Marcel';
import Supplies from './Supplies';
import Waste from './Waste';
import WasteHistory from './WasteHistory';
import SupplyHistory from './SupplyHistory';
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
          <Route path="/supplies" element={<Supplies />} />
          <Route path="/waste" element={<Waste />} />
          <Route path="/waste-history" element={<WasteHistory />} />
          <Route path="/supply-history" element={<SupplyHistory />} />
          {/* Add more routes for other components */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;