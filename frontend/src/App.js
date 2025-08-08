import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import PrivacyPolicy from './components/PrivacyPolicy';
import SecurityPolicy from './components/SecurityPolicy';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />        
        <Route path="/security" element={<SecurityPolicy />} />                    
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
