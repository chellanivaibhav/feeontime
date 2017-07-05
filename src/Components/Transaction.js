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

	getInitialState : function() {		
		
		return {
value : '', amount: '', pcode: '', firstname: '', email: '', phone:0, address: 'delhi', city: 'delhi',hash:'',insname:'',class:'',section:'',cccharge:'',dccharge:'',netcharge:'',internetcharge:0,totalamount:0

		};
	},

	
	
	componentDidMount: function()
	{
		this.fetchuserdata();
		this.fetchinstitutedata();
		

	},

	handlechange: function(event,index,value)
	{
		this.setState({value});
	},

	checkcc: function()
	{
		//alert(this.state.cccharge);
		//does fucntion execution after setstate  has completed
		this.setState({ 
			pcode: 'cc',
			internetcharge: this.state.cccharge
		 }, () => { 
		    
		    this.aftercheck(); 
		});
		/*this.setState({ 
			pcode: 'cc',
			internetcharge: this.state.cccharge
		 });
		this.aftercheck();*/
		/*this.createTotalAmount();
		this.createHash();*/
		//this.setState{(internetcharge:this.state.cccharge)};
	},
	
	checkdc: function()
	{
		
		//alert(this.state.dccharge);
			
		this.setState({ 
			pcode: 'dc',
			internetcharge: this.state.dccharge
		 }, () => { 
		    
		    this.aftercheck(); 
		});

		
		/*this.createTotalAmount();
		this.createHash();*/
	},

	checknb: function()
	{
		//alert(this.state.netcharge);

		this.setState({ 
			pcode: 'nb',
			internetcharge: this.state.netcharge
		 }, () => { 
		    
		    this.aftercheck(); 
		});
		



		/*this.setState({ 
			pcode: 'nb',
			internetcharge: this.state.netcharge
		 });
		this.aftercheck();*/
		
	},
	aftercheck :function()
	{
		this.createTotalAmount();
		//this.createHash();
	},

	fetchuserdata: function()
	{
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
					//alert('hi');
					var data1 = data.message;
					/*var hash=sha512(parseInt(this.state.totalamount,10)+data1.name+data1.email+data1.phone);*/
					//alert(data1.name);
					//alert(data1.email);

					//alert(hash);
					t.setState({
						//firstname: data1.name,
						email: data1.email,
						phone: data1.phone,
						address: data1.address,
						//hash:hash
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


	createTotalAmount:function()
	{	
		//alert(typeof Cookies.get('studentfees'));
		//alert(parseInt(Cookies.get('studentfees'),10));
		//alert(this.state.internetcharge);
		//alert('hi');
		//alert(this.state.internetcharge);
		//alert(parseInt(Cookies.get('studentfees'),10)+parseInt(this.state.internetcharge,10)+parseInt(this.state.internetcharge,10)*0.18);
		/*this.setState({totalamount:parseInt(Cookies.get('studentfees'),10)+parseInt(this.state.internetcharge,10)+parseInt(this.state.internetcharge,10)*0.18});*/
		this.setState({ 
			totalamount:parseInt(Cookies.get('studentfees'),10)+parseInt(this.state.internetcharge,10)+parseInt(this.state.internetcharge,10)*0.18 ,
			
		 }, () => { 
		    
		    this.createHash(); 
		});
		//alert(this.state.totalamount);
		
	},
	createHash : function()
	{
		//alert(parseInt(this.state.phone,10));
		//alert(this.state.phone);
		//alert(this.state.totalamount);
		//alert(typeof this.state.totalamount);
		//alert(this.state.totalamount);
		//alert(typeof this.state.totalamount);
		//alert(typeof parseInt(this.state.phone,10));
		//alert(this.state.totalamount.toString()+Cookies.get('studentname')+this.state.email+this.state.phone);
		var str=this.state.totalamount+Cookies.get('studentname')+this.state.email+this.state.phone;
		/*var hash=sha512(str);
		console.log(str);

		alert(sha512('hello'));
		console.log(hash);*/
		//alert(hash);
		var jsSHA = require("jssha");
		var shaObj = new jsSHA("SHA-512", "TEXT");
		shaObj.update(str);
		var hash = shaObj.getHash("HEX");
		/**/
		/*alert('lastname'+Cookies.get('studentfees'));
		alert('amount'+this.state.totalamount);
		alert('firstname'+Cookies.get('studentname'));
		alert('email'+this.state.email);
		alert('phone'+this.state.phone);
		alert('udf3'+hash);
		alert('udf2'+Cookies.get('userid'));
		alert('udf1'+Cookies.get('enrollmentno'));
		alert('address2'+Cookies.get('type'));
		alert('ianme'+Cookies.get('insname'));
		alert('city'+Cookies.get('locationname'));
		alert('state'+Cookies.get('studentclass'));

		alert('country'+Cookies.get('studentsection'));
		alert('enforce_paymethod'+this.state.pcode);*/
		this.setState({hash:hash});


			
	},

	fetchinstitutedata:function(){



		var mydata={};
		var data2=[];
		
		var mydata={
			type:Cookies.get('type'),
			location:Cookies.get('locationname')

		};
		
		let t=this;
		function do_the_stuff(data)
		{
			for(var i=0;i<data.length;i++)
			{	

				if(data[i].name==Cookies.get('insname'))
				{
					//alert('foud');
					//alert(data[i].charges_net_banking);

					t.setState({

						cccharge: data[i].charges_credit_card,
						dccharge: data[i].charges_debit_card,
						netcharge: data[i].charges_net_banking
					});

				}
				else
				{	
					alert('not found');
				}
				
			}
		}
		$.ajax({
			type: 'POST',
			url: 'http://52.41.82.157/Feeontime/index.php/FeePayment/get_institute',
			dataType: 'json',
			async: false,
			data: mydata,
			success: function(data)
			{	
				
				var data1 = data.message;
				
				do_the_stuff(data1);


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
	    	'padding-bottom':'0.3em',
	    	'font-size':'2.5em',
	    	'padding-right':'2em',
	    },
	    button1:
	    {
	    	'width':'55%',
	    	'height':'1.5em',
	    	'margin-top':'7em',

	    	'margin-left':'13em'
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
			<Paper zDepth="1" style={{'width':'160%', 'padding-top':'1em','padding-bottom':'1em','background-color':'#f2f2f2','margin-left':'-25em'}}>
			
			
			
			<Row>
			<span  style={{ 'margin-left':'20em','font-size':'2.5em',}}> {Cookies.get('insname')} , {Cookies.get('locationname')}</span>
			</Row>
			
			<Row>
			<span style={{'margin-left':'14em','font-size':'3.5em','float':'center'}}>Total Amount: &#8377;{this.state.totalamount}</span>
			</Row>
			</Paper>
			</Grid>
			<br />
			<Grid bsClass="container">
			<Paper zDepth="1" style={{'padding-top':'1em','padding-bottom':'1em','marginBottom':'-2em','width':'160%','margin-left':'-25em','height':'625px'}}>
			<Row>
			<Col md="3">

			<List>
			<ListItem style={styles.list}>
			<Row>
			<Col md="3">
			<img src={wallet} height="50em" width="75%"></img>&nbsp;
			</Col>
			<Col md="9">
			<span style={{'font-size':'2.2em'}}>FOT Wallet</span>
			</Col>
			</Row>
			</ListItem>
			<ListItem onClick={this.checkcc}>
			<Row>
			<Col md="3">
			<img src={cards} height="50em" width="75%"></img>&nbsp;
			</Col>
			<Col md="9">
			<span style={{'font-size':'2.2em'}}>Credit Card</span>
			</Col>
			</Row>
			</ListItem>
			<ListItem onClick={this.checkdc}>
			<Row>
			<Col md="3">
			<img src={cards} height="50em" width="75%"></img>&nbsp;
			</Col>
			<Col md="9">
			<span style={{'font-size':'2.2em'}}>Debit Card</span>
			</Col>
			</Row>
			</ListItem>
			<ListItem onClick={this.checknb}>
			<Row>
			<Col md="3">
			<img src={internetbanking} height="50em" width="75%"></img>&nbsp;
			</Col>
			<Col md="9">
			<span style={{'font-size':'2.2em'}}>Internet Banking</span>
			</Col>
			</Row>
			</ListItem>
			<ListItem>
			<Row>
			<Col md="3">
			<img src={upi} height="50em" width="75%"></img>&nbsp;
			</Col>
			<Col md="9">
			<span style={{'font-size':'2.2em'}}>UPI</span>
			</Col>
			</Row>
			</ListItem>
			<ListItem >
			<Row>
			<Col md="3">
			<img src={aadhar} height="50em" width="75%"></img>&nbsp;
			</Col>
			<Col md="9">
			<span style={{'font-size':'2.2em'}}>Aadhar Card</span>
			</Col>
			</Row>
			</ListItem>
			<ListItem>
			<Row>
			<Col md="3">
			<img src={otherwallets} height="50em" width="75%"></img>&nbsp;
			</Col>
			<Col md="9">
			<span style={{'font-size':'2.2em'}}>Other Wallets</span>
			</Col>
			</Row>
			</ListItem>
			</List>

			</Col>
			<Col md="9">
			<hr></hr>
			<Row>
			<span style={{'margin-left':'2em','font-size':'2em'}}>{Cookies.get('type')}     {Cookies.get('insname')}</span>
			<span style={{'margin-left':'4em','font-size':'2em'}}>Student Name        {Cookies.get('studentname')}</span>
		
			</Row>
			<hr></hr>
			<Row>
			<span align="center" style={{'margin-left':'8.3em','font-size':'2.5em'}}>Fees
			</span>
			<span align="center" style={{'margin-left':'11.7em','font-size':'2.5em'}}>&#8377;{Cookies.get('studentfees')}
			</span>
			</Row>
			<Row >
			<span align="center" style={{'margin-left':'14em','font-size':'1.5em'}}>Internet Handling Charge </span>
			<span align="center" style={{'margin-left':'12.5em','font-size':'1.5em'}}>&#8377; {this.state.internetcharge}</span>
			</Row>
			<Row>
			<span style={{'margin-left':'14em','font-size':'1.5em'}}>GST </span>
			<span style={{'margin-left':'22em','font-size':'1.5em'}}> &#8377;{(this.state.internetcharge*0.18).toFixed(2)}</span>
			</Row>
			<hr></hr>
			<Row>
			<span align="center" style={{'margin-left':'8.2em','font-size':'2.5em'}}>Total Amount
			</span>
			<span align="center" style={{'margin-left':'8.2em','font-size':'2.5em'}}>&#8377;{this.state.totalamount}
			</span>
			</Row>
			<hr></hr>
			{/*radio buttons*/}

			{/*<Row>
			<RadioButtonGroup style={{'display':'flex','flexDirection':'row','margin-top':'1em'}}>
			<RadioButton onClick={this.checkcc} label="Credit Card" style={{'width':'10em', 'color':'red'}} value="creditcard" />
			<RadioButton onClick={this.checkdc} label="Debit Card" style={{'float':'left', 'width':'10em'}} value="debitcard" />
			<RadioButton onClick={this.checknb} label="Net Banking" style={{'float':'left', 'width':'20em'}} value="netbanking" />
			</RadioButtonGroup>
			</Row>*/}
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
			<input type="hidden" name="firstname" value={Cookies.get('studentname')} />
			<input type="hidden" name="email" value={this.state.email} />
			<input type="hidden" name="phone" value={this.state.phone} />
			<input type="hidden" name="udf3" value={this.state.hash}/>
			<input type="hidden" name="udf2" value={Cookies.get('userid')} />
			<input type="hidden" name="udf1" value={Cookies.get('enrollmentno')} />
			<input type="hidden" name="address2" value={Cookies.get('type')} />
			<input type="hidden" name="iname" value={Cookies.get('insname')}/>
			<input type="hidden" name="city" value={Cookies.get('locationname')} />
			<input type="hidden" name="productinfo" value="from web " />
			<input type="hidden" name="state" value={Cookies.get('studentclass')} />
		<input type="hidden" name="country" value={Cookies.get('studentsection')} />
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