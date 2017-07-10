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
		var image=this.fetchcouponsdata();
		return { value : 1, amount: Cookies.get('studentfees'),noofcoupons:0, pcode: '', firstname: '', email: '', phone: '', address: 'delhi', city: 'Delhi',institutename:'',img:image,enable:[false,false,false,false,false,false,false,false]}
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
			this.setState({noofcoupons:this.state.noofcoupons+1});
			this.setState({enable:[true,false,false,false,false,false,false,false]});
		}
		else if(value==1)
		{
			this.setState({noofcoupons:this.state.noofcoupons+1});
			this.setState({enable:[false,true,false,false,false,false,false,false]});
		}
		
	},
	fetchcouponsdata: function()
	{
		var mydata={
			limit: 8
		};
		var img=[];

		var data2=[];

		function do_the_stuff(data)
		{
			for(var i=0;i<data.length;i++)
			{
				var c = data[i].coupon_image;
				img.push(c);


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
		//alert(img[5]);
		return img;
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
			'font-size':'2.5em',
			'height':'1.8em',
			//'padding-top':'0.5em',
			//'padding-bottom':'0.5em',
			'borderRadius':'0.2em',
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
			<Grid bsClass="container" style={{'padding-top':'2em'}}>
			<Paper zDepth="1" style={{'margin-left':'-35em','width':'190%', 'padding-top':'1em','padding-bottom':'1em','background-color':'#f2f2f2','height':'7em'}}>
			<Row>
			<Col xs="12" md="8">
			<Row>
			<span style={{'margin-left':'7em','display': 'inline-block','font-size':'2.0em', 'width':'660px','color':'#797979','word-wrap':'break-word','margin-top':'m'}}>{Cookies.get('insname')} , {Cookies.get('locationname')}</span>
			<span style={{'margin-left':'1em','display': 'inline-block','font-size':'2.0em', 'width':'160px','color':'#797979','word-wrap':'break-word','margin-top':'m'}}> &#8377;{this.state.amount}</span>
			<span style={{'margin-left':'2em','display': 'inline-block','font-size':'2.0em', 'width':'360px','color':'#797979','word-wrap':'break-word','margin-top':'m'}}> Coupons Selected : {this.state.noofcoupons}</span>

			</Row>

			</Col>
			<Col xs="12" md="4" style={{'padding-top':'0.5em','margin-right':'-2em'}} >
			<a href="/transaction"><RaisedButton bsStyle="primary" buttonStyle={styles.proceedtopay} labelStyle={styles.proceedtopay}>Proceed to Pay</RaisedButton></a>
			</Col>
			</Row>
			</Paper>
			</Grid>
			<br />
			<Grid bsClass="container" style={{'padding-top':'4em'}}>
			<Paper zDepth="1" style={{'padding-top':'4em','padding-bottom':'1em'}}>
			<Row>


			<Col xs="12" md="3">
			<Grid bsClass="container-fluid" style={styles.couponstyle}>
			<Row>
			<Image src={this.state.img[0]} height="123px" width="100%" />
			</Row>
			<Row style={{'background':'#4688C7'}}>
			<FlatButton onClick={() => this.clickbutton(0)} style={{'color':'white','text-align':'center','width':'100%'}}>Save</FlatButton>
			</Row>
			</Grid>
			</Col>





			<Col xs="12" md="3">
			<Grid bsClass="container-fluid" style={styles.couponstyle}>
			<Row>
			<Image src={this.state.img[1]} height="123px" width="100%" />
			</Row>
			<Row style={{'background':'#4688C7'}}>
			<FlatButton onClick={() => this.clickbutton(1)} style={{'color':'white','text-align':'center','width':'100%'}}>Save</FlatButton>
			</Row>
			</Grid>
			</Col>



			<Col xs="12" md="3">
			<Grid bsClass="container-fluid" style={styles.couponstyle}>
			<Row>
			<Image src={this.state.img[2]} height="123px" width="100%" />
			</Row>
			<Row style={{'background':'#4688C7'}}>
			<FlatButton onClick={() => this.clickbutton(2)} style={{'color':'white','text-align':'center','width':'100%'}}>Save</FlatButton>
			</Row>
			</Grid>
			</Col>
			<Col xs="12" md="3">
			<Grid bsClass="container-fluid" style={styles.couponstyle}>
			<Row>
			<Image src={this.state.img[3]} height="123px" width="100%" />
			</Row>
			<Row style={{'background':'#4688C7'}}>
			<FlatButton onClick={() => this.clickbutton(3)} style={{'color':'white','text-align':'center','width':'100%'}}>Save</FlatButton>
			</Row>
			</Grid>
			</Col>
			</Row>
			<Row>
			<Col xs="12" md="3">
			<Grid bsClass="container-fluid" style={styles.couponstyle}>
			<Row>
			<Image src={this.state.img[4]} height="123px" width="100%" />
			</Row>
			<Row style={{'background':'#4688C7'}}>
			<FlatButton onClick={() => this.clickbutton(4)} style={{'color':'white','text-align':'center','width':'100%'}}>Save</FlatButton>
			</Row>
			</Grid>
			</Col>
			<Col xs="12" md="3">
			<Grid bsClass="container-fluid" style={styles.couponstyle}>
			<Row>
			<Image src={this.state.img[5]} height="123px" width="100%" />
			</Row>
			<Row style={{'background':'#4688C7'}}>
			<FlatButton onClick={() => this.clickbutton(5)} style={{'color':'white','text-align':'center','width':'100%'}}>Save</FlatButton>
			</Row>
			</Grid>
			</Col>
			<Col xs="12" md="3">
			<Grid bsClass="container-fluid" style={styles.couponstyle}>
			<Row>
			<Image src={this.state.img[6]} height="123px" width="100%" />
			</Row>
			<Row style={{'background':'#4688C7'}}>
			<FlatButton onClick={() => this.clickbutton(6)} style={{'color':'white','text-align':'center','width':'100%'}}>Save</FlatButton>
			</Row>
			</Grid>
			</Col>
			<Col xs="12" md="3">
			<Grid bsClass="container-fluid" style={styles.couponstyle}>
			<Row>
			<Image src={this.state.img[7]} height="123px" width="100%" />
			</Row>
			<Row style={{'background':'#4688C7'}}>
			<FlatButton onClick={() => this.clickbutton(7)} style={{'color':'white','text-align':'center','width':'100%'}}>Save</FlatButton>
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
			<div style={{'zoom':'65%'}}>
			<PayFeesDrawer />
			<Component />
			</div>
		);
	}
});

module.exports = Coupon;