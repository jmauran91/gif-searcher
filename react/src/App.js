import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import IndexContainer from './containers/IndexContainer';

const App = (props) => {
  return(
    <Router history={browserHistory}>
      <route path="/" component={IndexContainer} />
    </Router>
  )
}

export default App;
