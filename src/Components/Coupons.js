import React from 'react';
import PayFeesDrawer from './PayFeesDrawer.js';
import {Grid,Row,Col,Image,Button} from 'react-bootstrap';
import {Paper,List,FlatButton,ListItem,RadioButtonGroup,RaisedButton,RadioButton,TextField,SelectField,MenuItem} from 'material-ui';
import wallet from '../images/wallet.png';
import cards from '../images/savedcards.png';
import internetbanking from '../images/internetbanking.png';
import otherwallets from '../images/otherwallets.png';
import upi from '../images/upi.png';
import aadhar from '../images/aadhar.png';
import Cookies from 'js-cookie';
var $ = require('jquery');

var Component = React.createClass({

	getInitialState: function()
	{
		return { value : 1, amount: Cookies.get('studentfees'),noofcoupons:0, pcode: '', firstname: '', email: '', phone: '', address: 'delhi', city: 'Delhi',institutename:'' }
	},

	componentDidMount: function()
	{
		this.fetchcouponsdata();
	},

	handlechange: function(event,index,value)
	{
		this.setState({value});
	},
	clickbutton: function(value) {
		if(value==0)
		{
			
		}
		else if(value==1)
		{
			
		}
		
	},
	fetchcouponsdata: function()
	{
		var mydata={
			limit: 10
		};

		var data2=[];

		function do_the_stuff(data)
		{
			for(var i=0;i<data.length;i++)
			{
				var c = data[i];
				data2.push(c);
			}
		}

		$.ajax({
			type: 'POST',
			url: 'http://52.41.82.157/Feeontime/index.php/FeePayment/coupons',
			dataType: 'json',
			async: false,
			data: mydata,
			success: function(data)
			{
				if(data.success==true)
				{
					var data1 = data.message;
					do_the_stuff(data1);
				}
				else
				{
					alert('user data not available');
				}
			},
		    error: function (error) 
		    {
				alert(JSON.stringify(error));
		    }			
		});

		return data2;
	},

	render: function() {

	var styles = {

		'listactive': {

			'border':'1px solid red'
		},
		
		button:
	    {
	    	color:'white',
	    	'background-color':'#4688C7',
	    	'padding-left':'2em',
	    	'padding-right':'2em',
	    },
	    button1:
	    {
	    	'margin-top':'1em',
	    	'margin-left':'3em'
	    },

		floatingLabelFocusStyle: {
				color: '#4688C7',
		},

		underlineFocusStyle: {
			borderColor: '#4688C7'
		},

		textFieldStyle: {
			height:'4em',
			width:'100%',
			background:'#dbe8f4'
		},

		proceedtopay: {
			'color':'white',
			'padding-left':'1.5em',
			'padding-right':'1.5em',
			'background-color':'#4688C7',
		},

		couponstyle: {
			'margin-left':'1.5em',
			'margin-bottom':'2em',
			'font-size':'1.2em',
			'margin-right':'1.5em',
			'color':'white',
			'border':'2px solid #4688C7'
		}
	};

	return (
			<div>
			<br/>
			<Grid bsClass="container">
			<Paper zDepth="1" style={{'padding-top':'1em','padding-bottom':'1em'}}>
			<Row>
			<Col xs="12" md="8">
			<Row>
			<span style={{'margin-left':'2em','font-size':'1.5em'}}>{Cookies.get('insname')} , {this.state.city}</span>
			<span style={{'margin-left':'2em','font-size':'1.5em'}}> &#8377;{this.state.amount}</span>
			</Row>
			</Col>
			<Col xs="12" md="4" style={{'padding-top':'0.5em'}} >
			<a href="/transaction"><RaisedButton bsStyle="primary" buttonStyle={styles.proceedtopay} labelStyle={styles.proceedtopay}>Proceed to Pay</RaisedButton></a>
			</Col>
			</Row>
			</Paper>
			</Grid>
			<br />
			<Grid bsClass="container">
			<Paper zDepth="1" style={{'padding-top':'1em','padding-bottom':'1em'}}>
			<Row>


			<Col xs="12" md="3">
			<Grid bsClass="container-fluid" style={styles.couponstyle}>
			<Row>
			<Image src="http://media.dontpayfull.com/media/deals/walmart-coupons.jpg" width="100%" />
			</Row>
			<Row style={{'background':'#4688C7'}}>
			<FlatButton onClick={() => this.clickbutton(0)} style={{'color':'white','text-align':'center','width':'100%'}}>Save</FlatButton>
			</Row>
			</Grid>
			</Col>





			<Col xs="12" md="3">
			<Grid bsClass="container-fluid" style={styles.couponstyle}>
			<Row>
			<Image src="http://media.dontpayfull.com/media/deals/walmart-coupons.jpg" width="100%" />
			</Row>
			<Row style={{'background':'#4688C7'}}>
			<FlatButton style={{'color':'white','text-align':'center','width':'100%'}}>Save</FlatButton>
			</Row>
			</Grid>
			</Col>



			<Col xs="12" md="3">
			<Grid bsClass="container-fluid" style={styles.couponstyle}>
			<Row>
			<Image src="http://media.dontpayfull.com/media/deals/walmart-coupons.jpg" width="100%" />
			</Row>
			<Row style={{'background':'#4688C7'}}>
			<FlatButton style={{'color':'white','text-align':'center','width':'100%'}}>Save</FlatButton>
			</Row>
			</Grid>
			</Col>
			<Col xs="12" md="3">
			<Grid bsClass="container-fluid" style={styles.couponstyle}>
			<Row>
			<Image src="http://media.dontpayfull.com/media/deals/walmart-coupons.jpg" width="100%" />
			</Row>
			<Row style={{'background':'#4688C7'}}>
			<FlatButton style={{'color':'white','text-align':'center','width':'100%'}}>Save</FlatButton>
			</Row>
			</Grid>
			</Col>
			</Row>
			<Row>
			<Col xs="12" md="3">
			<Grid bsClass="container-fluid" style={styles.couponstyle}>
			<Row>
			<Image src="http://media.dontpayfull.com/media/deals/walmart-coupons.jpg" width="100%" />
			</Row>
			<Row style={{'background':'#4688C7'}}>
			<FlatButton style={{'color':'white','text-align':'center','width':'100%'}}>Save</FlatButton>
			</Row>
			</Grid>
			</Col>
			<Col xs="12" md="3">
			<Grid bsClass="container-fluid" style={styles.couponstyle}>
			<Row>
			<Image src="http://media.dontpayfull.com/media/deals/walmart-coupons.jpg" width="100%" />
			</Row>
			<Row style={{'background':'#4688C7'}}>
			<FlatButton style={{'color':'white','text-align':'center','width':'100%'}}>Save</FlatButton>
			</Row>
			</Grid>
			</Col>
			<Col xs="12" md="3">
			<Grid bsClass="container-fluid" style={styles.couponstyle}>
			<Row>
			<Image src="http://media.dontpayfull.com/media/deals/walmart-coupons.jpg" width="100%" />
			</Row>
			<Row style={{'background':'#4688C7'}}>
			<FlatButton style={{'color':'white','text-align':'center','width':'100%'}}>Save</FlatButton>
			</Row>
			</Grid>
			</Col>
			<Col xs="12" md="3">
			<Grid bsClass="container-fluid" style={styles.couponstyle}>
			<Row>
			<Image src="http://media.dontpayfull.com/media/deals/walmart-coupons.jpg" width="100%" />
			</Row>
			<Row style={{'background':'#4688C7'}}>
			<FlatButton style={{'color':'white','text-align':'center','width':'100%'}}>Save</FlatButton>
			</Row>
			</Grid>
			</Col>
			</Row>
			</Paper>
			</Grid>			
			</div>
		);
	}
});


var Coupon = React.createClass({
	
	render: function() {
		return (
			<div>
			<PayFeesDrawer />
			<Component />
			</div>
		);
	}
});

module.exports = Coupon;