import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import MainLayout from './mainLayout';
import IntroPage from './introPage';
import AboutPage from './aboutPage';
import PortfolioPage from './portfolioPage';
import ContactPage from './contactPage';

const Routes = () => (
  <Router history={ browserHistory }>
    <Route path="/" component={ MainLayout }>
      <IndexRedirect to="/intro" />
      <Route path="intro" component={ IntroPage } />
      <Route path="about" component={ AboutPage } />
      <Route path="portfolio" component={ PortfolioPage } />
      <Route path="contact" component={ ContactPage } />
    </Route>
  </Router>
);

export default Routes;
