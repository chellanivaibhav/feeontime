import React from 'react';
import {Grid,Row,Col,Image,Carousel,ButtonToolbar,Button, Modal, Tabs, Tab} from 'react-bootstrap';
import {RaisedButton, PasswordField, AutoComplete, TextField, Paper, AppBar, Drawer, MenuItem, IconButton, FlatButton, Toolbar, ToolbarGroup} from 'material-ui';
import logoimage from '../images/logoimage.png';
import logo from '../images/logo.png';
import LoginSignup from './LoginSignupButton.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


var MyDrawer = React.createClass({

	getInitialState: function()
	{
		 return {open: false, showModal: false};
	},

	close() {
		this.setState({ showModal: false });
	},

	open() {
		this.setState({ showModal: true });
	},

 	handleToggle :function() { this.setState({open: !this.state.open}) },

 	handleClose : function() { this.setState({open: false}) },

	render: function() {

		  const styles = {	  	

			modalstyle: {
				padding:'0px',
				'margin-top':'100px'
			},

			logoimagestyle: {
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

		  	appbarstyleactive:
		  	{
		  		'border-bottom-width':'2px',
		  		'border-bottom-style':'solid',
		    	backgroundColor: '#4688C7',
		    	color: 'white',
		    	'font-size': '110%'
		  	},
		  	appbarstyle:
		  	{
		    	backgroundColor: '#4688C7',
		    	color: 'white',
		    	'font-size': '110%'
		    },
		    logostyle:
		    {
		    	width:'50%'
		    },
		    button:
		    {
		    	color:'white',
		    	'background-color':'#4688C7',
		    	'border-color':'white'
		    }
		  };

		return (
			<div>
				<Modal show={this.state.showModal} style={styles.modalstyle} onHide={this.close} >
					<Modal.Header closeButton>Login / Signup
					</Modal.Header>
					<Modal.Body>
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
								<Tabs defaultActiveKey={1}>
									<Tab eventKey={1} title="Login">
										<Grid bsClass="container-fluid">
											<Row>
												<TextField underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelText="Email Id" type="email" />
											</Row>
											<Row>
												<TextField underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelText="Password" type="password" />
											</Row>
											<Row>
												<a href="#"><h6 style={styles.h6}>Trouble Logging in ?</h6></a>
											</Row>
											<Row>
												<center><Button style={styles.loginbutton}>Login</Button></center>
											</Row>
										</Grid>
									</Tab>
									<Tab eventKey={2} title="Sign Up">
										<Grid bsClass="container-fluid">
											<Row>
												<TextField underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelText="Name" />
											</Row>
											<Row>
												<TextField underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelText="Email Id" type="email" />
											</Row>
											<Row>
												<TextField underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelText="Mobile Number" type="number" />
											</Row>
											<Row>
												<TextField underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelText="Password" type="password" />
											</Row>
											<Row>
												<center><Button style={styles.loginbutton}>Sign Up</Button></center>
											</Row>
										</Grid>
									</Tab>
								</Tabs>
								</Col>
							</Row>
						</Grid>
					</Modal.Body>
				</Modal>
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