import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, hashHistory } from 'react-router';
//import createBrowserHistory from 'history/lib/createBrowserHistory';
import injectTapEventPlugin from "react-tap-event-plugin"

import routes from "./routes.js";

injectTapEventPlugin();

ReactDOM.render(
  <Router history={browserHistory}>{routes}</Router>,
  document.getElementById('app')
);
