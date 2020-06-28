import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import data from './data/JoseGallegos';
import Home from './containers/Home';

const Routes = () => [
  <Route
    key="home"
    path="/"
    render={() => <Home social={data.social} />}
  />,
];

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
