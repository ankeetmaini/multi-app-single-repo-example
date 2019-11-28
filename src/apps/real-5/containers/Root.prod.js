import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import App from './App';
import UserPage from './UserPage';
import RepoPage from './RepoPage';

const Root = ({ store, match }) => (
  <Provider store={store}>
    <div>
      <Route path={`${match.url}/`} component={App} />
      <Route path={`${match.url}/:login/:name`} component={RepoPage} />
      <Route path={`${match.url}/:login`} component={UserPage} />
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};
export default Root;
