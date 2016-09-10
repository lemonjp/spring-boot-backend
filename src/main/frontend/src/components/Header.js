import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import DrawerLeft from './DrawerLeft';

export default class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            open: false
        }
    }

    toggleDrawer() {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        return (
            <div>
                <AppBar
                    title="Title"
                    onLeftIconButtonTouchTap={this.toggleDrawer.bind(this)}
                />
                <DrawerLeft open={this.state.open} onToggleDrawer={this.toggleDrawer.bind(this)} />
           </div>
        )
    }
}
