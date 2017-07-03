import React from 'react';
import ReactDOM from 'react-dom';
import MyDrawer from './Drawer.js';
import {FontIcon, Tabs, Tab, RaisedButton, PasswordField, AutoComplete, TextField, Paper, AppBar, Drawer, MenuItem, IconButton, FlatButton, Toolbar, ToolbarGroup} from 'material-ui';
import {Grid,Row,Col,Image,Carousel,ButtonToolbar,Button, Modal} from 'react-bootstrap';
import physicsbook from '../images/physicsbook.png';
import SwipeableViews from 'react-swipeable-views';
import visa from '../images/visa.gif';
import address from '../images/address.png';
import Cookies from 'js-cookie';
var $ = require ('jquery');
var PersonalDetails = React.createClass({
	getInitialState :function()
	{
		var p = this.getapidata();
		//alert(p.name);
		return {
			userid:null,data:p
		};
		alert(p.name);
	},

	getapidata:function()
	{	
		var mydata={};
		var data2=[];
		var mydata={
			user_id:Cookies.get('userid')
		};
		function do_the_stuff(data)
		{
			for(var i=0;i<data.length;i++)
			{
				var c = data[i];
				data2.push(c);
			}
				
		}
		$.ajax({
			type:'POST',
			url:'http://52.41.82.157/Feeontime/index.php/User/getProfile',
			dataType: 'json',
			async: false,
			data: mydata,
			success: function(data)
			{	

				var data1 = data.message;
				//this.setState({userid:data1.id});
				//alert(data1.name);
				//do_the_stuff(data1);
				data2=data1;
				//alert(data2.name);
			},
			error: function (error) 
			{
				alert(JSON.stringify(error));
			}			
		});

		//alert(data2.name);				

		return data2;
	},
	

	render: function() {

		const styles = {

			formlabel: {
				
				'font-size': '1.5em',
				'float': 'right',
				'color': '#929292'
			},

			formvalue: {

				'font-size': '1.5em'
			},

			editprofile: {
				'float': 'right',
				'color': '#4688c7',
				'cursor': 'pointer'
			}
		}
		return (
			<div><br /><br />
				<Grid bsClass="container-fluid">
					<Row>
						<Col xs="12" md="3">
							<span style={styles.formlabel}>Name</span>
						</Col>
						<Col xs="12" md="9">
							<span style={styles.formvalue}>{this.state.data.name}</span>
							<span style={styles.editprofile}>Edit Profile</span>
						</Col>
					</Row>					
					<br />
					<Row>
						<Col xs="12" md="3">
							<span style={styles.formlabel}>Email</span>
						</Col>
						<Col xs="12" md="9">
							<span style={styles.formvalue}>{this.state.data.email}</span>
						</Col>
					</Row>					
					<br />
					<Row>
						<Col xs="12" md="3">
							<span style={styles.formlabel}>Mobile Number</span>
						</Col>
						<Col xs="12" md="9">
							<span style={styles.formvalue}>{this.state.data.phone}
							</span>
						</Col>
					</Row>					
					<br />
					<Row>
						<Col xs="12" md="3">
							<span style={styles.formlabel}>Date of Birth</span>
						</Col>
						<Col xs="12" md="9">
							<span style={styles.formvalue}>{this.state.data.dob }</span>
						</Col>
					</Row>					
					<br />
				</Grid>
			</div>
		);
	}

});

