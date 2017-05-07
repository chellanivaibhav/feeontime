import React from 'react';
import {Grid,Row,Col,Image,Carousel,ButtonToolbar,Button, Modal, Tabs, Tab} from 'react-bootstrap';
import {RaisedButton, PasswordField, AutoComplete, TextField, Paper, AppBar, Drawer, MenuItem, IconButton, FlatButton, Toolbar, ToolbarGroup} from 'material-ui';
import logoimage from '../images/logoimage.png';
import logo from '../images/logo.png';
import LoginSignup from './LoginSignupButton.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Cookies from 'js-cookie';

var MyDrawer = React.createClass({

	getInitialState: function() {

		return {open: false};
	},

 	handleToggle :function() { this.setState({open: !this.state.open}) },

 	handleClose : function() { this.setState({open: false}) },

	render: function() {

		  const styles = {	 
		   	
		  	appbarstyleactive:
		  	{
		  		'border-bottom-width':'2px',
		  		'border-bottom-style':'solid',
		    	backgroundColor: '#4688C7',
		    	color: 'white',
		    	'font-size': '110%'
		  	},
		    logostyle:
		    {
		    	width:'50%'
		    },
		  	appbarstyle:
		  	{
		    	backgroundColor: '#4688C7',
		    	color: 'white',
		    	'font-size': '110%'
		    },
		  };

		return (
			<div>
			  <AppBar title={<img src={logo} style={styles.logostyle} />} onLeftIconButtonTouchTap={this.handleToggle} style={styles.appbarstyle}>
			   <Toolbar style={styles.appbarstyle}>
			   <ToolbarGroup>
			   <FlatButton containerElement={<Link to="/" />} style={styles.appbarstyleactive}>Pay Fees Here</FlatButton>
			   <FlatButton containerElement={<Link to="/dailyneeds" />} style={styles.appbarstyle}>Daily Needs</FlatButton>
			   <FlatButton containerElement={<Link to="/" />} style={styles.appbarstyle}>Shop Online</FlatButton>
			   <FlatButton containerElement={<Link to="/" />} style={styles.appbarstyle}>Offers</FlatButton>
			   <FlatButton containerElement={<Link to="/" />} style={styles.appbarstyle}>Updates</FlatButton>
			   <LoginSignup />
			   </ToolbarGroup>
			   </Toolbar>
			  </AppBar>
			  <Drawer
	           docked={false}
	           open={this.state.open}
	           onRequestChange={(open) => this.setState({open})}
          	  >
			  <MenuItem onTouchTap={this.handleClose} >Menu Item</MenuItem>
			  <MenuItem onTouchTap={this.handleClose} >Menu Item 2</MenuItem>
			  </Drawer>
			</div>

		);
	}

});

module.exports = MyDrawer;