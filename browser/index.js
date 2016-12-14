import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/App';

// Needed for onTouchTap
injectTapEventPlugin();

render(
  <Router history={browserHistory}>
  <Route path="/" component={App} />
  </Router>,
  document.getElementById('app')
);
