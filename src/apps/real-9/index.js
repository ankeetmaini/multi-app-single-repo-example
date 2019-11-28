import React from 'react';
import Root from './containers/Root';
import configureStore from './store/configureStore';

const store = configureStore();

export default function(props) {
  return <Root store={store} {...props} />;
}
