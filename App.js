// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Snack1 from './Snack1';
import Snack2 from './Snack2';
import Snack3 from './Snack3';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={VendingMachine} />
        <Route path="/snack1" component={Snack1} />
        <Route path="/snack2" component={Snack2} />
        <Route path="/snack3" component={Snack3} />
      </Switch>
    </Router>
  );
};

export default App;
