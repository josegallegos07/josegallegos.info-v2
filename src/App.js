import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';

const routes = [
  {
    path: '/',
    component: Home,
  },
];

const Routes = () => routes.map((route) => (<Route key={route.key} {...route} />));

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Routes />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
