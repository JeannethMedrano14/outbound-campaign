import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ContactForm from "./components/Contacts/Contacts";
import TemplateList from "./components/Templates/Templates";
import CampaignList from "./components/Campaigns/Campaigns";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import Inicio from "./components/Inicio/Inicio";
import CreateTemplate from "./components/Templates/CreateTemplate/CreateTemplate";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/inicio"
          element={
            <>
              <Navbar />
              <Inicio />
            </>
          }
        />
        <Route
          path="/contacts"
          element={
            <>
              <Navbar />
              <ContactForm />
            </>
          }
        />
        <Route
          path="/templates"
          element={
            <>
              <Navbar />
              <TemplateList />
            </>
          }
        />
        <Route
          path="/campaigns"
          element={
            <>
              <Navbar />
              <CampaignList />
            </>
          }
        />
        <Route
          path="/createTemplate"
          element={
            <>
              <Navbar />
              <CreateTemplate />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
