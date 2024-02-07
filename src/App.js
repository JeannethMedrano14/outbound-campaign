import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ContactForm from './components/Contacts/Contacts';
import TemplateList from './components/Templates/Templates';
import CampaignList from './components/Campaigns/Campaigns';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
// import Navbar from './components/Navbar/Navbar';
import Inicio from './components/Inicio/Inicio';

const App = () => {
  // const navbarVisibleRoutes = ["/contacts", "/campaigns", "/templates", "/inicio"];

  return (
    <Router>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/contacts" element={<ContactForm />} />
        <Route path="/templates" element={<TemplateList />} />
        <Route path="/campaigns" element={<CampaignList />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* Mostrar el Navbar si la ruta actual coincide con las rutas permitidas */}
      {/* {navbarVisibleRoutes.includes(window.location.pathname) && <Navbar />} */}
    </Router>
  );
};

export default App;
