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
import MaxRecommendations from './MaxRecommendations';
import MarcelRecommendations from './MarcelRecommendations';
import MaisyRecommendations from './MaisylRecommendations';
import SupplyList from './SupplyList';
import 'bulma/css/bulma.min.css';
import WasteList from './WasteList';
import GreenTokenDash from './GreenTokenDash';
import GreenTokenAnalytics from './GreenTokenAnalytics';

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
          <Route path="/supply-list" element={<SupplyList />} />
          <Route path="/waste" element={<Waste />} />
          <Route path="/waste-history" element={<WasteHistory />} />
          <Route path="/waste-list" element={<WasteList />} />
          <Route path="/supply-history" element={<SupplyHistory />} />
          <Route path="/max-recommendations" element={<MaxRecommendations />} />
          <Route path="/maisy-recommendations" element={<MaisyRecommendations />} />
          <Route path="/marcel-recommendations" element={<MarcelRecommendations />} />
          <Route path="/green-tokens" element={<GreenTokenDash />} />
          <Route path="/green-token-analytics" element={<GreenTokenAnalytics />} />
          {/* Add more routes for other components */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;