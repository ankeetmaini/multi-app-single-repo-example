import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Suspense = React.Suspense;

const AwesomeCounter = React.lazy(() => import('./apps/awesome-counter/index'));
const Real1 = React.lazy(() => import('./apps/real-1'));
const Real2 = React.lazy(() => import('./apps/real-2'));
const Real3 = React.lazy(() => import('./apps/real-3'));
const Real4 = React.lazy(() => import('./apps/real-4'));
const Real5 = React.lazy(() => import('./apps/real-5'));
const Real6 = React.lazy(() => import('./apps/real-6'));
const Real7 = React.lazy(() => import('./apps/real-7'));
const Real8 = React.lazy(() => import('./apps/real-8'));
const Real9 = React.lazy(() => import('./apps/real-9'));
const Real10 = React.lazy(() => import('./apps/real-10'));
const Real11 = React.lazy(() => import('./apps/real-11'));

const App = () => (
  <Switch>
    <Route
      path="/awesome-counter"
      render={(props) => (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <AwesomeCounter {...props} />
          </Suspense>
        </div>
      )}
    />
    <Route
      path="/real-1"
      render={(props) => (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <h1>Real 1 </h1>
            <Real1 {...props} />
          </Suspense>
        </div>
      )}
    />
    <Route
      path="/real-2"
      render={(props) => (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <h1>Real 2 </h1>
            <Real2 {...props} />
          </Suspense>
        </div>
      )}
    />
    <Route
      path="/real-3"
      render={(props) => (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <h1>Real 3 </h1>
            <Real3 {...props} />
          </Suspense>
        </div>
      )}
    />
    <Route
      path="/real-4"
      render={(props) => (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <h1>Real 4 </h1>
            <Real4 {...props} />
          </Suspense>
        </div>
      )}
    />
    <Route
      path="/real-5"
      render={(props) => (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <h1>Real 5 </h1>
            <Real5 {...props} />
          </Suspense>
        </div>
      )}
    />
    <Route
      path="/real-6"
      render={(props) => (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <h1>Real 6 </h1>
            <Real6 {...props} />
          </Suspense>
        </div>
      )}
    />
    <Route
      path="/real-7"
      render={(props) => (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <h1>Real 7 </h1>
            <Real7 {...props} />
          </Suspense>
        </div>
      )}
    />
    <Route
      path="/real-8"
      render={(props) => (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <h1>Real 8 </h1>
            <Real8 {...props} />
          </Suspense>
        </div>
      )}
    />
    <Route
      path="/real-9"
      render={(props) => (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <h1>Real 9 </h1>
            <Real9 {...props} />
          </Suspense>
        </div>
      )}
    />
    <Route
      path="/real-10"
      render={(props) => (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <h1>Real 10 </h1>
            <Real10 {...props} />
          </Suspense>
        </div>
      )}
    />
    <Route
      path="/real-11"
      render={(props) => (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <h1>Real 11 </h1>
            <Real11 {...props} />
          </Suspense>
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
