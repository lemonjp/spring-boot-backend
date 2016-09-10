import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from "react-router";

export default class DrawerLeft extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle() {
        this.setState({open: !this.state.open});
    }

    handleClose() {
        this.setState({open: false});
    }

    render() {
        return (
            <div>
                <RaisedButton
                    label="Open Drawer"
                    onTouchTap={this.handleToggle.bind(this)}
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <Link to="/">
                        <MenuItem onTouchTap={this.handleClose.bind(this)}>Home</MenuItem>
                    </Link>
                    <Link to="/users">
                        <MenuItem onTouchTap={this.handleClose.bind(this)}>Users</MenuItem>
                    </Link>
                </Drawer>
            </div>
        );
    }
}
