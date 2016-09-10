import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import injectTapEventPlugin from "react-tap-event-plugin"

import routes from "./routes.js";

injectTapEventPlugin();

ReactDOM.render(
  <Router history={browserHistory}>{routes}</Router>,
  document.getElementById('app')
);
