import React from 'react';
import {Grid,Row,Col,Image,Carousel,ButtonToolbar,Button, Modal, Tabs, Tab} from 'react-bootstrap';
import {RaisedButton, PasswordField, AutoComplete, TextField, Paper, AppBar, Drawer, MenuItem, IconButton, FlatButton, Toolbar, ToolbarGroup} from 'material-ui';
import logoimage from '../images/logoimage.png';
import logo from '../images/logo.png';
import LoginSignup from './LoginSignupButton.js';
import LoginSignupButton from './LoginSignupButton.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Cookies from 'js-cookie';

var MyDrawer = React.createClass({

	getInitialState: function() {

		return {
			open: false,
			active: 0,
			loggedin: Cookies.get('isloggedin'),
		};
	},

	clickbutton: function(value) {
		if(value==0)
		{
			this.setState({ active: 0 });
		}
		else if(value==1)
		{
			this.setState({ active: 1 });
		}
		this.props.maindrawer(value);
	},
	changelogin: function(data)
	{
		this.setState({loggedin: data});
		
	},
 	handleToggle :function() { this.setState({open: !this.state.open}) },

 	handleClose : function() { this.setState({open: false}) },

	render: function() {

		  const styles = {	 
		   	
		    logostyle:
		    {
		    	width:'30%'
		    },
		  	appbarstyle:
		  	{
		    	backgroundColor: '#4688C7',
		    	color: 'white',
		    	'font-size': '110%'
		    },
		  };

		  	var appbarstyleactive =  {

		    	backgroundColor: '#4688C7',
		    	color: 'white',
			  	'-moz-border-bottom-colors':'#4688C7',
		    	'font-size': '110%'
		  	}

		  	var appbarstyleactive1 =  {

		    	backgroundColor: '#4688C7',
		    	color: 'white',
			  	'-moz-border-bottom-colors':'#4688C7',
		    	'font-size': '110%'
		  	}

		  	if(this.state.active==0)
		  	{
			  	var appbarstyleactive =  {

			  		'border-bottom-width':'2px',
			  		'border-bottom-style':'solid',
			    	backgroundColor: '#4688C7',
			    	color: 'white',
			    	'font-size': '110%'
			  	}
		  	}

		  	else if(this.state.active==1)
		  	{
			  	var appbarstyleactive1 =  {

			  		'border-bottom-width':'2px',
			  		'border-bottom-style':'solid',
			    	backgroundColor: '#4688C7',
			    	color: 'white',
			    	'font-size': '110%'
			  	}
		  	}
		  		  		
		  	if(this.state.loggedin)
		  	{
		  		var mywalletstyle={
		  			backgroundColor: '#4688C7',
			    	color: 'white',
			    	'font-size': '110%',
		  			'display':'block'
		  		}

		  	}
		  	else
		  	{
		  		var mywalletstyle=
		  		{
		  			'display':'none'
		  		}		  		
		  	}



		return (
			<div>
			  <AppBar title={<img src={logo} style={styles.logostyle} />}  style={styles.appbarstyle}>
			   <Toolbar style={styles.appbarstyle}>
			   <ToolbarGroup>
			   <FlatButton onClick={() => this.clickbutton(0)} style={appbarstyleactive}>Pay Fees Here</FlatButton>
			   <FlatButton onClick={() => this.clickbutton(1)} style={appbarstyleactive1}>Daily Needs</FlatButton>
			   <FlatButton containerElement={<Link to="/" />} style={mywalletstyle}>My Wallet</FlatButton>
			   <FlatButton containerElement={<Link to="/" />} style={styles.appbarstyle}>Help</FlatButton>
			   <LoginSignup />
			   </ToolbarGroup>
			   </Toolbar>
			  </AppBar>
			  {/*<Drawer
	           docked={false}
	           open={this.state.open}
	           onRequestChange={(open) => this.setState({open})}
          	  >
			  <MenuItem onTouchTap={this.handleClose} >Menu Item</MenuItem>
			  <MenuItem onTouchTap={this.handleClose} >Menu Item 2</MenuItem>
			  </Drawer>*/}
			</div>

		);
	}

});

module.exports = MyDrawer;