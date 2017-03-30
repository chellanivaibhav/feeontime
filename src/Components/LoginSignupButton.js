import React from 'react';
import {MenuItem, DropdownButton,Grid,Row,Col,Image,Carousel,ButtonToolbar,Button, Modal, Tabs, Tab} from 'react-bootstrap';
import {Menu,Popover,RaisedButton, PasswordField, AutoComplete, TextField, Paper, AppBar, Drawer, IconButton, FlatButton, Toolbar, ToolbarGroup} from 'material-ui';
import logoimage from '../images/logoimage.png';
import logo from '../images/logo.png';
import {BrowserRouter as Router, Route } from 'react-router-dom';
 
var Dropdownhead = React.createClass({

	render: function() {

		const styles = {

			profilepic: {
				'width': '40px',
				'height': '40px'
			}
		}
		return (
			<div>
			<Image src={logoimage} style={styles.profilepic} circle/>&nbsp;Rahul Malhotra
			</div>
		);
	}

});


var LoginSignup = React.createClass({

	render: function() {
	
		const styles = {

			navdrophead : {
				'margin-right': '0',
				'padding': '0',
				'margin-top': '5px',
				'color': 'white',
				'background': '#4688c7',
				'border-color': '#4688c7'
			},
		    button:
		    {
		    	color:'white',
		    	'background-color':'#4688C7',
		    	'border-color':'white'
		    },
		}

		return (
	
			<div>
{/*			  <ButtonToolbar><Button onClick={this.open} bsStyle="" style={styles.button}>Login | Signup</Button></ButtonToolbar>
*/}		      <DropdownButton title={<Dropdownhead />} noCaret style={styles.navdrophead}>
		        <MenuItem href="/profile" >View Profile</MenuItem>
		        <MenuItem >Transaction History</MenuItem>
		        <MenuItem >Your Cart</MenuItem>
		        <MenuItem >Your Wishlist</MenuItem>
		        <MenuItem >Logout</MenuItem>
		      </DropdownButton>
     		</div>
		);
	}

});

module.exports = LoginSignup;