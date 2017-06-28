import React from 'react';
import ReactDOM from 'react-dom';
import MyDrawer from './Drawer.js';
import {FontIcon, Tabs, Tab, RaisedButton, PasswordField, AutoComplete, TextField, Paper, AppBar, Drawer, MenuItem, IconButton, FlatButton, Toolbar, ToolbarGroup} from 'material-ui';
import {Grid,Row,Col,Image,Carousel,ButtonToolbar,Button, Modal} from 'react-bootstrap';
import physicsbook from '../images/physicsbook.png';
import SwipeableViews from 'react-swipeable-views';
import visa from '../images/visa.gif';
import darshan from '../images/darshan.png';
import address from '../images/address.png';

var PersonalDetails = React.createClass({

	render: function() {

		const styles = {

			line: {
				'border-top': '1px solid #e5e5e5',
				'border-bottom': '1px solid #e5e5e5',
				'font-size': '1.5em'
			},
			date: {
				'color': '#a2a2a2'
			},
			transaction: {
				'color': '#5b5b5b'
			},
			image: {
				'width': '100%'
			},
			ttext: {
				'padding-top':'0.8em'
			},
			institute: {
				'color': '#5a95cd'
			},
			classp: {
				'color': '#a2a2a2'
			},
			rupees: {
				'float':'right'
			},
			label: {
				'color':'#5a95cd'
			},
			repeatbut: {
				'border-radius': '20px',
				'border': '1px solid #5a95cd'
			},
			srow: {
				'padding-top': '0.2em',
				'padding-bottom': '1em'
			}
		}
		return (
			<div>
			<br /><br />
			<Grid bsClass="container-fluid" style={styles.line}><br />
				<Row>
					<Col md="2" xs="12" />
					<Col md="10" xs="12">
						<span style={styles.transaction}>Transaction id: 23456789</span>
					</Col>
				</Row>
				<Row>
					<Col md="2" xs="12" />
					<Col md="10" xs="12">
						<span style={styles.date}>25 feb 2017</span>
					</Col>
				</Row>
				<Row>
					<Col md="2" xs="12" />
					<Col md="8" xs="12">
						<Row>
							<Col md="2">
								<Image src={darshan} style={styles.image} />
							</Col>
							<Col md="10" style={styles.ttext}>
								<Row>
								<span style={styles.institute}>Darshan Academy</span>
								<span style={styles.rupees}>&#8377; 12,000</span>
								</Row>
								<Row style={styles.srow}>
								<span style={styles.classp}>Class VI</span>
								<span style={styles.rupees}><FlatButton labelStyle={styles.label} style={styles.repeatbut} label="Repeat"/></span>
								</Row>
							</Col>
						</Row>
					</Col>
					<Col md="2" xs="12" />
				</Row>
			</Grid>
			<br /><br />
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

			gridstyle:
			{
				'margin-right':'2em',
				'margin-left':'9em',
				'width':"85%",
				
				'margin-top':'12.7em'
			},
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
								<Tab label="All" buttonStyle={styles.tab} value={0} />
								<Tab label="Fees" style={styles.tab} value={1} />
								<Tab label="Daily Needs" style={styles.tab} value={2} />
								<Tab label="Shop" style={styles.tab} value={3} />
							</Tabs>
							<SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>
								<div><PersonalDetails /></div>
								<div><h1>Fees</h1></div>
								<div><h1>Daily Needs</h1></div>
								<div><h1>Shop</h1></div>
							</SwipeableViews>
						</Col>
					</Row>
					</Paper>
				</Grid>
			</div>
		);
	}

});

var TransactionHistory = React.createClass({

	render: function() {
		return (
			<div>
				<MyDrawer />
				<Container />
			</div>
		);
	}

});

module.exports = TransactionHistory;