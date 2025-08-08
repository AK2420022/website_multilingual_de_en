import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import LandingPage from "./components/LandingPage";
import PrivacyPolicy from './components/PrivacyPolicy';
import SecurityPolicy from './components/SecurityPolicy';

function App() {
  const { ready } = useTranslation();

  if (!ready) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-secondary-900 font-medium">Loading...</span>
        </div>
      </div>
    );
  }

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