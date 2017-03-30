import React from 'react';
import ReactDOM from 'react-dom';
import MyDrawer from './Drawer.js';
import {RaisedButton, PasswordField, AutoComplete, TextField, Paper, AppBar, Drawer, MenuItem, IconButton, FlatButton, Toolbar, ToolbarGroup} from 'material-ui';
import {Grid,Row,Col,Image,Carousel,ButtonToolbar,Button, Modal, Tabs, Tab} from 'react-bootstrap';
import physicsbook from '../images/physicsbook.png';

var Container = React.createClass({

	render: function() {
		return (
			<div />
		);
	}

});

var DailyNeeds = React.createClass({

	render: function() {
		return (
			<div>
				<MyDrawer />
				<Container />
			</div>
		);
	}

});

module.exports = DailyNeeds;