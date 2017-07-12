import React from 'react';
import {MenuItem, DropdownButton,Grid,Row,Col,Image,Carousel,ButtonToolbar,Button, Modal} from 'react-bootstrap';
import {Tabs,Tab,Dialog,Menu,Popover,RaisedButton, PasswordField, AutoComplete, TextField, Paper, AppBar, Drawer, IconButton, FlatButton, Toolbar, ToolbarGroup} from 'material-ui';
import logoimage from '../images/logoimage.png';
import logo from '../images/logo.png';
import payfees from '../images/pay.png';
 
import searchservice from '../images/search.png';
import shoponline from '../images/shop.png';

import {Validation, fieldValidatorCore} from "react-validation-framework";
import validator from "validator";
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Cookies from 'js-cookie';
var $ = require ('jquery');
 
var Dropdownhead = React.createClass({

	render: function() {

	var name = Cookies.get('username');

		const styles = {

			profilepic: {
				'width': '40px',
				'height': '40px'
			}
		}
		return (
			<div style={{'font-size':'1.8em'}}>
			{/*<Image src={logoimage} style={styles.profilepic} circle/>&nbsp;{name}&nbsp;*/}
			{name}
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
		var data1=null;
		let t = this;
		$.ajax({
			type: 'POST',
			url: 'http://52.41.82.157/Feeontime/index.php/user/signup',
			dataType:'json',
			async:false,
			data: mydata,
			success: function(data)
			{
				data1 = data.success;
				if(data1==1)
				{
					Cookies.set('isloggedin',true);
					Cookies.set('username',t.state.name);
					Cookies.set('userid',data.message);
					Cookies.set('phone',t.state.phone);
				}
			},
		    error: function (error) 
		    {
				alert(JSON.stringify(error));
		    }
		});
		if(data1==1)
			this.props.changestate(true);
		else if(data1==2)
			alert('User already exists');
		else
			alert('Unable to Signup');
	},

	handleLogin: function()
	{
		var mydata = { email: this.state.loginemail, password: this.state.loginpassword };
		var data1=null;
		$.ajax({
			type: 'POST',
			url: 'http://52.41.82.157/Feeontime/index.php/user/login',
			dataType:'json',
			async:false,
			data: mydata,
			success: function(data)
			{
				data1 = data.success;
				if(data1==1)
				Cookies.set('isloggedin',true);
				var p = data.message;
				Cookies.set('username',p[0].name);
				Cookies.set('userid',p[0].id);
				Cookies.set('phone',p[0].phone);
			},
		    error: function (error) 
		    {
				alert(JSON.stringify(error));
		    }
		});
		if(data1==1)
			this.props.changestate(true);
		else
			alert('Wrong email or Password');
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

				 'display': 'block',

    				'margin': '0 auto',
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
				'font-weight':'50'
			},

			underlineFocusStyle: {
				borderColor: '#4688C7',
				'font-weight':'50'
			},

			h6: {
				float:'right'
			},

			loginbutton: {
				'margin-top':'3em',
				background: '#4688C7',
				width:"70%",
				color:'white',
				'font-size':'1em'
			},
		    button:
		    {
		    	color:'white',
		    	'background-color':'#4688C7',
		    	'border-color':'white',
		    	'font-size':'1.4em'
		    },
		    carousel:
		    {
		    	'width':'100%'
		    },
		    gridstyle: {
		    	'padding':'0',
		    	'margin':'0',
		    },
		    tabstyle: {
		    	'background':'white',
		    	'color':'black',
		    },
		    
		    
		    '.right.carousel-control' :{
    				display: 'none'
			
		    },
		    '.left.carousel-control': {
   				 background:'none'
			},
		}
		return (
			<div style={{'zoom':'55%'}}>
	        <Dialog
	        titleStyle={styles.gridstyle}
	        bodyStyle={styles.gridstyle}
	        style={styles.gridstyle}
	          open={this.state.showModal}
	          onRequestClose={this.close}
	        >
					<Grid bsClass="container-fluid">
						<Row>
							
								<Col xs="12" md="6" >
								<center>
								{/*<Image src={logoimage} style={styles.logoimagestyle} />
								<h3 style={styles.h3}><br />Pay Fees Online</h3><br />
								<h3 style={Object.assign({},styles.h3,styles.bottompad)}>#gocashless</h3>
								<br />*/}
								
								{/*<Image src={logo}  />*/}
								<Carousel className="letter" prevIcon={null} rightIcon={null}style={{}} controls={false} >
								<Carousel.Item>
									<Image src={payfees} style={styles.logoimagestyle} />
								
								</Carousel.Item>
								<Carousel.Item>
									<Image src={searchservice} style={styles.logoimagestyle}/>
								
								</Carousel.Item>
								<Carousel.Item>
									<Image src={shoponline} style={styles.logoimagestyle} />
								
								</Carousel.Item>
								</Carousel>
								
								</center>
							</Col>
							<Col xs="12" md="6">
							<Tabs defaultActiveKey={1} inkBarStyle={{background: '#4688C7'}} tabItemContainerStyle={styles.tabstyle} buttonStyle={styles.tabstyle}>
								<Tab eventKey={1} label={<span style={{ 'text-transform':'capitalize', color: 'gray' }}>Login</span>}>
									<Grid bsClass="container-fluid">
										<Row>
											<TextField value={this.state.loginemail} onChange={this.handleChange} name="loginemail" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelText="Email Id" type="email" />
										</Row>
										<Row>
											<TextField value={this.state.loginpassword} onChange={this.handleChange} name="loginpassword" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelText="Password" type="password" />
										</Row>
										<Row>
											<a href="#"><h6 style={styles.h6}>Forgot Password ?</h6></a>
										</Row>
										<Row>
											<center><Button onClick={this.handleLogin} style={styles.loginbutton}>Login</Button></center>
										</Row>
									</Grid>
								</Tab>
								<Tab eventKey={2} label={<span style={{ 'text-transform':'capitalize', color: 'gray' }}>Sign Up</span>}>
									<Grid bsClass="container-fluid">
										<Row>
										<Validation group="myGroup"
		    
									        validators={[
											{
									         validator: (val) => !validator.isEmpty(val),
									         errorMessage: "Cannot be left empty"
									        }, {
									         validator: (val) => validator.isAlpha(val,'en-IN'),
									         errorMessage: "Should not be a numeric number"
									        }, ]}>
											<TextField value={this.state.name} name="name" onChange={this.handleChange} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelText="Name" />
											</Validation>
										</Row>
										<Row>
											<Validation group="myGroup"
		    
									        validators={[
											{
									         validator: (val) => !validator.isEmpty(val),
									         errorMessage: "Cannot be left empty"
									        }, {
									         validator: (val) => validator.isEmail(val),
									         errorMessage: "Enter Valid Email Id"
									        }, ]}>
											<TextField value={this.state.email} name="email" onChange={this.handleChange} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelText="Email Id" type="email" />
											</Validation>
										</Row>
										<Row>
										<Validation group="myGroup"
		    
									        validators={[
											{
									         validator: (val) => !validator.isEmpty(val),
									         errorMessage: "Cannot be left empty"
									        }, {
									         validator: (val) => validator.isNumeric(val),
									         errorMessage: "Should be only Numeric"
									        },
									        {
									         validator: (val) => validator.isLength(val,{min:10, max: 10}),
									         errorMessage: "Enter Valid Phone Number"
									        },


									         ]}>
											<TextField value={this.state.phone} name="phone" onChange={this.handleChange} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelText="Mobile Number" type="number" />
											</Validation>
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

	getInitialState: function()
	{
		return {loggedin: Cookies.get('isloggedin')};
	},

	changelogin: function(data)
	{
		this.setState({loggedin: data});
		if(data==false)
		{
			Cookies.remove('username');
			Cookies.remove('userid');
			Cookies.remove('isloggedin');
			Cookies.remove('enrollmentno');
		}
	},

	render: function() {	

	let hehe;

		const styles = {

				navdrophead : {
					'margin-right': '5',
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

		if(!this.state.loggedin)
		{
			hehe = (<LoginSignupButton changestate={this.changelogin} />);
		} 
		else 
		{
			hehe = (
				<DropdownButton title={<Dropdownhead />} pullRight noCaret style={styles.navdrophead}>
				<MenuItem href="/profile"   style={{'font-size':'1.7em'}} >View Profile</MenuItem>
				
							
				<MenuItem href="/transactionhistory"  style={{'font-size':'1.6em','float':'left'}}>Transaction History</MenuItem>
				<MenuItem style={{'font-size':'1.7em','float':'left'}}  onClick={() => this.changelogin(false)} >Logout</MenuItem>
				</DropdownButton>
				);
		}

		return (
	
			<div style={{zoom:'100%'}} >{hehe}</div>
		);
	}

});

module.exports = LoginSignup;