import React from 'react';
import ReactDOM from 'react-dom';
import DailyNeedsDrawer from './DailyNeedsDrawer.js';
import {RaisedButton, PasswordField, AutoComplete, TextField, Paper, AppBar, Drawer, MenuItem, IconButton, FlatButton, Toolbar, ToolbarGroup} from 'material-ui';
import {Grid,Row,Col,Image,Carousel,ButtonToolbar,Button, Modal, Tabs, Tab} from 'react-bootstrap';
import physicsbook from '../images/physicsbook.png';

var Container = React.createClass({

	render: function() {

		const styles = {

			book: {

				'font-size': '10em'
			},

			filter: {

				'font-size': '1.2em'
			},

			filter1: {

				'font-size': '1.2em',
				'float': 'right',
				'margin-right': '5em'
			},

			leftcont: {
				'height':'50em',
				'background':'white',
			},

			hr: {
				'margin' : '0',
				'height': '0px',
				'border': '1px solid #bdc2c7'
			},
			cont: {

				'background': '#ecf3f9'
			},
			book: {
				'font-size' : '1.5em',
				'width' : '100%'
			},
			h4: {
				'font-size':'0.7em',
				'color':'#518FCA'
			},
			h2: {
				'font-size':'1.2em',
			},
			h3: {
				'font-size':'1.2em',
				'color':'#9B9C9F'
			},
			bookcont: {
				'padding-left':'4em',
				'padding-right':'3em',
				'background':'white'
			}
		}
		return (

			<Grid bsClass="container-fluid" style={styles.cont}>
				<Row>
					<Col md="12" xs="12">
						<h3><center>Books</center></h3>
					</Col>
				</Row>
				<hr style={styles.hr} />
				<Row>
					<Col md="12" xs="12">
						<span style={styles.filter} >&nbsp;Filter:</span>
						<span style={styles.filter1}>sort by:</span>
					</Col>
				</Row>
				<hr style={styles.hr} />
				<br />
				<Row>
					<Col xs="12" md="4">
						<Grid bsClass="container-fluid">
							<Row style={styles.leftcont} ></Row>
						</Grid>
					</Col>
					<Col xs="12" md="8">
						<Row>
							<Col xs="12" md="3" style={styles.bookcont}>
							<Row>
							<center><Image src={physicsbook} style={styles.book} /></center>
							</Row>
							<Row>
							<h4 style={styles.h4}>PHYSICS NCERT BOOK</h4>
							</Row>
							<Row>
							<Col xs="12" md="12">
							<span style={styles.h2}>&#8377; 800</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style={styles.h3}><del>&#8377; 800</del></span>
							</Col>
							</Row>
							</Col>
							<Col xs="12" md="3" style={styles.bookcont}>
							<Row>
							<center><Image src={physicsbook} style={styles.book} /></center>
							</Row>
							<Row>
							<h4 style={styles.h4}>PHYSICS NCERT BOOK</h4>
							</Row>
							<Row>
							<Col xs="12" md="12">
							<span style={styles.h2}>&#8377; 800</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style={styles.h3}><del>&#8377; 800</del></span>
							</Col>
							</Row>
							</Col>
							<Col xs="12" md="3" style={styles.bookcont}>
							<Row>
							<center><Image src={physicsbook} style={styles.book} /></center>
							</Row>
							<Row>
							<h4 style={styles.h4}>PHYSICS NCERT BOOK</h4>
							</Row>
							<Row>
							<Col xs="12" md="12">
							<span style={styles.h2}>&#8377; 800</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style={styles.h3}><del>&#8377; 800</del></span>
							</Col>
							</Row>
							</Col>
							<Col xs="12" md="3" style={styles.bookcont}>
							<Row>
							<center><Image src={physicsbook} style={styles.book} /></center>
							</Row>
							<Row>
							<h4 style={styles.h4}>PHYSICS NCERT BOOK</h4>
							</Row>
							<Row>
							<Col xs="12" md="12">
							<span style={styles.h2}>&#8377; 800</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style={styles.h3}><del>&#8377; 800</del></span>
							</Col>
							</Row>
							</Col>
						</Row>
						<Row>
							<Col xs="12" md="3" style={styles.bookcont}>
							<Row>
							<center><Image src={physicsbook} style={styles.book} /></center>
							</Row>
							<Row>
							<h4 style={styles.h4}>PHYSICS NCERT BOOK</h4>
							</Row>
							<Row>
							<Col xs="12" md="12">
							<span style={styles.h2}>&#8377; 800</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style={styles.h3}><del>&#8377; 800</del></span>
							</Col>
							</Row>
							</Col>
							<Col xs="12" md="3" style={styles.bookcont}>
							<Row>
							<center><Image src={physicsbook} style={styles.book} /></center>
							</Row>
							<Row>
							<h4 style={styles.h4}>PHYSICS NCERT BOOK</h4>
							</Row>
							<Row>
							<Col xs="12" md="12">
							<span style={styles.h2}>&#8377; 800</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style={styles.h3}><del>&#8377; 800</del></span>
							</Col>
							</Row>
							</Col>
							<Col xs="12" md="3" style={styles.bookcont}>
							<Row>
							<center><Image src={physicsbook} style={styles.book} /></center>
							</Row>
							<Row>
							<h4 style={styles.h4}>PHYSICS NCERT BOOK</h4>
							</Row>
							<Row>
							<Col xs="12" md="12">
							<span style={styles.h2}>&#8377; 800</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style={styles.h3}><del>&#8377; 800</del></span>
							</Col>
							</Row>
							</Col>
							<Col xs="12" md="3" style={styles.bookcont}>
							<Row>
							<center><Image src={physicsbook} style={styles.book} /></center>
							</Row>
							<Row>
							<h4 style={styles.h4}>PHYSICS NCERT BOOK</h4>
							</Row>
							<Row>
							<Col xs="12" md="12">
							<span style={styles.h2}>&#8377; 800</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style={styles.h3}><del>&#8377; 800</del></span>
							</Col>
							</Row>
							</Col>
						</Row>
						<Row>
							<Col xs="12" md="3" style={styles.bookcont}>
							<Row>
							<center><Image src={physicsbook} style={styles.book} /></center>
							</Row>
							<Row>
							<h4 style={styles.h4}>PHYSICS NCERT BOOK</h4>
							</Row>
							<Row>
							<Col xs="12" md="12">
							<span style={styles.h2}>&#8377; 800</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style={styles.h3}><del>&#8377; 800</del></span>
							</Col>
							</Row>
							</Col>
							<Col xs="12" md="3" style={styles.bookcont}>
							<Row>
							<center><Image src={physicsbook} style={styles.book} /></center>
							</Row>
							<Row>
							<h4 style={styles.h4}>PHYSICS NCERT BOOK</h4>
							</Row>
							<Row>
							<Col xs="12" md="12">
							<span style={styles.h2}>&#8377; 800</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style={styles.h3}><del>&#8377; 800</del></span>
							</Col>
							</Row>
							</Col>
							<Col xs="12" md="3" style={styles.bookcont}>
							<Row>
							<center><Image src={physicsbook} style={styles.book} /></center>
							</Row>
							<Row>
							<h4 style={styles.h4}>PHYSICS NCERT BOOK</h4>
							</Row>
							<Row>
							<Col xs="12" md="12">
							<span style={styles.h2}>&#8377; 800</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style={styles.h3}><del>&#8377; 800</del></span>
							</Col>
							</Row>
							</Col>
							<Col xs="12" md="3" style={styles.bookcont}>
							<Row>
							<center><Image src={physicsbook} style={styles.book} /></center>
							</Row>
							<Row>
							<h4 style={styles.h4}>PHYSICS NCERT BOOK</h4>
							</Row>
							<Row>
							<Col xs="12" md="12">
							<span style={styles.h2}>&#8377; 800</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style={styles.h3}><del>&#8377; 800</del></span>
							</Col>
							</Row>
							</Col>
						</Row>
					</Col>
				</Row>
			</Grid>
		);
	}

});

var DailyNeeds = React.createClass({

	render: function() {
		return (
			<div>
				<DailyNeedsDrawer />
				<Container />
			</div>
		);
	}

});

module.exports = DailyNeeds;