var ChangePassword = React.createClass({

	getInitialState :function()
	{
		return {
			userid:null,data:'',onepassword:'',old:false,secondpassword:'',status:false
		};
	},

	 onBlurOne: function(event) {
    this.setState({onepassword: event.target.value});
    
  },
  onBlurSecond: function(event) {
    this.setState({secondpassword: event.target.value});
    
  },
  onBlurold: function(event) {
    this.setState({old: !this.state.old});
    
  },
  reset :function()
  {	
  	
  	var data2=[];
  	var mydata={
			user_id:Cookies.get('userid'),
			password:this.state.onepassword
		};

	$.ajax({
			type:'POST',
			url:'http://52.41.82.157/Feeontime/index.php/User/reset_password',
			dataType: 'json',
			async: false,
			data: mydata,
			success: function(data)
			{	

				var data1 = data.message;
				
					
				data2=data1;
				
			},
			error: function (error) 
			{
				alert(JSON.stringify(error));
			}			
		});
	
		this.setState({status:data2});
  },
  handleTouch : function()
  {
  	if(!this.state.old)
  	{

  		if(this.state.onepassword==this.state.secondpassword)
  		{
  			this.reset();
  		}	
  		else
  		{
  			alert("Passwords Do Not Match")
  		}
  	}
  	else
  	{
  		alert("Please Enter Old Password")
  	}
  },
	handleChange:function(event)
	{
		const target = event.target;
		const value = target.value;
		const password = target.password;

		this.setState({
			[password]: value
		});
	},

	render: function() {

		const styles = {

			floatstyle: {
				
				'color': '#929292',
				'border-color': '#4688c7'
			},

			savebutton: {
				'background-color': '#4688c7',
			},

			savebuttontext: {
				'color':'white'
			}

		}
		return (
			<div>
				<Grid bsClass="container-fluid">
					{

						this.state.status ? 

						(
						<div style={{'float':'center','margin-right':'5em'}}>
						<Row >
						<Col>Successful attempt</Col>
						</Row>
						</div>
						)
						:
						(
						<div>
						<Row>
						<Col xs="12" md="12">
							<TextField type="password" underlineFocusStyle={styles.floatstyle} floatingLabelStyle={styles.floatstyle} floatingLabelText="Old Password" fullWidth={true} />
						</Col>
					</Row>
					<Row>
						<Col xs="12" md="12">
							<TextField type="password" underlineFocusStyle={styles.floatstyle} onBlur={this.onBlurOne.bind(this)} floatingLabelStyle={styles.floatstyle} floatingLabelText="New Password" fullWidth={true} />
						</Col>
					</Row>
					<Row>
						<Col xs="12" md="12">
							<TextField type="password" onBlur={this.onBlurSecond.bind(this)} underlineFocusStyle={styles.floatstyle} floatingLabelStyle={styles.floatstyle} floatingLabelText="Confirm New Password" fullWidth={true} />
						</Col>
					</Row>
					<br />
					<Row>
						<Col xs="12" md="12">
							<RaisedButton label="Save" onTouchTap={this.handleTouch} buttonStyle={styles.savebutton} labelStyle={styles.savebuttontext} />
						</Col>
					</Row>
					</div>
						)


					}
					<br />
				</Grid>
			</div>
		);
	}

});

var SavedCards = React.createClass({

	render: function() {

		const styles = {

			imgdes: {

				'width': '100%'
			},
			cardtextstyle: {
				'padding-top': '1em',
				'font-size': '1.5em',
				'color': '#929292'
			},
			bankname: {
				'float': 'right',
				'font-size': '0.75em'
			},
			cardpad: {
				'padding-right': '2em'
			},
			removebut: {
				'float': 'right'
			},
			label: {
				'color': '#4688c7'
			}
		}
		return (
			<div><br />
				<Grid bsClass="container-fluid">
					<Row>
						<Col xs="12" md="4">
							<Paper zDepth="3">
								<Grid bsClass="container-fluid" style={styles.cardpad}>
									<Row>
										<Col xs="4" md="4">
											<Image src={visa} style={styles.imgdes} />
										</Col>
										<Col xs="8" md="8" style={styles.cardtextstyle}>
											<Row>**************1122</Row>
											<Row><span style={styles.bankname}>HDFC</span></Row>
											<Row><FlatButton label="Remove" labelStyle={styles.label} icon={ <i className="material-icons" style={{color: '#4688c7'}}>delete</i>} style={styles.removebut} /></Row>
										</Col>
									</Row>
								</Grid>
							</Paper>
						</Col>
					</Row>
					<br />
				</Grid>
			</div>
		);
	}

});

