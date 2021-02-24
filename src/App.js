import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AllResultPage from './pages/AllResultPage';
import DeveloperPage from './pages/DeveloperPage';
import ResultPage from './pages/ResultPage';
import WarningPage from './pages/WarningPage';

function App({ props }) {

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={props => <LandingPage props={props} />}
      ></Route>
      <Route
        path="/result/:finalType"
        render={(props) => <ResultPage props={props} {...props} />}
      ></Route>
      <Route
        exact
        path="/all"
        render={props => <AllResultPage props={props} />}
      ></Route>
      <Route
        exact
        path="/makers"
        render={props => <DeveloperPage props={props} />}
      ></Route>
      <Route path="/*"><WarningPage /></Route>
    </Switch >
  );

}

export default App;