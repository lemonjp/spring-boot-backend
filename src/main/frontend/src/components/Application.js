import React, {Component, PropTypes} from "react"
import $ from 'jquery';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { RouteHandler } from 'react-router';
import { Link } from "react-router";
import {AppBar, Drawer, LeftNav, MenuItem, Mixins, MuiThemeProvider} from 'material-ui';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {deepOrange500} from 'material-ui/styles/colors';

import Header from './Header';

require('!style!css!less!../style/normalize.less');
require('!style!css!less!../style/Application.less');

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Application extends React.Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
          <div className="page-container">
              <Header />
              {this.props.children}
          </div>
      </MuiThemeProvider>
    );
  }
}

export default Application;
