import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ContactForm from './components/Contacts/Contacts';
import TemplateList from './components/Templates/Templates';
import CampaignList from './components/Campaigns/Campaigns';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import Navbar from './components/Navbar/Navbar';
import Inicio from './components/Inicio/Inicio';
import CreateTemplate from './components/Templates/CreateTemplate/CreateTemplate';

const App = () => {
  const navbarVisibleRoutes = ["/inicio", "/contacts", "/campaigns", "/templates"];

  return (
    <Router>
      {navbarVisibleRoutes.includes(window.location.pathname) && <Navbar />}
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/contacts" element={<ContactForm />} />
        <Route path="/templates" element={<TemplateList />} />
        <Route path="/campaigns" element={<CampaignList />} />
        <Route path="/createTemplate" element={<CreateTemplate />} />
      </Routes>
    </Router>
  );
};

export default App;
