import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AwesomeCounter from './apps/awesome-counter/index';

const App = () => (
  <Switch>
    <Route path="/awesome-counter" component={AwesomeCounter} />
  </Switch>
);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
