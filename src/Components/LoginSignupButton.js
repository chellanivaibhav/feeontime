import React from 'react';
import {MenuItem, DropdownButton,Grid,Row,Col,Image,Carousel,ButtonToolbar,Button, Modal} from 'react-bootstrap';
import {Tabs,Tab,Dialog,Menu,Popover,RaisedButton, PasswordField, AutoComplete, TextField, Paper, AppBar, Drawer, IconButton, FlatButton, Toolbar, ToolbarGroup} from 'material-ui';
import logoimage from '../images/logoimage.png';
import logo from '../images/logo.png';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Cookies from 'js-cookie';
var $ = require ('jquery');
 
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

var LoginSignupButton = React.createClass({

	getInitialState: function() {
	
		 return {
		 	showModal: false,
		 	name: "",
		 	email: "",
		 	phone: "",
		 	password: "",
		 	loginemail: "",
		 	loginpassword: "",
		 };
	},

	handleChange: function(event)
	{
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	},

	handleSignup: function()
	{
		var mydata = { name: this.state.name, email: this.state.email, phone: this.state.phone, password: this.state.password, user_type: "0" }; 
		alert(JSON.stringify(mydata));
		$.ajax({
			type: 'POST',
			url: 'http://52.41.82.157/Feeontime/index.php/user/signup',
			data: mydata,
			success: function(data)
			{
				alert(JSON.stringify(data));
			},
		    error: function (error) 
		    {
				alert(JSON.stringify(error));
		    }
		});
	},

	handleLogin: function()
	{
		var mydata = { email: this.state.loginemail, password: this.state.loginpassword };
		alert(JSON.stringify(mydata));
		 $.ajax({
			type: 'POST',
			url: 'http://52.41.82.157/Feeontime/index.php/user/login',
			data: mydata,
			success: function(data)
			{
				Cookies.set('isloggedin',true);
				alert(JSON.stringify(data));
			},
		    error: function (error) 
		    {
//				alert(JSON.stringify(error));
		    }
		});
	},

	close() {
		this.setState({ showModal: false });
	},

	open() {
		this.setState({ showModal: true });
	},

	render:function() {

		const styles = {

			modalstyle: {
				padding:'0px',
				'margin-top':'90px'
			},

			logoimagestyle: {
				'margin':'0',
				'padding-top': '30%'
			},

			h3: {
				color: 'white'
			},

			bottompad: {
				'padding-bottom':'10%'
			},

			modalfirstpart: {
				'background-color':'#4688c7'
			},

			floatingLabelFocusStyle: {
				color: '#4688C7',
			},

			underlineFocusStyle: {
				borderColor: '#4688C7'
			},

			h6: {
				float:'right'
			},

			loginbutton: {
				background: '#4688C7',
				width:"70%",
				color:'white',
				'font-size':'1em'
			},
		    button:
		    {
		    	color:'white',
		    	'background-color':'#4688C7',
		    	'border-color':'white'
		    },
		    gridstyle: {
		    	'padding':'0',
		    	'margin':'0',
		    },
		    tabstyle: {
		    	'background':'white',
		    	'color':'black',
		    },
		}
		return (
			<div>
	        <Dialog
	        titleStyle={styles.gridstyle}
	        bodyStyle={styles.gridstyle}
	        style={styles.gridstyle}
	          open={this.state.showModal}
	          onRequestClose={this.close}
	        >
					<Grid bsClass="container-fluid">
						<Row>
							<Col xs="12" md="6" style={styles.modalfirstpart}>
								<center>
								<Image src={logoimage} style={styles.logoimagestyle} />
								<h3 style={styles.h3}><br />Pay Fees Online</h3><br />
								<h3 style={Object.assign({},styles.h3,styles.bottompad)}>#gocashless</h3>
								<br />
								</center>
							</Col>
							<Col xs="12" md="6">
							<Tabs defaultActiveKey={1} inkBarStyle={{background: '#4688C7'}} tabItemContainerStyle={styles.tabstyle} buttonStyle={styles.tabstyle}>
								<Tab eventKey={1} label={<span style={{ color: 'black', fontFamily:'museo500' }}>Login</span>}>
									<Grid bsClass="container-fluid">
										<Row>
											<TextField value={this.state.loginemail} onChange={this.handleChange} name="loginemail" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelText="Email Id" type="email" />
										</Row>
										<Row>
											<TextField value={this.state.loginpassword} onChange={this.handleChange} name="loginpassword" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelText="Password" type="password" />
										</Row>
										<Row>
											<a href="#"><h6 style={styles.h6}>Trouble Logging in ?</h6></a>
										</Row>
										<Row>
											<center><Button onClick={this.handleLogin} style={styles.loginbutton}>Login</Button></center>
										</Row>
									</Grid>
								</Tab>
								<Tab eventKey={2} label={<span style={{ color: 'black', fontFamily:'museo500' }}>Sign Up</span>}>
									<Grid bsClass="container-fluid">
										<Row>
											<TextField value={this.state.name} name="name" onChange={this.handleChange} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelText="Name" />
										</Row>
										<Row>
											<TextField value={this.state.email} name="email" onChange={this.handleChange} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelText="Email Id" type="email" />
										</Row>
										<Row>
											<TextField value={this.state.phone} name="phone" onChange={this.handleChange} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelText="Mobile Number" type="number" />
										</Row>
										<Row>
											<TextField value={this.state.password} name="password" onChange={this.handleChange} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelText="Password" type="password" />
										</Row>
										<Row>
											<center><Button onClick={this.handleSignup} style={styles.loginbutton}>Sign Up</Button></center>
										</Row>
									</Grid>
								</Tab>
							</Tabs>
							</Col>
						</Row>
					</Grid>
	        </Dialog>
			<ButtonToolbar><Button onClick={this.open} bsStyle="" style={styles.button}>Login | Signup</Button></ButtonToolbar></div>
		);
	}
});


var LoginSignup = React.createClass({

	render: function() {	

	let hehe;

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

		if(!this.props.loggedin)
		{
			hehe = (<LoginSignupButton />);
		} 
		else 
		{
			hehe = (
				<DropdownButton title={<Dropdownhead />} noCaret style={styles.navdrophead}>
				<MenuItem href="/profile" >View Profile</MenuItem>
				<MenuItem href="/transactionhistory">Transaction History</MenuItem>
				<MenuItem >Your Cart</MenuItem>
				<MenuItem >Your Wishlist</MenuItem>
				<MenuItem >Logout</MenuItem>
				</DropdownButton>
				);
		}

		return (
	
			<div>{hehe}</div>
		);
	}

});

module.exports = LoginSignup;