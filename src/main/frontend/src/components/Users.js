import React from 'react';
import $ from 'jquery';
import axios from 'axios'
//import { Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router";
import {
  Paper,
  FlatButton
} from "material-ui"

import UserList from './UserList';

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
            <div className="contents">
              <Paper className="paper">
                <h2>Users</h2>
                <p>Usersのコンテンツが入ります。</p>
                <UserList users={this.state.users}/>
                <FlatButton label="Go Home"
                            containerElement={<Link to="/" />} />
              </Paper>
            </div>
        )
    }
}

export default Users;
