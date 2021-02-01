import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import RestoServiceContext from './components/resto-service-context';
import RestoService from './services/restoService';

const restoService = new RestoService();

ReactDOM.render(
  <Provider store={store}>
  <RestoServiceContext.Provider value={restoService}>
                <Router>
                    <App/>
                </Router>
  </RestoServiceContext.Provider>
  </Provider>
  ,
  document.getElementById('root')
);

