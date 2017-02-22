import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/App';
import ProjectGrid from './components/ProjectGrid';
import Homepage from './components/Homepage';
import About from './components/About';
import Blog from './components/Blog';

export default () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="portfolio" component={ProjectGrid} />
        <Route path="about" component={About} />
        <Route path="blog" component={Blog} />
        <IndexRoute component={Homepage} />
      </Route>
    </Router>
  );
}
