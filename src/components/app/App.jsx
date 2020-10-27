import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HeyArnoldAll from '../../containers/HeyArnoldAll';
import HeyArnoldDetails from '../../containers/HeyArnoldDetails';

export default function App() {
  return <Router>
    <Switch>
      <Route
        path="/"
        exact
        component={HeyArnoldAll}
      />
      <Route
        path="/:characterName"
        exact
        component={HeyArnoldDetails}
      />
    </Switch>
  </Router>;
}
