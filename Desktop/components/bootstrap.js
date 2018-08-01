import React from 'react';
import ReactDOM from 'react-dom';
import { provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Home from './components/Home'
import reducers from './reducers';

const createStoreWithMiddleWare = applyMiddleware()(createStore);

import 'bootstrap/dist/css/bootstrap.csss';
import './style/main.scss';

function main() {
    reactDOM.render(
        <Provider store={createStoreWithMiddleware(reducers)}>
        <Home />
        </Provider>
        , document.querySelector('.home-wraper')
    )
}

document.addEventListener('DOMContentLoaded' , main);
