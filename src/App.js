import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import data from './data/JoseGallegos';
import NavBar from './components/NavBar';
import Home from './containers/Home';

const Routes = () => [
  <Route
    key="home"
    path="/"
    render={() => (
      <Home
        name={data.name}
        img={data.img}
        bio={data.bio}
        location={data.location}
        social={data.social}
        profile={data.profile}
      />
    )}
  />,
];

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="app-content">
        <Router>
          <Switch>
            <Routes />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
