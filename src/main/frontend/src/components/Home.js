import React from 'react';
import { Link } from "react-router";
import {
  Paper,
  FlatButton
} from "material-ui"

const style = {
  height: 200,
  width: 200,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class Home extends React.Component{
  render() {
    return (
        <Paper style={style} zDepth={2}>
          <h2>Home</h2>
          <p>Homeのコンテンツが入ります。</p>
          <FlatButton label="Go Users"
                      containerElement={<Link to="/users" />} />
        </Paper>
    );
  }
}

export default Home;
