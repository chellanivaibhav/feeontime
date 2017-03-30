import React from 'react';
import ReactDOM from 'react-dom';
import MyDrawer from './Drawer.js';
import {Tabs, Tab, RaisedButton, PasswordField, AutoComplete, TextField, Paper, AppBar, Drawer, MenuItem, IconButton, FlatButton, Toolbar, ToolbarGroup} from 'material-ui';
import {Grid,Row,Col,Image,Carousel,ButtonToolbar,Button, Modal} from 'react-bootstrap';
import physicsbook from '../images/physicsbook.png';
import SwipeableViews from 'react-swipeable-views';

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
			tab: {
				'color': '#74a5d5',
				'background-color': 'white'
			},

			tabs: {
				'background-color': 'red'
			}
		}
		return (
			<div>
				<Grid bsClass="container-fluid">
					<Row>
						<Col xs="12" md="12">
							<Tabs onChange={this.handleChange} value={this.state.slideIndex}  inkBarStyle={styles.tabs}>
								<Tab label="Personal Details" buttonStyle={styles.tab} value={0} />
								<Tab label="Change Password" style={styles.tab} value={1} />
								<Tab label="Saved Cards" style={styles.tab} value={2} />
								<Tab label="Delivery Address" style={styles.tab} value={3} />
							</Tabs>
							<SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>
								<div>Personal Details</div>
								<div>Change Password</div>
								<div>Saved Cards</div>
								<div>Delivery Address</div>
							</SwipeableViews>
						</Col>
					</Row>
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