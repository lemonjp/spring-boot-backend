import React from 'react';
import { Link } from "react-router";
import {
  Paper,
  FlatButton
} from "material-ui"

class Home extends React.Component{
  render() {
    return (
      <div className="contents">
        <Paper className="paper">
          <h2>Home</h2>
          <p>Homeのコンテンツが入ります。</p>
          <FlatButton label="Go Users"
                      containerElement={<Link to="/users" />} />
        </Paper>
      </div>
    );
  }
}

export default Home;
