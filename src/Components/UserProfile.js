import React from 'react';
import ReactDOM from 'react-dom';
import MyDrawer from './Drawer.js';
import {FontIcon, Tabs, Tab, RaisedButton, PasswordField, AutoComplete, TextField, Paper, AppBar, Drawer, MenuItem, IconButton, FlatButton, Toolbar, ToolbarGroup} from 'material-ui';
import {Grid,Row,Col,Image,Carousel,ButtonToolbar,Button, Modal} from 'react-bootstrap';
import physicsbook from '../images/physicsbook.png';
import SwipeableViews from 'react-swipeable-views';
import visa from '../images/visa.gif';
import address from '../images/address.png';

var PersonalDetails = React.createClass({

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
							<span style={styles.formvalue}>Rahul Malhotra</span>
							<span style={styles.editprofile}>Edit Profile</span>
						</Col>
					</Row>					
					<br />
					<Row>
						<Col xs="12" md="3">
							<span style={styles.formlabel}>Email</span>
						</Col>
						<Col xs="12" md="9">
							<span style={styles.formvalue}>example@gmail.com</span>
						</Col>
					</Row>					
					<br />
					<Row>
						<Col xs="12" md="3">
							<span style={styles.formlabel}>Mobile Number</span>
						</Col>
						<Col xs="12" md="9">
							<span style={styles.formvalue}>+91-9900990099</span>
						</Col>
					</Row>					
					<br />
					<Row>
						<Col xs="12" md="3">
							<span style={styles.formlabel}>Date of Birth</span>
						</Col>
						<Col xs="12" md="9">
							<span style={styles.formvalue}>03/05/1996</span>
						</Col>
					</Row>					
					<br />
				</Grid>
			</div>
		);
	}

});

var ChangePassword = React.createClass({

	render: function() {

		const styles = {

			floatstyle: {
				'color': '#4688c7',
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
					<Row>
						<Col xs="12" md="12">
							<TextField type="password" underlineFocusStyle={styles.floatstyle} floatingLabelStyle={styles.floatstyle} floatingLabelText="Old Password" fullWidth={true} />
						</Col>
					</Row>
					<Row>
						<Col xs="12" md="12">
							<TextField type="password" underlineFocusStyle={styles.floatstyle} floatingLabelStyle={styles.floatstyle} floatingLabelText="New Password" fullWidth={true} />
						</Col>
					</Row>
					<Row>
						<Col xs="12" md="12">
							<TextField type="password" underlineFocusStyle={styles.floatstyle} floatingLabelStyle={styles.floatstyle} floatingLabelText="Confirm New Password" fullWidth={true} />
						</Col>
					</Row>
					<br />
					<Row>
						<Col xs="12" md="12">
							<RaisedButton label="Save" buttonStyle={styles.savebutton} labelStyle={styles.savebuttontext} />
						</Col>
					</Row>
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

			tabs: {
				'background': '#4688c7'
			},

			tabitemcontainer: {
				'background': 'white'
			},

			tab: {
				'color' : '#4688c7'
			},
			paper:{

				'padding-left': '2em',
				'padding-right': '2em'
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
								<Tab label="Saved Cards" style={styles.tab} value={2} />
								<Tab label="Delivery Address" style={styles.tab} value={3} />
							</Tabs>
							<SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>
								<div><PersonalDetails /></div>
								<div><ChangePassword /></div>
								<div><SavedCards /></div>
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