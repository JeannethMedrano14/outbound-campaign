import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactForm from './components/Contact/ContactForm';
import TemplateList from './components/Templates/TemplateList';
import CampaignList from './components/Campaigns/CampaignList';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/contact" component={ContactForm} />
          <Route path="/templates" component={TemplateList} />
          <Route path="/campaigns" component={CampaignList} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
