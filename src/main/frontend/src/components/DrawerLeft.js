import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from "react-router";

export default class DrawerLeft extends React.Component {

    render() {
        return (
            <div>
                <RaisedButton
                    label="Open Drawer"
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.props.open}
                    onRequestClose={this.props.onToggleDrawer}
                >
                    <Link to="/">
                        <MenuItem onTouchTap={this.props.onHandleClose}>Home</MenuItem>
                    </Link>
                    <Link to="/users">
                        <MenuItem onTouchTap={this.props.onHandleClose}>Users</MenuItem>
                    </Link>
                </Drawer>
            </div>
        );
    }
}
