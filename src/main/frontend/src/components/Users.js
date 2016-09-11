import React from 'react';
import $ from 'jquery';
import axios from 'axios'
import { Link } from "react-router";
import {
  Paper,
  FlatButton
} from "material-ui"

import UserList from './UserList';

const style = {
  height: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

export class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {users: []};
    }
    componentDidMount() {
        axios.get('/api').then((response) => {
          console.dir(response);
          this.setState({users: response.data});
        }).catch((response) => {
          console.log(response)
        })
    }

    render() {
        return (
              <Paper style={style} zDepth={2}>
                <h2>Users</h2>
                <p>Usersのコンテンツが入ります。</p>
                <UserList users={this.state.users}/>
                <FlatButton label="Go Home"
                            containerElement={<Link to="/" />} />
              </Paper>
        )
    }
}

export default Users;
