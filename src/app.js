import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AwesomeCounter from './apps/awesome-counter/index';
import Real1 from './apps/real-1';
import Real2 from './apps/real-2';
import Real3 from './apps/real-3';
import Real4 from './apps/real-4';
import Real5 from './apps/real-5';
import Real6 from './apps/real-6';
import Real7 from './apps/real-7';
import Real8 from './apps/real-8';
import Real9 from './apps/real-9';
import Real10 from './apps/real-10';
import Real11 from './apps/real-11';

const App = () => (
  <Switch>
    <Route
      path="/awesome-counter"
      render={(props) => (
        <div>
          <AwesomeCounter {...props} />
        </div>
      )}
    />
    <Route
      path="/real-1"
      render={(props) => (
        <div>
          <h1>Real 1 </h1>
          <Real1 {...props} />
        </div>
      )}
    />
    <Route
      path="/real-2"
      render={(props) => (
        <div>
          <h1>Real 2 </h1>
          <Real2 {...props} />
        </div>
      )}
    />
    <Route
      path="/real-3"
      render={(props) => (
        <div>
          <h1>Real 3 </h1>
          <Real3 {...props} />
        </div>
      )}
    />
    <Route
      path="/real-4"
      render={(props) => (
        <div>
          <h1>Real 4 </h1>
          <Real4 {...props} />
        </div>
      )}
    />
    <Route
      path="/real-5"
      render={(props) => (
        <div>
          <h1>Real 5 </h1>
          <Real5 {...props} />
        </div>
      )}
    />
    <Route
      path="/real-6"
      render={(props) => (
        <div>
          <h1>Real 6 </h1>
          <Real6 {...props} />
        </div>
      )}
    />
    <Route
      path="/real-7"
      render={(props) => (
        <div>
          <h1>Real 7 </h1>
          <Real7 {...props} />
        </div>
      )}
    />
    <Route
      path="/real-8"
      render={(props) => (
        <div>
          <h1>Real 8 </h1>
          <Real8 {...props} />
        </div>
      )}
    />
    <Route
      path="/real-9"
      render={(props) => (
        <div>
          <h1>Real 9 </h1>
          <Real9 {...props} />
        </div>
      )}
    />
    <Route
      path="/real-10"
      render={(props) => (
        <div>
          <h1>Real 10 </h1>
          <Real10 {...props} />
        </div>
      )}
    />
    <Route
      path="/real-11"
      render={(props) => (
        <div>
          <h1>Real 11 </h1>
          <Real11 {...props} />
        </div>
      )}
    />
  </Switch>
);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
