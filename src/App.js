import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactForm from './components/Contacts/Contacts';
import TemplateList from './components/Templates/Templates';
import CampaignList from './components/Campaigns/Campaigns';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import Navbar from './components/Navbar/Navbar'

const App = () => {

  const navbarVisibleRoutes = ["/", "/contacts", "/campaigns", "/templates"];

  return (
    <Router>
         {/* Mostrar el Navbar en rutas específicas */}
         {navbarVisibleRoutes.includes(window.location.pathname) && <Navbar />}
 
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contacts" element={<ContactForm />} />
          <Route path="/templates" element={<TemplateList />} />
          <Route path="/campaigns" element={<CampaignList />} />
        </Routes>
     
    </Router>
  );
};

export default App;