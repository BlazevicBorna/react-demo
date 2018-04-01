import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { browserHistory, Router } from 'react-router';
import routes from './Routes';
import configureStore from './store/ConfigureStore';
import { loadAssets } from './actions/AssetAction';
import { loadCategories } from './actions/CategoryAction';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

const store = configureStore();
store.dispatch(loadAssets());
store.dispatch(loadCategories());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
