import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AllResultPage from './pages/AllResultPage';
import DeveloperPage from './pages/DeveloperPage';
import ResultPage from './pages/ResultPage';

function App() {

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={props => (
          <LandingPage />
        )}
      ></Route>
      <Route
        exact
        path="/result/:RoomieNum"
        render={(props) => (
          <ResultPage props={props} />
        )}
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
      <Route path="/*">앗! 이 주소는 룸미가 살지 않는 방이에요!</Route>
    </Switch>
  );

}

export default App;