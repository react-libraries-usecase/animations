import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import Home from './pages/home';
import About from './pages/about';

import './style.css';

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});

const App = () => (
  <Route
    render={({ location }) => {
      console.log(location);
      return (
        <div id="site-container">
          <header>
            <h1>Route transitions with Pose and React Router</h1>
          </header>
          <div id="content-container">
            <ul id="site-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
            <PoseGroup>
              <RouteContainer key={location.pathname}>
                <Switch location={location}>
                  <Route exact path="/" component={Home} key="home" />
                  <Route path="/about" component={About} key="about" />
                </Switch>
              </RouteContainer>
            </PoseGroup>
          </div>
        </div>
      )
    }}
  />
);

const Router = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Router;

