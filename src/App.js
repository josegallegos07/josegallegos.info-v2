import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import data from './data/JoseGallegos';
import Navbar from './components/Navbar';
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
        education={data.education}
        awards={data.awards}
        work={data.work}
      />
    )}
  />,
];

function App() {
  return (
    <div className="app">
      <Navbar />
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
