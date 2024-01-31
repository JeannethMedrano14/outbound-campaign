import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactForm from './components/Contacts/Contacts';
import TemplateList from './components/Templates/Templates';
import CampaignList from './components/Campaigns/Campaigns';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/templates" element={<TemplateList />} />
          <Route path="/campaigns" element={<CampaignList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;