var SavedCoupons = React.createClass({

	render: function() {

		const styles = {

			imgdes: {

				'width': '100%'
			},
			cardtextstyle: {
				'padding-top': '1em',
				'font-size': '1.5em',
				'color': '#929292'
			},
			bankname: {
				'float': 'right',
				'font-size': '0.75em'
			},
			cardpad: {
				'padding-right': '2em'
			},
			removebut: {
				'float': 'right'
			},
			label: {
				'color': '#4688c7'
			}
		}
		return (
			<div><br />
				<Grid bsClass="container-fluid">
					<Row>
					<Col xs="12" md="3">
					<Grid bsClass="container-fluid" style={styles.couponstyle}>
					<Row>
					<Image src="http://media.dontpayfull.com/media/deals/walmart-coupons.jpg" width="100%" />
					</Row>
					<Row style={{'background':'#4688C7'}}>
					<FlatButton style={{'color':'white','text-align':'center','width':'100%'}}>Redeem</FlatButton>
					</Row>
					</Grid>
					</Col>
					<Col xs="12" md="3">
					<Grid bsClass="container-fluid" style={styles.couponstyle}>
					<Row>
					<Image src="http://media.dontpayfull.com/media/deals/walmart-coupons.jpg" width="100%" />
					</Row>
					<Row style={{'background':'#4688C7'}}>
					<FlatButton style={{'color':'white','text-align':'center','width':'100%'}}>Redeem</FlatButton>
					</Row>
					</Grid>
					</Col>
					<Col xs="12" md="3">
					<Grid bsClass="container-fluid" style={styles.couponstyle}>
					<Row>
					<Image src="http://media.dontpayfull.com/media/deals/walmart-coupons.jpg" width="100%" />
					</Row>
					<Row style={{'background':'#4688C7'}}>
					<FlatButton style={{'color':'white','text-align':'center','width':'100%'}}>Redeem</FlatButton>
					</Row>
					</Grid>
					</Col>
					<Col xs="12" md="3">
					<Grid bsClass="container-fluid" style={styles.couponstyle}>
					<Row>
					<Image src="http://media.dontpayfull.com/media/deals/walmart-coupons.jpg" width="100%" />
					</Row>
					<Row style={{'background':'#4688C7'}}>
					<FlatButton style={{'color':'white','text-align':'center','width':'100%'}}>Redeem</FlatButton>
					</Row>
					</Grid>
					</Col>
					</Row>
				</Grid>
			</div>
		);
	}

});

var DeliveryAddress = React.createClass({

	render: function() {

		const styles = {

			leftcol: {

				'border-right': '1px solid gray'
			},

			imgstyle: {

				'width': '100%'
			},

			address: {

				'color': '#4688c7',
				'font-size': '1.5em',
			}

		}
		return (
			<div><br />
				<Grid bsClass="container-fluid">
					<Row>
						<Col xs="12" md="3" style={styles.leftcol}>
						Name<br />Address Line 1<br />Address Line 2<br />City, State<br />Pincode
						</Col>
						<Col xs="12" md="9">
							<Row>
								<Col xs="12" md="2"><Image src={address} style={styles.imgstyle} /></Col>
								<Col xs="12" md="10"><span style={styles.address}><br />Add Address</span></Col>
							</Row>
						</Col>
					</Row>
					<br />
				</Grid>
			</div>
		);
	}

});

var Container = React.createClass({

	getInitialState: function() {
		return { slideIndex:0 };
	},

	handleChange: function(value) {

		this.setState({
			slideIndex: value
		});
	},

	render: function() {
		const styles = {

			tabs:
			{
				'background': '#4688c7'
			},

			tabitemcontainer:
			{	

				'background': 'white'
			},
			gridstyle:
			{
				'margin-right':'2em',
				'margin-left':'9em',
				'width':"85%",
				
				'margin-top':'12.7em'
			},

			tab: {
				
				'text-transform':'capitalize',
				'font-weight':75,
				'font-size':'2.1em',
				'color' : '#4688c7'
			},
			paper:{
				
				'height':"400px",
				'padding-top':'3em',
				'padding-left': '1em',
				'padding-right': '1em'
				

			}

		}
		return (
			<div>
				<br />
				<Grid bsClass="container" style={styles.gridstyle}>
					<Paper zDepth={5} style={styles.paper}>
					<Row>
						<Col xs="12" md="12">
							<Tabs onChange={this.handleChange} tabItemContainerStyle={styles.tabitemcontainer} value={this.state.slideIndex} inkBarStyle={styles.tabs}>
								<Tab label="Personal Details" buttonStyle={styles.tab} value={0} />
								<Tab label="Change Password" style={styles.tab} value={1} />
								<Tab label="My Coupons" style={styles.tab} value={2} />
								<Tab label="Delivery Address" style={styles.tab} value={3} />
							</Tabs>
							<SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>
								<div><PersonalDetails /></div>
								<div><ChangePassword /></div>
								<div><SavedCoupons /></div>
								<div><DeliveryAddress /></div>
							</SwipeableViews>
						</Col>
					</Row>
					</Paper>
				</Grid>
			</div>
		);
	}

});

var UserProfile = React.createClass({

	render: function() {
		return (
			<div>
				<MyDrawer />
				<Container />
			</div>
		);
	}

});

module.exports = UserProfile;