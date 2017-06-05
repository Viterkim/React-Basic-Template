import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, Router, Route, IndexRoute } from 'react-router'
import Layout from './pages/Layout';
import MainPage from './pages/MainPage';
import SecondPage from './pages/SecondPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './style/index.css';

const Index = () => (
  <MuiThemeProvider>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={MainPage}/>
        <Route path="main" component={MainPage} />
        <Route path="second" component={SecondPage} />
      </Route>
    </Router>
  </MuiThemeProvider>
);

ReactDOM.render((
    <Index/>
), document.getElementById('root'))
