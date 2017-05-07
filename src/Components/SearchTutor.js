import React from 'react';
import DailyNeedsDrawer from './DailyNeedsDrawer.js';
import {Grid,Row} from 'react-bootstrap';
import {RaisedButton} from 'material-ui';
import searchtutorhow from '../images/searchtutorhow.png';

var Content = React.createClass({

	render: function() {

		const styles = {	

			row:
			{
				'margin-top':'0.5em',
				backgroundColor: 'lightgray',
			},

			howitworks: 
			{
				backgroundColor:'#ECF3F9'
			},

			howitworks1: 
			{
				backgroundColor:'#ECF3F9',
				'padding-bottom':'2em'
			},

			imgsearch: {
				width:'30em',
				'margin-left':'10em'
			},

			searchbut: {
				'color':'white',
				'padding-left': '2em',
				'padding-right':'2em',
				backgroundColor:'#4688C7'
			}
		}

		return (

			<div>
			<Grid bsClass="container-fluid">
			<Row style={styles.row}>
			<center style={{'font-size':'1.3em'}}>Search Tutor</center>
			</Row>			
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<Row style={styles.howitworks}>
			<h3><center>How it Works</center></h3>
			</Row>
			<Row style={styles.howitworks}>
			<img src={searchtutorhow} style={styles.imgsearch} />
			</Row>
			<Row style={styles.howitworks1}>
			<a href="/leadgen" style={{'text-decoration':'none','color':'black'}}><center><RaisedButton buttonStyle={styles.searchbut}>Search Tutor</RaisedButton></center></a>
			</Row>
			</Grid>
			</div>
		);

	}
});

var searchtutor = React.createClass({
	render() {
		return (
			<div>
			<DailyNeedsDrawer />
			<Content />
			</div>
		);
	}
});

module.exports = searchtutor;