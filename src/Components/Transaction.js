import React from 'react';
import PayFeesDrawer from './PayFeesDrawer.js';
import {Grid,Row,Col} from 'react-bootstrap';
import {Paper,List,ListItem,RadioButtonGroup,RaisedButton,RadioButton,TextField,SelectField,MenuItem} from 'material-ui';
import wallet from '../images/wallet.png';
import cards from '../images/savedcards.png';
import internetbanking from '../images/internetbanking.png';
import otherwallets from '../images/otherwallets.png';
import upi from '../images/upi.png';
import aadhar from '../images/aadhar.png';
import Cookies from 'js-cookie';
var $ = require('jquery');
var sha512 = require('sha512')



var Component = React.createClass({

	getInitialState: function()
	{	
		return { value : 1,totalamount:100, amount: Cookies.get('studentfees'), pcode: '', firstname: '', email: '', phone: '', address: 'delhi', city: 'delhi',hash:'',insname:'',class:'',section:''}
	},

	componentDidMount: function()
	{
		this.fetchuserdata();
	},

	handlechange: function(event,index,value)
	{
		this.setState({value});
	},

	checkcc: function()
	{
		this.setState({ 
			pcode: 'cc'
		 });
	},
	
	checkdc: function()
	{
		this.setState({ 
			pcode: 'dc'
		 });
	},

	checknb: function()
	{
		this.setState({ 
			pcode: 'nb'
		 });
	},

	fetchuserdata: function()
	{
		alert('hi');
		var mydata={
			user_id: Cookies.get('userid')
		};
		let t = this;
		$.ajax({
			type: 'POST',
			url: 'http://52.41.82.157/Feeontime/index.php/User/getProfile',
			dataType: 'json',
			async: false,
			data: mydata,
			success: function(data)
			{
				if(data.success==true)
				{
					var data1 = data.message;
					var hash=sha512(t.state.totalamount+data1.name+data1.email+data1.phone);
					alert('inside');
					/*var hash=sha512(t.state.totalamount);
					alert(t.state.totalamount);
					alert(hash);*/
					//var hash(t.state.totalamount+)
					t.setState({
						firstname: data1.name,
						email: data1.email,
						phone: data1.phone,
						address: data1.address,
						hash:hash
					});

					
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
	};

	return (
			<div>
			<br />
			<Grid bsClass="container">
			<Paper zDepth="1" style={{'padding-top':'1em','padding-bottom':'1em'}}>
			<Row>
			<span style={{'margin-left':'2em','font-size':'1.5em'}}>Total Amount: &#8377;{this.state.amount}</span>
			</Row>
			<Row>
			<span style={{'margin-left':'2em','font-size':'1.5em'}}>Transaction ID: 123456</span>
			</Row>
			<Row>
			<span style={{'margin-left':'2em','font-size':'1.5em'}}>Student Name : Vaibhav </span>
			</Row>
			<Row>
			<span style={{'margin-left':'2em','font-size':'1.5em'}}>School Name : djksajdkas</span>
			</Row>
			<Row>
			<span style={{'margin-left':'2em','font-size':'1.5em'}}>Fee amount</span>
			</Row>
			<Row>
			<span style={{'margin-left':'2em','font-size':'1.5em'}}>internet handling charge</span>
			</Row>
			<Row>
			<span style={{'margin-left':'2em','font-size':'1.5em'}}>GST : 55</span>
			</Row>
			<Row>
			<span style={{'margin-left':'2em','font-size':'1.5em'}}>TOTAL</span>
			</Row>
			</Paper>
			</Grid>
			<br />
			<Grid bsClass="container">
			<Paper zDepth="1" style={{'padding-top':'1em','padding-bottom':'1em'}}>
			<Row>
			<Col md="3">
			{/*<List>
			<ListItem style={styles.list}>
			<Row>
			<Col md="3">
			<img src={wallet} height="20em"></img>&nbsp;
			</Col>
			<Col md="9">
			<span style={{'font-size':'1.2em'}}>FOT Wallet</span>
			</Col>
			</Row>
			</ListItem>
			<ListItem>
			<Row>
			<Col md="3">
			<img src={cards} height="20em"></img>&nbsp;
			</Col>
			<Col md="9">
			<span style={{'font-size':'1.2em'}}>Credit / Debit Card</span>
			</Col>
			</Row>
			</ListItem>
			<ListItem>
			<Row>
			<Col md="3">
			<img src={internetbanking} height="20em"></img>&nbsp;
			</Col>
			<Col md="9">
			<span style={{'font-size':'1.2em'}}>Internet Banking</span>
			</Col>
			</Row>
			</ListItem>
			<ListItem>
			<Row>
			<Col md="3">
			<img src={upi} height="15em"></img>&nbsp;
			</Col>
			<Col md="9">
			<span style={{'font-size':'1.2em'}}>UPI</span>
			</Col>
			</Row>
			</ListItem>
			<ListItem>
			<Row>
			<Col md="3">
			<img src={aadhar} height="20em"></img>&nbsp;
			</Col>
			<Col md="9">
			<span style={{'font-size':'1.2em'}}>Aadhar Card</span>
			</Col>
			</Row>
			</ListItem>
			<ListItem>
			<Row>
			<Col md="3">
			<img src={otherwallets} height="20em"></img>&nbsp;
			</Col>
			<Col md="9">
			<span style={{'font-size':'1.2em'}}>Other Wallets</span>
			</Col>
			</Row>
			</ListItem>
			</List>*/}
			</Col>
			<Col md="9">
			<Row>
			<RadioButtonGroup style={{'display':'flex','flexDirection':'row','margin-top':'1em'}}>
			<RadioButton onClick={this.checkcc} label="Credit Card" style={{'width':'10em', 'color':'red'}} value="creditcard" />
			<RadioButton onClick={this.checkdc} label="Debit Card" style={{'float':'left', 'width':'10em'}} value="debitcard" />
			<RadioButton onClick={this.checknb} label="Net Banking" style={{'float':'left', 'width':'20em'}} value="netbanking" />
			</RadioButtonGroup>
			</Row>
			{/*<Row>
			<TextField floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} textFieldStyle={styles.textFieldStyle} floatingLabelText="Card Number" type="number"/><br />
			</Row>
			<Row>
			<Col xs="12" md="6">
			<Row>
			<Col xs="12" md="6">
			<SelectField floatingLabelText="Month" autoWidth={true} style={{width:150}} value={this.state.value} onChange={this.handlechange} >
			<MenuItem value={1} primaryText="Jan" />
			<MenuItem value={2} primaryText="Feb" />
			<MenuItem value={3} primaryText="Mar" />
			<MenuItem value={4} primaryText="Apr" />
			<MenuItem value={5} primaryText="May" />
			<MenuItem value={6} primaryText="Jun" />
			<MenuItem value={7} primaryText="Jul" />
			<MenuItem value={8} primaryText="Aug" />
			<MenuItem value={9} primaryText="Sep" />
			<MenuItem value={10} primaryText="Oct" />
			<MenuItem value={11} primaryText="Nov" />
			<MenuItem value={12} primaryText="Dec" />
			</SelectField>
			</Col>
			<Col xs="12" md="6">
			<SelectField floatingLabelText="Year" autoWidth={true} style={{width:150}} value={this.state.value} onChange={this.handlechange} >
			<MenuItem value={1} primaryText="1990" />
			<MenuItem value={2} primaryText="1991" />
			<MenuItem value={3} primaryText="1992" />
			<MenuItem value={4} primaryText="1993" />
			<MenuItem value={5} primaryText="1994" />
			<MenuItem value={6} primaryText="1995" />
			<MenuItem value={7} primaryText="1996" />
			<MenuItem value={8} primaryText="1997" />
			<MenuItem value={9} primaryText="1998" />
			<MenuItem value={10} primaryText="1999" />
			<MenuItem value={11} primaryText="200" />
			<MenuItem value={12} primaryText="2001" />
			</SelectField>
			</Col>
			</Row>
			</Col>
			<Col xs="12" md="6">
			</Col>
			</Row>
			<Row>
			<TextField floatingLabelText="CVV" floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} textFieldStyle={styles.textFieldStyle} type="number"/><br />
			</Row>*/}
			<Row>
			<form method="POST" action="http://52.41.82.157/Feeontime/HDFC/example_2.php/">
			<input type="hidden" name="lastname" value={Cookies.get('studentfees')} />
			<input type="hidden" name="amount" value={this.state.totalamount} />
			<input type="hidden" name="firstname" value={this.state.firstname} />
			<input type="hidden" name="email" value={this.state.email} />
			<input type="hidden" name="phone" value={this.state.phone} />
			<input type="hidden" name="udf3" value={this.state.hash} />
			<input type="hidden" name="udf2" value={Cookies.get('userid')} />
			<input type="hidden" name="udf1" value={Cookies.get('enrollmentno')} />
			<input type="hidden" name="address2" value={this.state.institute_type} />
			<input type="hidden" name="iname" value={this.state.ins }/>
			<input type="hidden" name="city" value={this.state.city} />
			<input type="hidden" name="state" value='2' />
		<input type="hidden" name="country" value='A' />
			<input type="hidden" name="enforce_paymethod" value={this.state.pcode} />
			<RaisedButton type="submit" style={styles.button1}  buttonStyle={styles.button}>Pay Now</RaisedButton>
			</form>
			</Row>
			</Col>
			</Row>
			</Paper>
			</Grid>			
			</div>
		);
	}
});


var Transaction = React.createClass({
	
	render: function() {
		return (
			<div>
			<PayFeesDrawer />
			<Component />
			</div>
		);
	}
});

module.exports = Transaction;