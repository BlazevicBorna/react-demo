import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ManagerPage from './components/manager/ManagerPage';
import ContactPage from './components/contact/ContactPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="manager" component={ManagerPage} />
        <Route path="contact" component={ContactPage} />
    </Route>
);