import React from 'react';
import ReactDOM from 'react-dom';
import logoimage from '../images/logoimage.png';
import carouselimage from '../images/carousel.png';
import educationloan from '../images/college.png';
import studentinsurance from '../images/student insurance.png';
import healthcard from '../images/health card.png';
import elearning from '../images/e learning.png';
import admissionhotline from '../images/admission hotline.png';
import informative from '../images/informative.png';
import onlinetests from '../images/online test.png';
import aptitutetest from '../images/aptitude test.png';
import searchtutor from '../images/search tutor.png';
import forexcard from '../images/forex card.png';
import overseaseducation from '../images/overseas_education.png';
import careercounselling from '../images/career_counselling.png';
import bag from '../images/bag.png';
import educationtour from '../images/education_tour.png';
import bottles from '../images/bottles.png';
import books from '../images/books.png';
import sports from '../images/sports.png';
import toys from '../images/toys.png';
import stationary from '../images/stationary.png';
import playstore from '../images/assets/play.png';
import uniform from '../images/uniforms.png';
import shoes from '../images/shoes.png';
import payfees from '../images/payfees.png';
import mob from '../images/assets/mobile.png';
import searchservies from '../images/assets/search.png';
import shop from '../images/assets/shoponline.png';
import off from '../images/off.png';
import physicsbook from '../images/physicsbook.png';
import school_uniform from '../images/school_uniform.png';
import logo from '../images/logo.png';
import admissions from '../images/admissions.png';
import playschool from '../images/playschool.png';
import school from '../images/school.png';
import coaching from '../images/coaching.png';
import college from '../images/college.png';
import skills from '../images/skills.png';
import tutor from '../images/tutor.png';
import workshops from '../images/workshops.png';
import donations from '../images/donations.png';
import {Card,RaisedButton, Dialog, PasswordField, Snackbar, AutoComplete, TextField, Paper, AppBar, Drawer, MenuItem, IconButton, FlatButton, Toolbar, ToolbarGroup} from 'material-ui';
import {Grid,Row,Col,Image,Carousel,ButtonToolbar,Button, Modal, Tabs, Tab} from 'react-bootstrap';
import PayFeesDrawer from './PayFeesDrawer.js';
import LoginSignup from './LoginSignupButton.js';
import Cookies from 'js-cookie';
import classes from '../index.css';
import Geosuggest from 'react-geosuggest';
import awards from '../images/assets/awards.png';
import facebook from '../images/assets/fb.png';
import insta from '../images/assets/insta.png';
import twitter from '../images/assets/twitter.png';
import youtube from '../images/assets/youtube.png';
import linkedin from '../images/assets/linkedin.png';
import google from '../images/assets/g.png';

import payment from '../images/assets/payment.png';



var $ = require ('jquery');

var Book = React.createClass({

	render: function() {

		const styles = {

			row:  {
				backgroundColor: '#ECF3F9',
			},
			bookp:{
				'padding-left':'2em',
				'width':'60%'
			},
			book: {
				'padding-top':'2em',
				'padding-bottom':'2em',
			},
			h4: {
				'text-align':'center',
				'color':'#518FCA'
			},
			h2: {
				'text-align':'right'
			},
			h3: {
				'text-align':'left',
				'color':'#9B9C9F'
			},
			bookhead: {
				'background-color':'#E0E7EC',
				'text-align':'center',
				'font-size':'2em'
			}
		}

		return (

			<div>
			<Grid bsClass="container-fluid">
			<Row style={styles.row}>
			<Col xs="12" md="12" style={styles.bookhead}>BOOKS</Col>
			</Row>
			<Row style={styles.row}>
			<Col xs="12" md="3" style={styles.book}>
			<Row>
			<center><Image src={physicsbook} style={styles.bookp} width="100%" /></center>
			</Row>
			<Row>
			<h4 style={styles.h4}>PHYSICS NCERT BOOK</h4>
			</Row>
			<Row>
			<Col xs="12" md="6">
			<h2 style={styles.h2}>&#8377; 800</h2>
			</Col>
			<Col xs="12" md="6">
			<h3 style={styles.h3}><del>&#8377; 800</del></h3>
			</Col>
			</Row>
			</Col>
			<Col xs="12" md="3" style={styles.book}>
			<Row>
			<center><Image src={physicsbook} style={styles.bookp} width="100%" /></center>
			</Row>
			<Row>
			<h4 style={styles.h4}>PHYSICS NCERT BOOK</h4>
			</Row>
			<Row>
			<Col xs="12" md="6">
			<h2 style={styles.h2}>&#8377; 800</h2>
			</Col>
			<Col xs="12" md="6">
			<h3 style={styles.h3}><del>&#8377; 800</del></h3>
			</Col>
			</Row>
			</Col>
			<Col xs="12" md="3" style={styles.book}>
			<Row>
			<center><Image src={physicsbook} style={styles.bookp} width="100%" /></center>
			</Row>
			<Row>
			<h4 style={styles.h4}>PHYSICS NCERT BOOK</h4>
			</Row>
			<Row>
			<Col xs="12" md="6">
			<h2 style={styles.h2}>&#8377; 800</h2>
			</Col>
			<Col xs="12" md="6">
			<h3 style={styles.h3}><del>&#8377; 800</del></h3>
			</Col>
			</Row>
			</Col>
			<Col xs="12" md="3" style={styles.book}>
			<Row>
			<center><Image src={physicsbook} style={styles.bookp} width="100%" /></center>
			</Row>
			<Row>
			<h4 style={styles.h4}>PHYSICS NCERT BOOK</h4>
			</Row>
			<Row>
			<Col xs="12" md="6">
			<h2 style={styles.h2}>&#8377; 800</h2>
			</Col>
			<Col xs="12" md="6">
			<h3 style={styles.h3}><del>&#8377; 800</del></h3>
			</Col>
			</Row>
			</Col>
			</Row>
			</Grid>
			</div>
			);
	}

});

var Discount = React.createClass({

	render: function() {

		const styles = {

			row:  {
			},
			discount: {
				'padding-top':'2em',
				'padding-bottom':'2em',
				'padding-left':'5em',
				'padding-right':'5em'
			},
			line: {
				'background-color':'#D4DAE0'
			}
		}

		return (

			<div>
			<Grid bsClass="container-fluid">
			<Row style={styles.row}>
			<Col xs="12" md="12" style={styles.line}/>
			</Row>
			<Row style={styles.row}>
			<Col xs="12" md="3" style={styles.discount}>
			<Row>
			<Image src={off} width="100%" />
			</Row>
			</Col>
			<Col xs="12" md="3" style={styles.discount}>
			<Row>
			<Image src={off} width="100%" />
			</Row>
			</Col>
			<Col xs="12" md="3" style={styles.discount}>
			<Row>
			<Image src={off} width="100%" />
			</Row>
			</Col>
			<Col xs="12" md="3" style={styles.discount}>
			<Row>
			<Image src={off} width="100%" />
			</Row>
			</Col>
			</Row>
			</Grid>
			</div>
			);
	}

});



var Uniform = React.createClass({

	render: function() {

		const styles = {

			row:  {
				backgroundColor: '#ECF3F9',
			},
			uniform: {
				'padding-top':'2em',
				'padding-right':'2em',
				'padding-bottom':'2em',
				'padding-left':'2em'
			},
			h4: {
				'text-align':'center',
				'color':'#518FCA'
			},
			h2: {
				'text-align':'right'
			},
			h3: {
				'text-align':'left',
				'color':'#9B9C9F'
			},
			uniformhead: {
				'background-color':'#E0E7EC',
				'text-align':'center',
				'font-size':'2em'
			}
		}

		return (

			<div>
			<Grid bsClass="container-fluid">
			<Row style={styles.row}>
			<Col xs="12" md="12" style={styles.uniformhead}>UNIFORMS</Col>
			</Row>
			<Row style={styles.row}>
			<Col xs="12" md="3" style={styles.uniform}>
			<Row>
			<Image src={school_uniform} width="100%" />
			</Row>
			<Row>
			<h4 style={styles.h4}>DPS School Uniform</h4>
			</Row>
			<Row>
			<Col xs="12" md="6">
			<h2 style={styles.h2}>&#8377; 800</h2>
			</Col>
			<Col xs="12" md="6">
			<h3 style={styles.h3}><del>&#8377; 800</del></h3>
			</Col>
			</Row>
			</Col>
			<Col xs="12" md="3" style={styles.uniform}>
			<Row>
			<Image src={school_uniform} width="100%" />
			</Row>
			<Row>
			<h4 style={styles.h4}>DPS School Uniform</h4>
			</Row>
			<Row>
			<Col xs="12" md="6">
			<h2 style={styles.h2}>&#8377; 800</h2>
			</Col>
			<Col xs="12" md="6">
			<h3 style={styles.h3}><del>&#8377; 800</del></h3>
			</Col>
			</Row>
			</Col>
			<Col xs="12" md="3" style={styles.uniform}>
			<Row>
			<Image src={school_uniform} width="100%" />
			</Row>
			<Row>
			<h4 style={styles.h4}>DPS School Uniform</h4>
			</Row>
			<Row>
			<Col xs="12" md="6">
			<h2 style={styles.h2}>&#8377; 800</h2>
			</Col>
			<Col xs="12" md="6">
			<h3 style={styles.h3}><del>&#8377; 800</del></h3>
			</Col>
			</Row>
			</Col>
			<Col xs="12" md="3" style={styles.uniform}>
			<Row>
			<Image src={school_uniform} width="100%" />
			</Row>
			<Row>
			<h4 style={styles.h4}>DPS School Uniform</h4>
			</Row>
			<Row>
			<Col xs="12" md="6">
			<h2 style={styles.h2}>&#8377; 800</h2>
			</Col>
			<Col xs="12" md="6">
			<h3 style={styles.h3}><del>&#8377; 800</del></h3>
			</Col>
			</Row>
			</Col>
			</Row>
			</Grid>
			</div>
			);
	}

});

var Shop = React.createClass({

	render: function() {

		const styles = {
			row:
			{
				backgroundColor: '#ECF3F9',
			},
			line: {
				'background-color':'#D4DAE0'
			},
			shophead: {
				'background-color':'#E0E7EC',
				'text-align':'center',
				'font-size':'2em'
			},
			leftpad: {
				'padding-left':'15%'
			}
		}
		return (
			<div>
			<Grid bsClass="container-fluid">
			<Row style={styles.row}>
			<Col xs="12" md="12" style={styles.line}/>
			</Row>
			<Row style={styles.row}>
			<Col xs="12" md="12" style={styles.shophead}>SHOP ONLINE</Col>
			</Row>
			<Row style={styles.row}>
			<Col xs={12} md={1} style={styles.leftpad}>
			</Col>
			<Col xs={12} md={1}>
			<Image src={books} width="150%" />
			</Col>
			<Col xs={12} md={1}>
			<Image src={stationary} width="150%" />
			</Col>
			<Col xs={12} md={1}>
			<Image src={uniform} width="150%" />
			</Col>
			<Col xs={12} md={1}>
			<Image src={shoes} width="150%" />
			</Col>
			<Col xs={12} md={1}>
			<Image src={bag} width="150%" />
			</Col>
			<Col xs={12} md={1}>
			<Image src={bottles} width="150%" />
			</Col>
			<Col xs={12} md={1}>
			<Image src={sports} width="150%" />
			</Col>  
			<Col xs={12} md={1}>
			<Image src={toys} width="150%" />
			</Col>
			</Row>
			</Grid>
			</div>
			);
	}

});


var Whyuse = React.createClass({

	render: function() {

		const styles = {
			row:
			{
				'margin-top':'3em'
			},
			text:{
				'padding-right':'10em',
				'padding-left':'2em',
				'padding-bottom':'8em',
				'padding-top':'2em',
				'width':'100%',
				'font-size':'1.8em',
				'overflow': 'hidden',
				'white-space': 'nowrap',
				'color':'#ffde00'
			},
			line: {
				'background-color':'#D4DAE0'
			},
			shophead: {
				
			},
			discount1: {
				'float':'left',
				'padding-top':'2em',
				'padding-bottom':'2em',
				'padding-left':'5em',
				'padding-right':'5em'
			},
			discount2: {
				'float':'center',
				'padding-top':'2em',
				'padding-bottom':'2em',
				'padding-left':'5em',
				'padding-right':'5em'
			},
			discount3: {
				
				'float':'right',

				'padding-top':'2em',
				'padding-bottom':'2em',
				'padding-left':'5em',
				'padding-right':'5em'
			},
			row1:
			{
				'backgroundColor':'#ffffff'
			},
			line: {
				'background-color':'#ffffff'
			},
			leftpad: {
				
			}
		}
		return (
			<div>
			<Grid>
			<Row style={styles.row1}>
			<Col xs="12" md="12" style={styles.line}/>
			</Row>
			<Row style={styles.row}>
			<Col xs="12" md="4" style={styles.discount1}>
			<Row>
			<Image src={payfees} width="100%" />
			</Row>
			<Row style={styles.text} >
			<div >Pay Fees Here</div>
			</Row>

			</Col>
			<Col xs="12" md="4" style={styles.discount2}>
			<Row>
			<Image src={searchservies} width="100%" />
			</Row>
			<Row style={styles.text}>
			Search Services
			</Row>
			</Col>
			<Col xs="12" md="4" style={styles.discount3}>
			<Row>
			<Image src={shop} width="100%" />
			</Row>
			<Row style={styles.text}>
			Shop Online
			</Row>
			</Col>

			</Row>
			</Grid>


			</div>
			);
	}

});


var Mobile = React.createClass({


	render: function() {

		const styles = {
			row:
			{
				
			},
			text:{
				'padding-right':'10em',
			},
			line: {
				'background-color':'#D4DAE0'
			},
			shophead: {
				
			},
			discount: {
				'padding-top':'2em',
				'padding-bottom':'2em',
				'padding-left':'5em',
				'padding-right':'5em'
			},
			row1:
			{
				'backgroundColor':'#ffffff'
			},
			line: {
				'background-color':'#ffffff'
			},
			leftpad: {
				
			},
			buttonsidetext:{
				'margin-top':'2.0em',
				'margin-left':'45px',
				'color':'#C0C0C0',
				'font-size':'1.5em',
				'float':'left'
			},
			button:
			{	
				'background': '#4688C7',
				'width':'15%',
				'color':'#ffffff',
				'float':'right',
				'margin-left':'17em',
				'margin-top':'-1.7em',
				'font-size':'1.5em'
			},
			normaltext:{
				'font-size' : '1.5em',
				'text-align' :'center',
				'color':'#696969',

				'margin-left' : '0.2em',
				'padding-top' : '0.5em'
			},
			head:{
				'font-size' : '2.5em',
				'text-align' :'center',
				'color':'#696969',
				'margin-left' : '0.2em',
				'padding-top' : '3em',
				'padding-bottom' : '1.0em'
			},
			play:{
				'margin-top':'7.2em',
				'float':'right'
			},
			app:{
				'float':'left',
				'margin-left':'5em',
				'margin-top':'-5.0em',

			}

		}
		return (
			<div>
			<Grid>
			<Col md="5" >
			<Image src={mob} width="100%" height="650px"/>
			</Col>
			<div style={styles.head}>
				Pay Fees - Search Service - Shop Online 
			</div>
			<div style={styles.normaltext}>
				Download Our Top Rated App , Made Just For You !!
			</div>
			<div style={styles.normaltext}>
				It`s free , easy and smart  
			</div>
			<div >

				<div style={styles.buttonsidetext}>Enter your mobile number
				</div>
			<Button style={styles.button} >Send App Link</Button>
			</div>
			<div>
				<div style={styles.play}>
				<Image src={playstore} width="70%" height='65px' />
				</div>
				<div style={styles.app}>
				<Image src={playstore} width="70%" height='65px'/>
				</div>
			</div>







			</Grid>
			</div>

			);
	}




});



var Footer=React.createClass({
	render: function() {

		const styles = {
			



		}
		return (
			<div>
			<Grid>
				
			</Grid>
			</div>

			);
	}


});







var DailyNeeds = React.createClass({

	render: function() {

		const styles = {
			row:
			{
				'padding-top': '1em',
				'padding-bottom':'1em',
			},
			row1:
			{
				backgroundColor:'#ffffff'
			},
			line: {
				'background-color':'#ffffff'
			},
			shophead: {
				'background-color':'#ffffff',
				'text-align':'center',
				'font-size':'1.7em'
			},
			leftpad: {
				'padding-left':'10%'
			}
		}
		return (
			<div>
			<Grid bsClass="container-fluid"><br />
			<Row style={styles.row1}>
			<Col xs="12" md="12" style={styles.line}/>
			</Row>
			<Row style={styles.row1}>
			<Col xs="12" md="12" style={styles.shophead}>DAILY NEEDS</Col>
			</Row>
			<br />
			<a href="/leadgen" style={{'text-decoration':'none','color':'black'}}>
			<Row style={styles.row}>
			<Col md={1}></Col>
			<Col xs={12} md={2}>
			<center>
			<Row>
			<Image src={searchtutor} style={{'margin-left':'1em','margin-bottom':'0.9em'}} width="105em" height="120em" />
			</Row>
			<Row>
			<span style={{'color':'black','font-size': '1.5em'}}>Search Tutor</span>
			</Row>
			</center>
			</Col>
			<Col xs={12} md={2}>
			<center>
			<Row>
			<Image src={aptitutetest} style={{'margin-left':'0.5em','margin-bottom':'0.9em','margin-top':'1.3em'}} width="105em" height="97.5em" />
			</Row>
			<Row>
			<span style={{'color':'black','font-size': '1.5em'}}>Aptitude Test</span>
			</Row>
			</center>
			</Col>
			<Col xs={12} md={2}>
			<center>
			<Row>
			<Image style={{'margin-left':'0.7em','margin-bottom':'0.9em','margin-top':'0.7em'}} src={onlinetests} width="80em" height="105em" />
			</Row>
			<Row>
			<span style={{'color':'black','font-size': '1.5em'}}>Online Test</span>
			</Row>
			</center>
			</Col>
			<Col xs={12} md={2}>
			<center>
			<Row>
			<Image style={{'margin-left':'0.5em','margin-bottom':'0.9em','margin-top':'0.7em'}} src={informative} width="110em" height="105em" />
			</Row>
			<Row>
			<span style={{'color':'black','font-size': '1.5em'}}>Informative</span>
			</Row>
			</center>
			</Col>
			<Col xs={12} md={2}>
			<center>
			<Row>
			<Image src={admissionhotline} style={{'margin-left':'0.8em','margin-bottom':'0.9em','margin-top':'0.7em'}} width="105em" height="105em" />
			</Row>
			<Row>
			<center>
			<span style={{'color':'black','font-size': '1.5em'}}>Admission Hotline</span>
			</center>
			</Row>
			</center>
			</Col>
			<Col md={1}></Col>
			</Row><br /><br />
			<Row>
			<Col md={1}></Col>
			<center>
			<Col xs={12} md={2}>
			<Row>
			<Image style={{'margin-left':'0.8em','margin-bottom':'0.9em','margin-top':'1em'}} src={elearning} width="112.5em" height="100em" />
			</Row>
			<Row>
			<span style={{'color':'black','font-size': '1.5em', 'margin-left':'0.5em'}}>E learning</span>
			</Row>
			</Col>
			</center>
			<Col xs={12} md={2}>
			<center>
			<Row>
			<Image style={{'margin-left':'0.5em','margin-bottom':'0.9em','margin-top':'2em'}} src={healthcard} width="120em" height="80em" />
			</Row>
			<Row>
			<span style={{'color':'black','font-size': '1.5em'}}>Health Card</span>
			</Row>
			</center>
			</Col>  
			<Col xs={12} md={2}>
			<center>
			<Row>
			<Image src={studentinsurance} style={{'margin-left':'1em','margin-bottom':'0.9em','margin-top':'1em'}} width="105em" height="90em" />
			</Row>
			<Row>
			<center>
			<span style={{'color':'black','font-size': '1.5em'}}>Student Insurance</span>
			</center>
			</Row>
			</center>
			</Col>
			<Col xs={12} md={2}>
			<center>
			<Row>
			<Image src={educationloan} style={{'margin-left':'0.7em','margin-bottom':'0.9em','margin-top':'2em'}} width="87.5em" height="75em" />
			</Row>
			<Row>
			<center>
			<span style={{'color':'black','font-size': '1.5em'}}>Education Loan</span>
			</center>
			</Row>
			</center>
			</Col>
			<Col xs={12} md={2}>
			<center>
			<Row>
			<Image src={educationtour} style={{'margin-left':'0.7em','margin-bottom':'0.9em','padding-top':'0.8em','margin-top':'1em'}} width="117.5em" height="90em" />
			</Row>
			<Row>
			<span style={{'color':'black','font-size': '1.5em'}}>Education Tour</span>
			</Row>
			</center>
			</Col>
			<Col md={1}></Col>
			</Row><br /><br /><br /><br />
			<Row>
			<Col md={1}></Col>
			<Col xs={12} md={2}>
			<center>
			<Row>
			<Image src={forexcard} style={{'margin-left':'1em','margin-bottom':'0.9em'}} width="110.5em" height="90em" />
			</Row>
			<Row>
			<span style={{'color':'black','font-size': '1.5em'}}>Forex Card</span>
			</Row>
			</center>
			</Col>
			<Col md={2}>
			<center>
			<Row>
			<Image src={overseaseducation} style={{'margin-left':'0.5em','margin-bottom':'0.9em'}} width="117.5em" height="90em" />
			</Row>
			<Row>
			<span style={{'color':'black','font-size': '1.5em'}}>Overseas Education</span>
			</Row>
			</center>
			</Col>
			<Col md={2}>
			<center>
			<Row>
			<Image src={careercounselling} style={{'margin-left':'1em','margin-bottom':'0.9em'}} width="110.5em" height="90em" />
			</Row>
			<Row>
			<center>
			<span style={{'color':'black','font-size': '1.5em'}}>Career Counselling</span>
			</center>
			</Row>
			</center>
			</Col>
			<Col md={5}></Col>
			</Row>
			<br /><br />
			</a>
			</Grid>
			</div>
			);
}

});

var Otp = React.createClass({

	getInitialState: function()
	{
		return {showotp: false, showsnackbar:false, otp: ''};
	},

	handleChange: function(event)
	{
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	},

	close: function()
	{
		this.setState({ showotp: false, showsnackbar: false });
	},

	open: function()
	{
		if(Cookies.get('isloggedin')!=undefined)
		{
			this.setState({ showotp: true });
			this.sendotp();
		}
		else
			this.setState({ showsnackbar: true });
	},

	sendotp: function()
	{
		var mydata={};
		var mydata={
			user_id: Cookies.get('userid')
		};

		$.ajax({
			type: 'POST',
			url: 'http://52.41.82.157/Feeontime/index.php/User/call_otp',
			dataType: 'json',
			async: false,
			data: mydata,
			success: function(data)
			{
				if(data.success==true)
				{
					alert(data.message);
				}
			},
			error: function (error) 
			{
				alert(JSON.stringify(error));
			}			
		});
	},

	fetchstudentdetails: function()
	{
		let t = this;

		var mydata = {
			regnum: this.props.studentregnum,
			instituteid: this.props.studentinsid,
		};

		function setstudentdata(data)
		{
			var data1=[];
			data1['p']='hehe';
			data1['studentname'] = data[0].name;
			data1['studentclass'] = data[0].class;
			data1['studentsection'] = data[0].section;
			data1['studentfees'] = data[0].fee;
			t.props.setdata(data1);
		}

		$.ajax({

			type: 'POST',
			url: 'http://52.41.82.157/Feeontime/index.php/FeePayment/get_student_detail',
			dataType: 'json',
			async: false,
			data: mydata,
			success: function(data)
			{
				if(data.success==true)
				{
					setstudentdata(data.message);
				}
				else
				{
					alert("student data not available");
				}
			},
			error: function (error) 
			{
				alert(JSON.stringify(error));
			}						
		})
	},

	verifyotp: function()
	{

		let p = this;

		var mydata={
			user_id: Cookies.get('userid'),
			otp: this.state.otp
		};

		function setstudentdata()
		{
			p.fetchstudentdetails();
			p.setState({showotp: false});
		}

		$.ajax({
			type: 'POST',
			url: 'http://52.41.82.157/Feeontime/index.php/User/verify_otp',
			dataType: 'json',
			async: false,
			data: mydata,
			success: function(data)
			{
				if(data.success==true)
				{
					setstudentdata();
					alert(data.message);
				}
				else
				{
					alert("otp not matched");
				}
			},
			error: function (error) 
			{
				alert(JSON.stringify(error));
			}			
		});		
	},

	render: function() {

		const styles = {

			proceed: {
				
				'background': '#4688C7',
				'width':"100%",
				'margin-top':'1em',
				'font-size':'1.2em'
			},

			underlineFocusStyle: {
				borderColor: '#4688C7'
			},

			dialogstyle: {

				'width': '50%'
			},

			otpbtn: {
				'background': '#4688C7',
				'margin-top':'1em',
				'font-size':'1.2em',
				'padding-left':'4em',
				'padding-right':'4em'
			}

		}

		return (
			<div>
			<Snackbar
			open={this.state.showsnackbar}
			message="Please Login First"
			autoHideDuration={4000}
			onRequestClose={this.close}			
			/>
			<Dialog
			open={this.state.showotp}
			onRequestClose={this.close}
			contentStyle={styles.dialogstyle}
			>
			<center>
			<h4 style={{color: '#4688C7'}}>An OTP has been sent to your Registered Mobile Number</h4>
			<TextField
			textFieldStyle={styles.textfieldstyle}
			underlineFocusStyle={styles.underlineFocusStyle}
			onChange={this.handleChange}
			name="otp"
			hintText="Enter OTP"
			></TextField>
			<h5>Haven't Received OTP ? <a href="#" ><span style={{color: '#4688C7'}}>Resend</span></a></h5>
			<Button bsStyle="primary" style={styles.otpbtn} onClick={this.verifyotp} >Submit</Button>
			</center>
			</Dialog>
			<Button bsStyle="primary" onClick={this.open} style={styles.proceed}><b>Get Otp</b></Button>
			</div>
			);
	}

});

var Playschool = React.createClass({

	getInitialState : function() {		
		var p = this.getapidata();
		return { dispproceed: true,dispnext: false, next: false , selectedloclat:'',selectedloclong:'', dispotp:false , enrollmentno: '', studentname: '', studentclass: '', studentsection: '', studentfees: '', controls: false, regnum: '', locationname: '',insname: '', insid: '', data:p, institutes: ['']};
	},

	handleChange: function(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	},

	onsetstudentdata: function(data) {

		this.setState({
			studentname : data['studentname'],
			studentclass : data['studentclass'],
			studentsection : data['studentsection'],
			studentfees : data['studentfees'],
		});
	},

	handleUpdateInput : function(searchText) {
		this.setState({
			locationname: searchText,
		});
	},

	newRequestOtp: function(chosenRequest) {
		this.setState({
			insid: chosenRequest.id,
		});
		if(chosenRequest.verified==0)
		{
			this.setState({dispotp:true});
			this.setState({dispproceed: false});

		}
		else
		{
			this.setState({dispproceed:true});
			this.setState({dispotp:false});
		}
	},

	newRequestPlaySchool: function(chosenRequest) {
		this.setState({selectedloclat:chosenRequest.lat});
		this.setState({selectedloclong:chosenRequest.long});
		var q = this.getinsdata();
		this.setState({ institutes: q });
	},

	handleUpdateInput1 : function(searchText) {
		this.setState({
			insname: searchText,
		});
	},

	getinsdata: function()
	{
		var mydata={};
		var data2=[];
		var mydata={
			type:'school',
			location:this.state.locationname
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

		return data2;
	},
	getnext: function()
	{
		if(this.state.dispnext==false)
		{
			return false;
		}
		else
		{
			return true;
		}
		
	},
	getinsdata1: function()
	{
		/*
		var GooglePlaces = require('node-googleplaces');
		var places = new GooglePlaces('AIzaSyB4nQSPV3FFRcgv3SV5RvNmvCfFzmOQhJs');
		var location = this.state.selectedloclat+','+this.state.selectedloclong;
		var mydata={
			'location': location,
			'radius': 50000
		};
		service = new window.google.maps.places.PlacesService(mydata);
		service.nearbySearch(request, callback);
		places.nearbySearch(mydata, (err, res) => {
		  alert(JSON.stringify(res.body));
		  alert(JSON.stringify(err));
		});*/
		var request = require('superagent');
		request
		.get('https://localhost:3001/maps/'+this.state.selectedloclat+','+this.state.selectedloclong+'/50000')
		.end(function(err, res){
			alert(JSON.stringify(res.Results));
  });/*		var request = require('axios');
	    var path=require('path');
	    var lib=path.join(path.dirname(require.resolve('axios')),'lib/adapters/http');
	    var http=require(lib);

request.get('https://localhost:3001/maps/'+this.state.selectedloclat+','+this.state.selectedloclong+'/50000', {
	adapter: http,
})
  .then(function (response) {
    alert(response);
  })
  .catch(function (error) {
    alert(error);
  });
		/*
		var data2=[];
		let p = this;
		var url='http://localhost:8080/maps/'+this.state.selectedloclat+','+this.state.selectedloclong+'/50000';
		function do_the_stuff(data)
		{
			for(var i=0;i<data.length;i++)
			{
				var c = data[i];
				data2.push(c);
			}
		}

		$.ajax({

            type: "GET",
   	        contentType: "text/javascript; charset=UTF-8",
   			url: url,
			success: function(data)
			{
				alert(JSON.stringify(data));
				var data1 = data.Results;
				alert(JSON.stringify(data1));
				do_the_stuff(data1);
			},
		    error: function (error) 
		    { 
		    	alert(url);
				alert(JSON.stringify(error));
		    }			
		});

		return data2;*/
	},

	getapidata: function()
	{
		var mydata={};
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
			url: 'http://52.41.82.157/Feeontime/index.php/FeePayment/get_location',
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

		this.setState({data: data2});
		data2.push('t');
		return data2;
	},

	changedispnext :function()
	{
		this.setState({dispnext: !this.state.dispnext});
	},
	changenext :function()
	{
		this.setState({next: !this.state.next});
	},
	proceedbutfunc: function()
	{
	},

	preproceedbutfunc: function()
	{
		Cookies.set('studentfees', this.state.studentfees);
		Cookies.set('insid', this.state.insid);
		Cookies.set('insname',this.state.insname);
		Cookies.set('enrollmentno',this.state.enrollmentno);
	},

	render: function() {

		var letter = {
			padding: 10,
			margin: 10,
			backgroundColor: "#ffde00",
			color: "#333",
			display: "inline-block",
			fontFamily: "monospace",
			fontSize: "32",
			textAlign: "center"
		};

		const dataSourceConfig = {
			text: 'name',
			value: 'id',
		};

		const dataSourceConfig1 = {
			text: 'LocationName',
			value: 'Location_id',
		};

		var studdetailsstyle = {
			'display': 'none',
		};

		var otpstyle = {
			'display': 'none',
		};

		var proceedstyle = {
			'display': 'none',
		};

		var playschoolstyle = {
			'display': 'block',
		};

		var enrollmentnostyle = {
			'display': 'block',
		};

		if(this.state.dispotp)
		{
			var otpstyle = {
				'display': 'block',
			};
		}

		if(this.state.dispproceed)
		{
			var proceedstyle = {
				'display': 'block',
			};
		}

		const styles = {

			row : {
				'background-color': '#f3f3f3',
				'padding-bottom':'1em'
			},

			carousel: {
				'margin-top':'5em',
			},

			h2: {
				color:'#8E9295',
				'font-size': '2em'
			},

			floatingLabelFocusStyle: {
				color: '#4688C7',
			},

			underlineFocusStyle: {
				borderColor: '#4688C7'
			},

			textfieldstyle: {
				height:'4.5em',
				width:'100%',
				background:'#ffffff'
			},

			formstyle: {
				'font-size':'1em',
				'padding-left':'10%',
				'padding-right':'10%',
				'padding-bottom':'1em'
			},

			proceed: {
				'float':'right',
				'background': '#4688C7',
				'width':"50%",
				'margin-top':'1em',
				'font-size':'1.2em'
			},
			proceed1: {
				'float':'right',
				'background': '#4688C7',
				'width':"100%",
				'margin-top':'1em',
				'font-size':'1.2em'
			},
			back: {
				'float':'left',
				'background': '#ffffff',
				'width':"45%",
				'color':'#4688C7',
				'margin-top':'1em',
				'font-size':'1.2em'
			}

		}

		return (
			<div>
			<Grid bsClass="container-fluid">
			<Row style={styles.row}>
			<Col xs="12" md="8">
			<Grid bsClass="container-fluid" style={{'margin-left':'6em','width':'30em'}}>
			<Card>
			<div style={{ 'margin-left':'5px', 'border-top': 'solid 30px','border-bottom': 'solid 30px','border-left': 'solid 20px','border-right': 'solid 20px', 'margin-top': '-60px','border-color': 'transparent transparent white transparent','position':'absolute'}}></div>
			<Row style={styles.formstyle}>
			<Col xs="12" md="12">
			{
				!this.state.dispnext ? (
					<div>	
					<Row>
					<AutoComplete
					floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
					underlineFocusStyle={styles.underlineFocusStyle} 
					dataSource={this.state.data}
					dataSourceConfig={dataSourceConfig1}
					onUpdateInput={this.handleUpdateInput}
					filter={AutoComplete.fuzzyFilter}
					openOnFocus={true}
					name="selectlocation"
					onNewRequest={this.newRequestPlaySchool}
					floatingLabelText="Location"
					fullWidth={true}					
					/>
					</Row>
					<Row>
					<AutoComplete
					floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
					underlineFocusStyle={styles.underlineFocusStyle} 
					dataSource={this.state.institutes}
					dataSourceConfig={dataSourceConfig}
					onUpdateInput={this.handleUpdateInput1}
					filter={AutoComplete.fuzzyFilter}
					name="selectplayschool"
					onNewRequest={this.newRequestOtp}
					openOnFocus={true}
					floatingLabelText="Play School"
					fullWidth={true}					
					/>
					</Row>
					<Row>
					<div style={enrollmentnostyle}>
					<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} value={this.state.enrollmentno} name="enrollmentno" onChange={this.handleChange} floatingLabelText="Enrollment Number" />
					</div>
					</Row>
					</div>
					)

				:

				(	
					this.state.next ?
					(
						<div>	
						<Row>
						<TextField style={styles.textfieldstyle} 
						floatingLabelFocusStyle={styles.floatingLabelFocusStyle} 
						underlineFocusStyle={styles.underlineFocusStyle} 
						//value={this.state.studentname} 
						//name="studentname" 
						//onChange={this.handleChange} 
						floatingLabelText="Benificiary Name" />
						</Row>
						<Row>
						<TextField style={styles.textfieldstyle} 
						floatingLabelFocusStyle={styles.floatingLabelFocusStyle} 
						underlineFocusStyle={styles.underlineFocusStyle} 
						//value={this.state.studentname} 
						//name="studentname" 
						//onChange={this.handleChange} 
						floatingLabelText="Benificiary Account Number" />
						</Row>
						<Row>
						<TextField style={styles.textfieldstyle} 
						floatingLabelFocusStyle={styles.floatingLabelFocusStyle} 
						underlineFocusStyle={styles.underlineFocusStyle} 
						//value={this.state.studentname} 
						//name="studentname" 
						//onChange={this.handleChange} 
						floatingLabelText="IFSC Code" />
						</Row>
						</div>

						)
					:
					(<div>
						
						<Row>
						<TextField style={styles.textfieldstyle} 
						floatingLabelFocusStyle={styles.floatingLabelFocusStyle} 
						underlineFocusStyle={styles.underlineFocusStyle} 
						value={this.state.studentname} 
						name="studentname" 
						onChange={this.handleChange} 
						floatingLabelText="Student Name" />
						</Row>
						<Row>
						<Col xs="12" md="6">
						<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} value={this.state.studentclass} name="studentclass" onChange={this.handleChange} floatingLabelText="Class" />
						</Col>
						<Col xs="12" md="6">
						<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} value={this.state.studentsection} name="studentsection" onChange={this.handleChange} floatingLabelText="Section" />
						</Col>
						</Row>
						<Row>
						<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} value={this.state.studentfees} name="studentfees" onChange={this.handleChange} floatingLabelText="Fee Amount" />
						</Row>
						</div>)
					)}
				<div style={playschoolstyle}>



				<Row>
				<div style={otpstyle}>
				<Otp studentregnum={this.state.enrollmentno} studentinsid={this.state.insid} setdata={this.onsetstudentdata} />
				</div>
				</Row>
				</div>
				<div style={studdetailsstyle}>


				</div>
				<div style={proceedstyle}>
				<Row>
			{/*at one proceed need to change state at other need to move to /coupons*/}

			{
				!this.state.dispnext ?
				(
					<Button bsStyle="primary" onClick={this.changedispnext} style={styles.proceed1} ><b>Next</b></Button>)
				:
				(
					!this.state.next ?
					(<div>
						<Button bsStyle="primary" onClick={this.changedispnext} style={styles.back} ><b>Back</b></Button>
						<Button bsStyle="primary" onClick={this.changenext} style={styles.proceed} ><b>Next</b></Button>
						</div>
						)	
					:
					(	<div>
						<Button bsStyle="primary" onClick={this.changenext} style={styles.back} ><b>Back</b></Button>
						<a href="/coupons"><Button bsStyle="primary" onClick={this.preproceedbutfunc} style={styles.proceed} ><b>Proceed</b></Button></a>
						</div>
						)

					)
			}
			</Row>
			</div>
			</Col>
			</Row>
			</Card>
			</Grid>
			</Col>
			<Col xs="12" md="4">
			<Carousel className="letter" style={styles.carousel} controls={this.state.controls} >
			<Carousel.Item>
			<Image src={carouselimage} />
			<Carousel.Caption>
			</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
			<Image src={carouselimage} />
			<Carousel.Caption>
			</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
			<Image src={carouselimage} />
			<Carousel.Caption>
			</Carousel.Caption>
			</Carousel.Item>
			</Carousel>
			</Col>
			</Row>
			</Grid>
			</div>
			);
}

});

var School = React.createClass({

	/*getInitialState : function() {		
		var p = this.getapidata();
		return { controls: false, searchText: '', data:p};
	},

	handleUpdateInput : function(searchText) {
		this.setState({
			searchText: searchText,
		});
	},

	getapidata: function()
	{
		var mydata={};
		var data2=[];

		function do_the_stuff(data)
		{
			for(var i=0;i<data.length;i++)
			{
				var c = data[i].LocationName;
				data2.push(c);
			}
		}

		$.ajax({
			type: 'POST',
			url: 'http://52.41.82.157/Feeontime/index.php/FeePayment/get_location',
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

		this.setState({data: data2});
		return data2;
	},

	render: function() {

		var letter = {
			padding: 10,
			margin: 10,
			backgroundColor: "#ffde00",
			color: "#333",
			display: "inline-block",
			fontFamily: "monospace",
			fontSize: "32",
			textAlign: "center"
		};


		const styles = {

			row : {
			},

			carousel: {
				height:'32.5em'
			},

			h2: {
				color:'#8E9295',
				'font-size': '2em'
			},

			floatingLabelFocusStyle: {
				color: '#4688C7',
			},

			underlineFocusStyle: {
				borderColor: '#4688C7'
			},

			textfieldstyle: {
				height:'4em',
				width:'100%',
				background:'#dbe8f4'
			},

			formstyle: {
				'padding-left':'5%',
				'padding-right':'5%',
				'padding-bottom':'2%',
				'background-color': '#dbe8f4',
				'width':'50%'
			},

			proceed: {
				
				'background': '#4688C7',
				'width':"100%",
				'margin-top':'1em',
				'font-size':'1.2em'
			},

			locationstyle: {
				'background-color':'#fff'
			},

			locationstyle1: {
				'background':'white',
				'height': '32.5em'
			}

		}

		return (
			<div>
			<Grid bsClass="container-fluid">
			<Row style={styles.row}>
			<Col xs="12" md="8">
			<Grid bsClass="container-fluid">
			<Row>
			<Col xs="12" md="6" style={styles.formstyle}>
			<Row>
			<AutoComplete
			floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
			underlineFocusStyle={styles.underlineFocusStyle} 
			dataSource={this.state.data}
			onUpdateInput={this.handleUpdateInput}
			filter={AutoComplete.fuzzyFilter}
			openOnFocus={true}
			floatingLabelText="Select Location"
			fullWidth={true}					
			/>
			</Row>
			<Row>
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Select School" />
			</Row>
			<Row>
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Enrollment Number" />
			</Row>
			<Row>
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Student Name" />
			</Row>
			<Row>
			<Col xs="12" md="6">
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Class" />
			</Col>
			<Col xs="12" md="6">
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Section" />
			</Col>
			</Row>
			<Row>
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Fees" />
			</Row>
			<Row>
			<a href="/transaction"><Button bsStyle="primary" style={styles.proceed} >Proceed</Button></a>
			</Row>
			</Col>
			<Col xs="12" md="6" style={styles.locationstyle1}>
			<AutoComplete
			floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
			underlineFocusStyle={styles.underlineFocusStyle} 
			dataSource={this.state.data}
			onUpdateInput={this.handleUpdateInput}
			filter={AutoComplete.fuzzyFilter}
			openOnFocus={true}
			floatingLabelText="Search Location"
			fullWidth={true}					
			/>
			</Col>
			</Row>
			</Grid>
			</Col>
			<Col xs="12" md="4">
			<Carousel className="letter" style={styles.carousel} controls={this.state.controls} >
			<Carousel.Item>
			<Image src={carouselimage} />
			<Carousel.Caption>
			<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
			</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
			<Image src={carouselimage} />
			<Carousel.Caption>
			<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
			</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
			<Image src={carouselimage} />
			<Carousel.Caption>
			<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
			</Carousel.Caption>
			</Carousel.Item>
			</Carousel>
			</Col>
			</Row>
			</Grid>
			</div>
			);
		}*/
		getInitialState : function() {		
			var p = this.getapidata();
			return { dispproceed: true,dispnext: false, next: false , selectedloclat:'',selectedloclong:'', dispotp:false , enrollmentno: '', studentname: '', studentclass: '', studentsection: '', studentfees: '', controls: false, regnum: '', locationname: '',insname: '', insid: '', data:p, institutes: ['']};
		},

		handleChange: function(event) {
			const target = event.target;
			const value = target.value;
			const name = target.name;

			this.setState({
				[name]: value
			});
		},

		onsetstudentdata: function(data) {

			this.setState({
				studentname : data['studentname'],
				studentclass : data['studentclass'],
				studentsection : data['studentsection'],
				studentfees : data['studentfees'],
			});
		},

		handleUpdateInput : function(searchText) {
			this.setState({
				locationname: searchText,
			});
		},

		newRequestOtp: function(chosenRequest) {
			this.setState({
				insid: chosenRequest.id,
			});
			if(chosenRequest.verified==0)
			{
				this.setState({dispotp:true});
				this.setState({dispproceed: false});

			}
			else
			{
				this.setState({dispproceed:true});
				this.setState({dispotp:false});
			}
		},

		newRequestPlaySchool: function(chosenRequest) {
			this.setState({selectedloclat:chosenRequest.lat});
			this.setState({selectedloclong:chosenRequest.long});
			var q = this.getinsdata();
			this.setState({ institutes: q });
		},

		handleUpdateInput1 : function(searchText) {
			this.setState({
				insname: searchText,
			});
		},

		getinsdata: function()
		{
			var mydata={};
			var data2=[];
			var mydata={
				type:'school',
				location:this.state.locationname
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

			return data2;
		},
		getnext: function()
		{
			if(this.state.dispnext==false)
			{
				return false;
			}
			else
			{
				return true;
			}

		},
		getinsdata1: function()
		{
		/*
		var GooglePlaces = require('node-googleplaces');
		var places = new GooglePlaces('AIzaSyB4nQSPV3FFRcgv3SV5RvNmvCfFzmOQhJs');
		var location = this.state.selectedloclat+','+this.state.selectedloclong;
		var mydata={
			'location': location,
			'radius': 50000
		};
		service = new window.google.maps.places.PlacesService(mydata);
		service.nearbySearch(request, callback);
		places.nearbySearch(mydata, (err, res) => {
		  alert(JSON.stringify(res.body));
		  alert(JSON.stringify(err));
		});*/
		var request = require('superagent');
		request
		.get('https://localhost:3001/maps/'+this.state.selectedloclat+','+this.state.selectedloclong+'/50000')
		.end(function(err, res){
			alert(JSON.stringify(res.Results));
  });/*		var request = require('axios');
	    var path=require('path');
	    var lib=path.join(path.dirname(require.resolve('axios')),'lib/adapters/http');
	    var http=require(lib);

request.get('https://localhost:3001/maps/'+this.state.selectedloclat+','+this.state.selectedloclong+'/50000', {
	adapter: http,
})
  .then(function (response) {
    alert(response);
  })
  .catch(function (error) {
    alert(error);
  });
		/*
		var data2=[];
		let p = this;
		var url='http://localhost:8080/maps/'+this.state.selectedloclat+','+this.state.selectedloclong+'/50000';
		function do_the_stuff(data)
		{
			for(var i=0;i<data.length;i++)
			{
				var c = data[i];
				data2.push(c);
			}
		}

		$.ajax({

            type: "GET",
   	        contentType: "text/javascript; charset=UTF-8",
   			url: url,
			success: function(data)
			{
				alert(JSON.stringify(data));
				var data1 = data.Results;
				alert(JSON.stringify(data1));
				do_the_stuff(data1);
			},
		    error: function (error) 
		    { 
		    	alert(url);
				alert(JSON.stringify(error));
		    }			
		});

		return data2;*/
	},

	getapidata: function()
	{
		var mydata={};
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
			url: 'http://52.41.82.157/Feeontime/index.php/FeePayment/get_location',
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

		this.setState({data: data2});
		data2.push('t');
		return data2;
	},

	changedispnext :function()
	{
		this.setState({dispnext: !this.state.dispnext});
	},
	changenext :function()
	{
		this.setState({next: !this.state.next});
	},
	proceedbutfunc: function()
	{
	},

	preproceedbutfunc: function()
	{
		Cookies.set('studentfees', this.state.studentfees);
		Cookies.set('insid', this.state.insid);
		Cookies.set('insname',this.state.insname);
		Cookies.set('enrollmentno',this.state.enrollmentno);
	},

	render: function() {

		var letter = {
			padding: 10,
			margin: 10,
			backgroundColor: "#ffde00",
			color: "#333",
			display: "inline-block",
			fontFamily: "monospace",
			fontSize: "32",
			textAlign: "center"
		};

		const dataSourceConfig = {
			text: 'name',
			value: 'id',
		};

		const dataSourceConfig1 = {
			text: 'LocationName',
			value: 'Location_id',
		};

		var studdetailsstyle = {
			'display': 'none',
		};

		var otpstyle = {
			'display': 'none',
		};

		var proceedstyle = {
			'display': 'none',
		};

		var playschoolstyle = {
			'display': 'block',
		};

		var enrollmentnostyle = {
			'display': 'block',
		};

		if(this.state.dispotp)
		{
			var otpstyle = {
				'display': 'block',
			};
		}

		if(this.state.dispproceed)
		{
			var proceedstyle = {
				'display': 'block',
			};
		}

		const styles = {

			row : {
				'background-color': '#f3f3f3',
				'padding-bottom':'1em'
			},

			carousel: {
				'margin-top':'5em',
			},

			h2: {
				color:'#8E9295',
				'font-size': '2em'
			},

			floatingLabelFocusStyle: {
				color: '#4688C7',
			},

			underlineFocusStyle: {
				borderColor: '#4688C7'
			},

			textfieldstyle: {
				height:'4.5em',
				width:'100%',
				background:'#ffffff'
			},

			formstyle: {
				'font-size':'1em',
				'padding-left':'10%',
				'padding-right':'10%',
				'padding-bottom':'1em'
			},

			proceed: {
				'float':'right',
				'background': '#4688C7',
				'width':"50%",
				'margin-top':'1em',
				'font-size':'1.2em'
			},
			proceed1: {
				'float':'right',
				'background': '#4688C7',
				'width':"100%",
				'margin-top':'1em',
				'font-size':'1.2em'
			},
			back: {
				'float':'left',
				'background': '#ffffff',
				'width':"45%",
				'color':'#4688C7',
				'margin-top':'1em',
				'font-size':'1.2em'
			}

		}

		return (
			<div>
			<Grid bsClass="container-fluid">
			<Row style={styles.row}>
			<Col xs="12" md="8">
			<Grid bsClass="container-fluid" style={{'margin-left':'6em','width':'30em'}}>
			<Card>
			<div style={{ 'margin-left':'5px', 'border-top': 'solid 30px','border-bottom': 'solid 30px','border-left': 'solid 20px','border-right': 'solid 20px', 'margin-top': '-60px','border-color': 'transparent transparent white transparent','position':'absolute'}}></div>
			<Row style={styles.formstyle}>
			<Col xs="12" md="12">
			{
				!this.state.dispnext ? (
					<div>	
					<Row>
					<AutoComplete
					floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
					underlineFocusStyle={styles.underlineFocusStyle} 
					dataSource={this.state.data}
					dataSourceConfig={dataSourceConfig1}
					onUpdateInput={this.handleUpdateInput}
					filter={AutoComplete.fuzzyFilter}
					openOnFocus={true}
					name="selectlocation"
					onNewRequest={this.newRequestPlaySchool}
					floatingLabelText="Location"
					fullWidth={true}					
					/>
					</Row>
					<Row>
					<AutoComplete
					floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
					underlineFocusStyle={styles.underlineFocusStyle} 
					dataSource={this.state.institutes}
					dataSourceConfig={dataSourceConfig}
					onUpdateInput={this.handleUpdateInput1}
					filter={AutoComplete.fuzzyFilter}
					name="selectplayschool"
					onNewRequest={this.newRequestOtp}
					openOnFocus={true}
					floatingLabelText="Play School"
					fullWidth={true}					
					/>
					</Row>
					<Row>
					<div style={enrollmentnostyle}>
					<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} value={this.state.enrollmentno} name="enrollmentno" onChange={this.handleChange} floatingLabelText="Enrollment Number " />
					</div>
					</Row>
					</div>
					)

				:

				(	
					this.state.next ?
					(
						<div>	
						<Row>
						<TextField style={styles.textfieldstyle} 
						floatingLabelFocusStyle={styles.floatingLabelFocusStyle} 
						underlineFocusStyle={styles.underlineFocusStyle} 
						//value={this.state.studentname} 
						//name="studentname" 
						//onChange={this.handleChange} 
						floatingLabelText="Benificiary Name" />
						</Row>
						<Row>
						<TextField style={styles.textfieldstyle} 
						floatingLabelFocusStyle={styles.floatingLabelFocusStyle} 
						underlineFocusStyle={styles.underlineFocusStyle} 
						//value={this.state.studentname} 
						//name="studentname" 
						//onChange={this.handleChange} 
						floatingLabelText="Benificiary Account Number" />
						</Row>
						<Row>
						<TextField style={styles.textfieldstyle} 
						floatingLabelFocusStyle={styles.floatingLabelFocusStyle} 
						underlineFocusStyle={styles.underlineFocusStyle} 
						//value={this.state.studentname} 
						//name="studentname" 
						//onChange={this.handleChange} 
						floatingLabelText="IFSC Code" />
						</Row>
						</div>

						)
					:
					(<div>
						
						<Row>
						<TextField style={styles.textfieldstyle} 
						floatingLabelFocusStyle={styles.floatingLabelFocusStyle} 
						underlineFocusStyle={styles.underlineFocusStyle} 
						value={this.state.studentname} 
						name="studentname" 
						onChange={this.handleChange} 
						floatingLabelText="Student Name" />
						</Row>
						<Row>
						<Col xs="12" md="6">
						<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} value={this.state.studentclass} name="studentclass" onChange={this.handleChange} floatingLabelText="Class" />
						</Col>
						<Col xs="12" md="6">
						<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} value={this.state.studentsection} name="studentsection" onChange={this.handleChange} floatingLabelText="Section" />
						</Col>
						</Row>
						<Row>
						<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} value={this.state.studentfees} name="studentfees" onChange={this.handleChange} floatingLabelText="Fee Amount" />
						</Row>
						</div>)
					)}
				<div style={playschoolstyle}>



				<Row>
				<div style={otpstyle}>
				<Otp studentregnum={this.state.enrollmentno} studentinsid={this.state.insid} setdata={this.onsetstudentdata} />
				</div>
				</Row>
				</div>
				<div style={studdetailsstyle}>


				</div>
				<div style={proceedstyle}>
				<Row>
			{/*at one proceed need to change state at other need to move to /coupons*/}

			{
				!this.state.dispnext ?
				(
					<Button bsStyle="primary" onClick={this.changedispnext} style={styles.proceed1} ><b>Next</b></Button>)
				:
				(
					!this.state.next ?
					(<div>
						<Button bsStyle="primary" onClick={this.changedispnext} style={styles.back} ><b>Back</b></Button>
						<Button bsStyle="primary" onClick={this.changenext} style={styles.proceed} ><b>Next</b></Button>
						</div>
						)	
					:
					(	<div>
						<Button bsStyle="primary" onClick={this.changenext} style={styles.back} ><b>Back</b></Button>
						<a href="/coupons"><Button bsStyle="primary" onClick={this.preproceedbutfunc} style={styles.proceed} ><b>Proceed</b></Button></a>
						</div>
						)

					)
			}
			</Row>
			</div>
			</Col>
			</Row>
			</Card>
			</Grid>
			</Col>
			<Col xs="12" md="4">
			<Carousel className="letter" style={styles.carousel} controls={this.state.controls} >
			<Carousel.Item>
			<Image src={carouselimage} />
			<Carousel.Caption>
			</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
			<Image src={carouselimage} />
			<Carousel.Caption>
			</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
			<Image src={carouselimage} />
			<Carousel.Caption>
			</Carousel.Caption>
			</Carousel.Item>
			</Carousel>
			</Col>
			</Row>
			</Grid>
			</div>
			);
}

});

var College = React.createClass({

	getInitialState : function() {		
		var p = this.getapidata();
		return { controls: false, searchText: '', data:p};
	},

	handleUpdateInput : function(searchText) {
		this.setState({
			searchText: searchText,
		});
	},

	getapidata: function()
	{
		var mydata={};
		var data2=[];

		function do_the_stuff(data)
		{
			for(var i=0;i<data.length;i++)
			{
				var c = data[i].LocationName;
				data2.push(c);
			}
		}

		$.ajax({
			type: 'POST',
			url: 'http://52.41.82.157/Feeontime/index.php/FeePayment/get_location',
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

		this.setState({data: data2});
		return data2;
	},

	render: function() {

		var letter = {
			padding: 10,
			margin: 10,
			backgroundColor: "#ffde00",
			color: "#333",
			display: "inline-block",
			fontFamily: "monospace",
			fontSize: "32",
			textAlign: "center"
		};


		const styles = {

			row : {
			},

			carousel: {
				height:'32.5em'
			},

			h2: {
				color:'#8E9295',
				'font-size': '2em'
			},

			floatingLabelFocusStyle: {
				color: '#4688C7',
			},

			underlineFocusStyle: {
				borderColor: '#4688C7'
			},

			textfieldstyle: {
				height:'4em',
				width:'100%',
				background:'#dbe8f4'
			},

			formstyle: {
				'padding-left':'5%',
				'padding-right':'5%',
				'padding-bottom':'2%',
				'background-color': '#dbe8f4',
				'width':'50%'
			},

			proceed: {
				
				'background': '#4688C7',
				'width':"100%",
				'margin-top':'1em',
				'font-size':'1.2em'
			},

			locationstyle: {
				'background-color':'#fff'
			},

			locationstyle1: {
				'background':'white',
				'height': '32.5em'
			}

		}

		return (
			<div>
			<Grid bsClass="container-fluid">
			<Row style={styles.row}>
			<Col xs="12" md="8">
			<Grid bsClass="container-fluid">
			<Row>
			<Col xs="12" md="6" style={styles.formstyle}>
			<Row>
			<AutoComplete
			floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
			underlineFocusStyle={styles.underlineFocusStyle} 
			dataSource={this.state.data}
			onUpdateInput={this.handleUpdateInput}
			filter={AutoComplete.fuzzyFilter}
			openOnFocus={true}
			floatingLabelText="Select Location"
			fullWidth={true}					
			/>
			</Row>
			<Row>
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Select College" />
			</Row>
			<Row>
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Enrollment Number" />
			</Row>
			<Row>
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Student Name" />
			</Row>
			<Row>
			<Col xs="12" md="6">
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Class" />
			</Col>
			<Col xs="12" md="6">
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Section" />
			</Col>
			</Row>
			<Row>
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Fees" />
			</Row>
			<Row>
			<a href="/transaction"><Button bsStyle="primary" style={styles.proceed} >Proceed</Button></a>
			</Row>
			</Col>
			<Col xs="12" md="6" style={styles.locationstyle1}>
			<AutoComplete
			floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
			underlineFocusStyle={styles.underlineFocusStyle} 
			dataSource={this.state.data}
			onUpdateInput={this.handleUpdateInput}
			filter={AutoComplete.fuzzyFilter}
			openOnFocus={true}
			floatingLabelText="Search Location"
			fullWidth={true}					
			/>
			</Col>
			</Row>
			</Grid>
			</Col>
			<Col xs="12" md="4">
			<Carousel className="letter" style={styles.carousel} controls={this.state.controls} >
			<Carousel.Item>
			<Image src={carouselimage} />
			<Carousel.Caption>
			<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
			</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
			<Image src={carouselimage} />
			<Carousel.Caption>
			<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
			</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
			<Image src={carouselimage} />
			<Carousel.Caption>
			<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
			</Carousel.Caption>
			</Carousel.Item>
			</Carousel>
			</Col>
			</Row>
			</Grid>
			</div>
			);
	}

});	

var Coaching = React.createClass({

	getInitialState : function() {		
		var p = this.getapidata();
		return { controls: false, searchText: '', data:p};
	},

	handleUpdateInput : function(searchText) {
		this.setState({
			searchText: searchText,
		});
	},

	getapidata: function()
	{
		var mydata={};
		var data2=[];

		function do_the_stuff(data)
		{
			for(var i=0;i<data.length;i++)
			{
				var c = data[i].LocationName;
				data2.push(c);
			}
		}

		$.ajax({
			type: 'POST',
			url: 'http://52.41.82.157/Feeontime/index.php/FeePayment/get_location',
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

		this.setState({data: data2});
		return data2;
	},

	render: function() {

		var letter = {
			padding: 10,
			margin: 10,
			backgroundColor: "#ffde00",
			color: "#333",
			display: "inline-block",
			fontFamily: "monospace",
			fontSize: "32",
			textAlign: "center"
		};


		const styles = {

			row : {
			},

			carousel: {
				height:'32.5em'
			},

			h2: {
				color:'#8E9295',
				'font-size': '2em'
			},

			floatingLabelFocusStyle: {
				color: '#4688C7',
			},

			underlineFocusStyle: {
				borderColor: '#4688C7'
			},

			textfieldstyle: {
				height:'4em',
				width:'100%',
				background:'#dbe8f4'
			},

			formstyle: {
				'padding-left':'5%',
				'padding-right':'5%',
				'padding-bottom':'2%',
				'background-color': '#dbe8f4',
				'width':'50%'
			},

			proceed: {
				
				'background': '#4688C7',
				'width':"100%",
				'margin-top':'1em',
				'font-size':'1.2em'
			},

			locationstyle: {
				'background-color':'#fff'
			},

			locationstyle1: {
				'background':'white',
				'height': '32.5em'
			}

		}

		return (
			<div>
			<Grid bsClass="container-fluid">
			<Row style={styles.row}>
			<Col xs="12" md="8">
			<Grid bsClass="container-fluid">
			<Row>
			<Col xs="12" md="6" style={styles.formstyle}>
			<Row>
			<AutoComplete
			floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
			underlineFocusStyle={styles.underlineFocusStyle} 
			dataSource={this.state.data}
			onUpdateInput={this.handleUpdateInput}
			filter={AutoComplete.fuzzyFilter}
			openOnFocus={true}
			floatingLabelText="Select Location"
			fullWidth={true}					
			/>
			</Row>
			<Row>
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Select Coaching" />
			</Row>
			<Row>
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Enrollment Number" />
			</Row>
			<Row>
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Student Name" />
			</Row>
			<Row>
			<Col xs="12" md="6">
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Class" />
			</Col>
			<Col xs="12" md="6">
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Section" />
			</Col>
			</Row>
			<Row>
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Fees" />
			</Row>
			<Row>
			<a href="/transaction"><Button bsStyle="primary" style={styles.proceed} >Proceed</Button></a>
			</Row>
			</Col>
			<Col xs="12" md="6" style={styles.locationstyle1}>
			<AutoComplete
			floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
			underlineFocusStyle={styles.underlineFocusStyle} 
			dataSource={this.state.data}
			onUpdateInput={this.handleUpdateInput}
			filter={AutoComplete.fuzzyFilter}
			openOnFocus={true}
			floatingLabelText="Search Location"
			fullWidth={true}					
			/>
			</Col>
			</Row>
			</Grid>
			</Col>
			<Col xs="12" md="4">
			<Carousel className="letter" style={styles.carousel} controls={this.state.controls} >
			<Carousel.Item>
			<Image src={carouselimage} />
			<Carousel.Caption>
			<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
			</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
			<Image src={carouselimage} />
			<Carousel.Caption>
			<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
			</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
			<Image src={carouselimage} />
			<Carousel.Caption>
			<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
			</Carousel.Caption>
			</Carousel.Item>
			</Carousel>
			</Col>
			</Row>
			</Grid>
			</div>
			);
	}

});

var Tutor = React.createClass({

	getInitialState : function() {		
		var p = this.getapidata();
		return { controls: false, searchText: '', data:p};
	},

	handleUpdateInput : function(searchText) {
		this.setState({
			searchText: searchText,
		});
	},

	getapidata: function()
	{
		var mydata={};
		var data2=[];

		function do_the_stuff(data)
		{
			for(var i=0;i<data.length;i++)
			{
				var c = data[i].LocationName;
				data2.push(c);
			}
		}

		$.ajax({
			type: 'POST',
			url: 'http://52.41.82.157/Feeontime/index.php/FeePayment/get_location',
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

		this.setState({data: data2});
		return data2;
	},

	render: function() {

		var letter = {
			padding: 10,
			margin: 10,
			backgroundColor: "#ffde00",
			color: "#333",
			display: "inline-block",
			fontFamily: "monospace",
			fontSize: "32",
			textAlign: "center"
		};


		const styles = {

			row : {
			},

			carousel: {
				height:'22.5em'
			},

			h2: {
				color:'#8E9295',
				'font-size': '2em'
			},

			floatingLabelFocusStyle: {
				color: '#4688C7',
			},

			underlineFocusStyle: {
				borderColor: '#4688C7'
			},

			textfieldstyle: {
				height:'4em',
				width:'100%',
				background:'#dbe8f4'
			},

			formstyle: {
				'padding-left':'5%',
				'padding-right':'5%',
				'padding-bottom':'2%',
				'background-color': '#dbe8f4',
				'width':'50%'
			},

			proceed: {
				
				'background': '#4688C7',
				'width':"100%",
				'margin-top':'1em',
				'font-size':'1.2em'
			},

			locationstyle: {
				'background-color':'#fff'
			},

			locationstyle1: {
				'background':'white',
				'height': '32.5em'
			}

		}

		return (
			<div>
			<Grid bsClass="container-fluid">
			<Row style={styles.row}>
			<Col xs="12" md="8">
			<Grid bsClass="container-fluid">
			<Row>
			<Col xs="12" md="6" style={styles.formstyle}>
			<Row>
			<AutoComplete
			floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
			underlineFocusStyle={styles.underlineFocusStyle} 
			dataSource={this.state.data}
			onUpdateInput={this.handleUpdateInput}
			filter={AutoComplete.fuzzyFilter}
			openOnFocus={true}
			floatingLabelText="Select Location"
			fullWidth={true}					
			/>
			</Row>
			<Row>
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Select Tutor" />
			</Row>
			<Row>
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Enrollment Number" />
			</Row>
			<Row>
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Student Name" />
			</Row>
			<Row>
			<Col xs="12" md="6">
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Class" />
			</Col>
			<Col xs="12" md="6">
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Section" />
			</Col>
			</Row>
			<Row>
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Fees" />
			</Row>
			<Row>
			<a href="/transaction"><Button bsStyle="primary" style={styles.proceed} >Proceed</Button></a>
			</Row>
			</Col>
			<Col xs="12" md="6" style={styles.locationstyle1}>
			<AutoComplete
			floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
			underlineFocusStyle={styles.underlineFocusStyle} 
			dataSource={this.state.data}
			onUpdateInput={this.handleUpdateInput}
			filter={AutoComplete.fuzzyFilter}
			openOnFocus={true}
			floatingLabelText="Search Location"
			fullWidth={true}					
			/>
			</Col>
			</Row>
			</Grid>
			</Col>
			<Col xs="12" md="4">
			<Carousel className="letter" style={styles.carousel} controls={this.state.controls} >
			<Carousel.Item>
			<Image src={carouselimage} />
			<Carousel.Caption>
			<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
			</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
			<Image src={carouselimage} />
			<Carousel.Caption>
			<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
			</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
			<Image src={carouselimage} />
			<Carousel.Caption>
			<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
			</Carousel.Caption>
			</Carousel.Item>
			</Carousel>
			</Col>
			</Row>
			</Grid>
			</div>
			);
	}

});

var Admissions = React.createClass({

	getInitialState : function() {		
		var p = this.getapidata();
		return { controls: false, searchText: '', data:p};
	},

	handleUpdateInput : function(searchText) {
		this.setState({
			searchText: searchText,
		});
	},

	getapidata: function()
	{
		var mydata={};
		var data2=[];

		function do_the_stuff(data)
		{
			for(var i=0;i<data.length;i++)
			{
				var c = data[i].LocationName;
				data2.push(c);
			}
		}

		$.ajax({
			type: 'POST',
			url: 'http://52.41.82.157/Feeontime/index.php/FeePayment/get_location',
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

		this.setState({data: data2});
		return data2;
	},

	render: function() {

		var letter = {
			padding: 10,
			margin: 10,
			backgroundColor: "#ffde00",
			color: "#333",
			display: "inline-block",
			fontFamily: "monospace",
			fontSize: "32",
			textAlign: "center"
		};


		const styles = {

			row : {
			},

			carousel: {
				height:'32.5em'
			},

			h2: {
				color:'#8E9295',
				'font-size': '2em'
			},

			floatingLabelFocusStyle: {
				color: '#4688C7',
			},

			underlineFocusStyle: {
				borderColor: '#4688C7'
			},

			textfieldstyle: {
				height:'4em',
				width:'100%',
				background:'#dbe8f4'
			},

			formstyle: {
				'padding-left':'5%',
				'padding-right':'5%',
				'padding-bottom':'2%',
				'background-color': '#dbe8f4',
				'width':'50%'
			},

			proceed: {
				
				'background': '#4688C7',
				'width':"100%",
				'margin-top':'1em',
				'font-size':'1.2em'
			},

			locationstyle: {
				'background-color':'#fff'
			},

			locationstyle1: {
				'background':'white',
				'height': '32.5em'
			}

		}

		return (
			<div>
			<Grid bsClass="container-fluid">
			<Row style={styles.row}>
			<Col xs="12" md="8">
			<Grid bsClass="container-fluid">
			<Row>
			<Col xs="12" md="6" style={styles.formstyle}>
			<Row>
			<AutoComplete
			floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
			underlineFocusStyle={styles.underlineFocusStyle} 
			dataSource={this.state.data}
			onUpdateInput={this.handleUpdateInput}
			filter={AutoComplete.fuzzyFilter}
			openOnFocus={true}
			floatingLabelText="Select Location"
			fullWidth={true}					
			/>
			</Row>
			<Row>
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Select Admission" />
			</Row>
			<Row>
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Enrollment Number" />
			</Row>
			<Row>
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Student Name" />
			</Row>
			<Row>
			<Col xs="12" md="6">
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Class" />
			</Col>
			<Col xs="12" md="6">
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Section" />
			</Col>
			</Row>
			<Row>
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Fees" />
			</Row>
			<Row>
			<a href="/transaction"><Button bsStyle="primary" style={styles.proceed} >Proceed</Button></a>
			</Row>
			</Col>
			<Col xs="12" md="6" style={styles.locationstyle1}>
			<AutoComplete
			floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
			underlineFocusStyle={styles.underlineFocusStyle} 
			dataSource={this.state.data}
			onUpdateInput={this.handleUpdateInput}
			filter={AutoComplete.fuzzyFilter}
			openOnFocus={true}
			floatingLabelText="Search Location"
			fullWidth={true}					
			/>
			</Col>
			</Row>
			</Grid>
			</Col>
			<Col xs="12" md="4">
			<Carousel className="letter" style={styles.carousel} controls={this.state.controls} >
			<Carousel.Item>
			<Image src={carouselimage} />
			<Carousel.Caption>
			<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
			</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
			<Image src={carouselimage} />
			<Carousel.Caption>
			<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
			</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
			<Image src={carouselimage} />
			<Carousel.Caption>
			<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
			</Carousel.Caption>
			</Carousel.Item>
			</Carousel>
			</Col>
			</Row>
			</Grid>
			</div>
			);
	}

});

var Workshops = React.createClass({

	getInitialState : function() {		
		var p = this.getapidata();
		return { controls: false, searchText: '', data:p};
	},

	handleUpdateInput : function(searchText) {
		this.setState({
			searchText: searchText,
		});
	},

	getapidata: function()
	{
		var mydata={};
		var data2=[];

		function do_the_stuff(data)
		{
			for(var i=0;i<data.length;i++)
			{
				var c = data[i].LocationName;
				data2.push(c);
			}
		}

		$.ajax({
			type: 'POST',
			url: 'http://52.41.82.157/Feeontime/index.php/FeePayment/get_location',
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

		this.setState({data: data2});
		return data2;
	},

	render: function() {

		var letter = {
			padding: 10,
			margin: 10,
			backgroundColor: "#ffde00",
			color: "#333",
			display: "inline-block",
			fontFamily: "monospace",
			fontSize: "32",
			textAlign: "center"
		};


		const styles = {

			row : {
			},

			carousel: {
				height:'32.5em'
			},

			h2: {
				color:'#8E9295',
				'font-size': '2em'
			},

			floatingLabelFocusStyle: {
				color: '#4688C7',
			},

			underlineFocusStyle: {
				borderColor: '#4688C7'
			},

			textfieldstyle: {
				height:'4em',
				width:'100%',
				background:'#dbe8f4'
			},

			formstyle: {
				'padding-left':'5%',
				'padding-right':'5%',
				'padding-bottom':'2%',
				'background-color': '#dbe8f4',
				'width':'50%'
			},

			proceed: {
				
				'background': '#4688C7',
				'width':"100%",
				'margin-top':'1em',
				'font-size':'1.2em'
			},

			locationstyle: {
				'background-color':'#fff'
			},

			locationstyle1: {
				'background':'white',
				'height': '32.5em'
			}

		}

		return (
			<div>
			<Grid bsClass="container-fluid">
			<Row style={styles.row}>
			<Col xs="12" md="8">
			<Grid bsClass="container-fluid">
			<Row>
			<Col xs="12" md="6" style={styles.formstyle}>
			<Row>
			<AutoComplete
			floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
			underlineFocusStyle={styles.underlineFocusStyle} 
			dataSource={this.state.data}
			onUpdateInput={this.handleUpdateInput}
			filter={AutoComplete.fuzzyFilter}
			openOnFocus={true}
			floatingLabelText="Select Location"
			fullWidth={true}					
			/>
			</Row>
			<Row>
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Select Workshop" />
			</Row>
			<Row>
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Enrollment Number" />
			</Row>
			<Row>
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Student Name" />
			</Row>
			<Row>
			<Col xs="12" md="6">
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Class" />
			</Col>
			<Col xs="12" md="6">
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Section" />
			</Col>
			</Row>
			<Row>
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Fees" />
			</Row>
			<Row>
			<a href="/transaction"><Button bsStyle="primary" style={styles.proceed} >Proceed</Button></a>
			</Row>
			</Col>
			<Col xs="12" md="6" style={styles.locationstyle1}>
			<AutoComplete
			floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
			underlineFocusStyle={styles.underlineFocusStyle} 
			dataSource={this.state.data}
			onUpdateInput={this.handleUpdateInput}
			filter={AutoComplete.fuzzyFilter}
			openOnFocus={true}
			floatingLabelText="Search Location"
			fullWidth={true}					
			/>
			</Col>
			</Row>
			</Grid>
			</Col>
			<Col xs="12" md="4">
			<Carousel className="letter" style={styles.carousel} controls={this.state.controls} >
			<Carousel.Item>
			<Image src={carouselimage} />
			<Carousel.Caption>
			<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
			</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
			<Image src={carouselimage} />
			<Carousel.Caption>
			<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
			</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
			<Image src={carouselimage} />
			<Carousel.Caption>
			<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
			</Carousel.Caption>
			</Carousel.Item>
			</Carousel>
			</Col>
			</Row>
			</Grid>
			</div>
			);
	}

});

var Skills = React.createClass({

	getInitialState : function() {		
		var p = this.getapidata();
		return { controls: false, searchText: '', data:p};
	},

	handleUpdateInput : function(searchText) {
		this.setState({
			searchText: searchText,
		});
	},

	getapidata: function()
	{
		var mydata={};
		var data2=[];

		function do_the_stuff(data)
		{
			for(var i=0;i<data.length;i++)
			{
				var c = data[i].LocationName;
				data2.push(c);
			}
		}

		$.ajax({
			type: 'POST',
			url: 'http://52.41.82.157/Feeontime/index.php/FeePayment/get_location',
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

		this.setState({data: data2});
		return data2;
	},

	render: function() {

		var letter = {
			padding: 10,
			margin: 10,
			backgroundColor: "#ffde00",
			color: "#333",
			display: "inline-block",
			fontFamily: "monospace",
			fontSize: "32",
			textAlign: "center"
		};


		const styles = {

			row : {
			},

			carousel: {
				height:'32.5em'
			},

			h2: {
				color:'#8E9295',
				'font-size': '2em'
			},

			floatingLabelFocusStyle: {
				color: '#4688C7',
			},

			underlineFocusStyle: {
				borderColor: '#4688C7'
			},

			textfieldstyle: {
				height:'4em',
				width:'100%',
				background:'#dbe8f4'
			},

			formstyle: {
				'padding-left':'5%',
				'padding-right':'5%',
				'padding-bottom':'2%',
				'background-color': '#dbe8f4',
				'width':'50%'
			},

			proceed: {
				
				'background': '#4688C7',
				'width':"100%",
				'margin-top':'1em',
				'font-size':'1.2em'
			},

			locationstyle: {
				'background-color':'#fff'
			},

			locationstyle1: {
				'background':'white',
				'height': '32.5em'
			}

		}

		return (
			<div>
			<Grid bsClass="container-fluid">
			<Row style={styles.row}>
			<Col xs="12" md="8">
			<Grid bsClass="container-fluid">
			<Row>
			<Col xs="12" md="6" style={styles.formstyle}>
			<Row>
			<AutoComplete
			floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
			underlineFocusStyle={styles.underlineFocusStyle} 
			dataSource={this.state.data}
			onUpdateInput={this.handleUpdateInput}
			filter={AutoComplete.fuzzyFilter}
			openOnFocus={true}
			floatingLabelText="Select Location"
			fullWidth={true}					
			/>
			</Row>
			<Row>
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Select Skill" />
			</Row>
			<Row>
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Enrollment Number" />
			</Row>
			<Row>
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Student Name" />
			</Row>
			<Row>
			<Col xs="12" md="6">
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Class" />
			</Col>
			<Col xs="12" md="6">
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Section" />
			</Col>
			</Row>
			<Row>
			<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Fees" />
			</Row>
			<Row>
			<a href="/transaction"><Button bsStyle="primary" style={styles.proceed} >Proceed</Button></a>
			</Row>
			</Col>
			<Col xs="12" md="6" style={styles.locationstyle1}>
			<AutoComplete
			floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
			underlineFocusStyle={styles.underlineFocusStyle} 
			dataSource={this.state.data}
			onUpdateInput={this.handleUpdateInput}
			filter={AutoComplete.fuzzyFilter}
			openOnFocus={true}
			floatingLabelText="Search Location"
			fullWidth={true}					
			/>
			</Col>
			</Row>
			</Grid>
			</Col>
			<Col xs="12" md="4">
			<Carousel className="letter" style={styles.carousel} controls={this.state.controls} >
			<Carousel.Item>
			<Image src={carouselimage} />
			<Carousel.Caption>
			<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
			</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
			<Image src={carouselimage} />
			<Carousel.Caption>
			<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
			</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
			<Image src={carouselimage} />
			<Carousel.Caption>
			<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
			</Carousel.Caption>
			</Carousel.Item>
			</Carousel>
			</Col>
			</Row>
			</Grid>
			</div>
			);
	}

});

var Content = React.createClass({

	getInitialState: function()
	{
		return {activeid: '1','replaceactiveid':''}
	},

	changecontent: function(data)
	{
		this.props.changeactive(data);
	},

	changepp: function(id)
	{
		$('#mainp').html('').delay(500);
		$('#mainq').html('').delay(500);
		$('#mainq').html($('#main1').html()).delay(500);
		$('#main1').html($('#main'+id).html()).delay(500);
		$('#main'+id).html($('#mainq').html()).delay(500);
		$('#mainq').html($('#mainp').html()).delay(500);			
	},

	hello: function(pic)
	{
		if(pic==2)
		{
			if(this.state.activeid==2)
			{
				this.changecontent(<Playschool />);
				this.setState({activeid: '1'});
				this.setState({replaceactiveid: '2'});
				this.changepp(pic);				
			}
			else if(this.state.activeid==1)
			{
				this.changecontent(<School />);
				this.setState({activeid: '2'});
				this.setState({replaceactiveid: '1'});
				this.changepp(pic);				
			}
			else
			{
				if(this.state.replaceactiveid==1)
				{
					this.changepp(this.state.activeid);
					this.changecontent(<School />);
					this.setState({activeid: '2'});
					this.setState({replaceactiveid: '1'});
					this.changepp(pic);				
				}
				else
				{

				}
			}
		}
		else if(pic==3)
		{
			if(this.state.activeid==3)
			{
				this.changecontent(<Playschool />);
				this.setState({activeid: '1'});
				this.setState({replaceactiveid: '3'});
				this.changepp(pic);				
			}
			else if(this.state.activeid==1)
			{
				this.changecontent(<College />);
				this.setState({activeid: '3'});
				this.setState({replaceactiveid: '1'});
				this.changepp(pic);				
			}
			else
			{
				if(this.state.replaceactiveid==1)
				{
					this.changepp(this.state.activeid);
					this.changecontent(<College />);
					this.setState({activeid: '3'});
					this.setState({replaceactiveid: '1'});
					this.changepp(pic);				
				}
				else
				{
				}
			}
		}
	},

	render: function() {

		const styles = {
			row:
			{
			},
			leftpad: {
				'padding-left':'15%'
			}
		}
		return (
			<div>
			<Grid style={{'background-color': '#f3f3f4'}} bsClass="container-fluid">
			<br />
			<Row style={styles.row}>
			<Col xs={12} md={1} style={{opacity:'0.5'}}>
			</Col>
			<div id="mainp"></div>
			<div id="mainq"></div>
			<div id="main1">
			<Col xs={12} md={1} style={{cursor:'pointer','margin-right':'1em'}} onClick={() => this.changecontent(<Playschool />)} >
			<Row>
			<Image style={{'margin-bottom':'0.5em','margin-left':'1em'}} src={playschool} width="40%" height="40em" />
			</Row>
			<Row>
			<span style={{'font-size': '10dp'}}>Play School</span>
			</Row>
			</Col>
			</div>
			<div id="main2" onClick={() => this.hello(2)}>
			<Col xs={12} md={1} style={{cursor:'pointer','margin-right':'1em'}} onClick={() => this.changecontent(<School />)} >
			<Row>
			<Image src={school} style={{'margin-bottom':'0.5em','margin-left':'0.5em'}} width="40%" height="40em" />
			</Row>
			<Row>
			<span style={{'font-size': '1em','margin-left':'0.6em'}}>School</span>
			</Row>
			</Col>
			</div>
			<div id="main3" onClick={() => this.hello(3)}>
			<Col xs={12} md={1} style={{cursor:'pointer','margin-right':'1em'}} onClick={() => this.changecontent(<College />)} >
			<Row>
			<Image src={college} style={{'margin-bottom':'0.5em'}} width="60%" height="40em" />
			</Row>
			<Row>
			<span style={{'font-size': '1em','margin-left':'0.5em'}}>College</span>
			</Row>
			</Col>
			</div>
			<Col xs={12} md={1} style={{cursor:'pointer','margin-right':'1em'}} onClick={() => this.changecontent(<Coaching />)} >
			<Row>
			<Image src={coaching} style={{'margin-bottom':'0.5em','margin-left':'1em'}} width="40em" height="40em" />
			</Row>
			<Row>
			<span style={{'font-size': '1em','margin-left':'0.4em'}}>Coaching</span>
			</Row>
			</Col>
			<Col xs={12} md={1} style={{cursor:'pointer','margin-right':'1em'}} onClick={() => this.changecontent(<Tutor />)} >
			<Row>
			<Image src={tutor} style={{'margin-bottom':'0.5em','margin-left':'1em'}} width="40em" height="40em" />
			</Row>
			<Row>
			<span style={{'font-size': '1em','margin-left':'1em'}}>Tutor</span>
			</Row>
			</Col>
			<Col xs={12} md={1} style={{cursor:'pointer','margin-right':'1em'}} onClick={() => this.changecontent(<Admissions />)} >
			<Row>
			<Image src={admissions} style={{'margin-bottom':'0.5em','margin-left':'1em'}} width="40em" height="40em" />
			</Row>
			<Row>
			<span style={{'font-size': '1em','margin-left':'0.1em'}}>Admission</span>
			</Row>
			</Col>
			<Col xs={12} md={1} style={{cursor:'pointer','margin-right':'1em'}} onClick={() => this.changecontent(<Workshops />)} >
			<Row>
			<Image src={workshops} style={{'margin-bottom':'0.5em','margin-left':'1.5em'}} width="30em" height="40em" />
			</Row>
			<Row>
			<span style={{'font-size': '10dp'}}>Workshops</span>
			</Row>
			</Col>  
			<Col xs={12} md={1} style={{cursor:'pointer','margin-right':'1em'}} onClick={() => this.changecontent(<Skills />)} >
			<Row>
			<Image src={skills} style={{'margin-bottom':'0.5em','margin-left':'1.1em'}} width="35%" height="40em" />
			</Row>
			<Row>
			<span style={{'font-size': '1em','margin-left':'1.2em'}}>Skills &</span>
			</Row>
			<Row>
			<span style={{'font-size': '1em'}}>Employability</span>
			</Row>
			</Col>
			<Col xs={12} md={1} style={{cursor:'pointer','margin-right':'1em'}} onClick={() => this.changecontent(<Skills />)} >
			<Row>
			<Image src={donations} style={{'margin-bottom':'0.5em','margin-left':'1em'}} width="28%" height="40em" />
			</Row>
			<Row>
			<span style={{'font-size': '1em','margin-right':'2em'}}>Donations</span>
			</Row>
			</Col>
			<Col xs={12} md={1}>
			</Col>
			<Col xs={12} md={1}>
			</Col>
			</Row><br />
			</Grid>
			</div>
			);
	}

});

var FormGet = React.createClass({

	getInitialState: function()
	{
		return {dispform: <Playschool />};
	},

	onchangedisp: function(data)
	{
		this.setState({dispform: data});
	},

	render: function() {

		return (
			<div><Content changeactive={this.onchangedisp} />{this.state.dispform}</div>
			)
	}

});

var App = React.createClass({
  /**
   * Render the example app
   */
   render: function() {
   	var fixtures = [
   	{label: 'Old Elbe Tunnel, Hamburg', location: {lat: 53.5459, lng: 9.966576}},
   	{label: 'Reeperbahn, Hamburg', location: {lat: 53.5495629, lng: 9.9625838}},
   	{label: 'Alster, Hamburg', location: {lat: 53.5610398, lng: 10.0259135}}
   	];

   	return (
   		<div>
   		<Geosuggest
   		ref={el=>this._geoSuggest=el}
   		placeholder="Start typing!"
   		initialValue="Hamburg"
   		fixtures={fixtures}
   		onSuggestSelect={this.onSuggestSelect}
   		location={new window.google.maps.LatLng(53.558572, 9.9278215)}
   		radius="20" />  
   		<button onClick={()=>this._geoSuggest.focus()}>Focus</button>
   		<button onClick={()=>this._geoSuggest.update('New Zeland')}>Update</button>
   		<button onClick={()=>this._geoSuggest.clear()}>Clear</button>
   		</div>
   		)
   },

  /**
   * When a suggest got selected
   * @param  {Object} suggest The suggest
   */
   onSuggestSelect: function(suggest) {
   	console.log(suggest);
   }
});


var Bar=React.createClass({
	
	
	render:function(){
		const styles = {
			di:
			{
				backgroundColor:'#f3f3f4'
			}
		}
		return
		(
			<div >
				<Grid>
				<Col md="16">
				sdasd

				</Col>
				</Grid>
			</div>
		);
	}
});

var Homepage = React.createClass({

	getInitialState: function() {
		return {
			data: <FormGet />,
		}
	},

	changeview: function(value) {

		if(value==1)
		{
			this.setState({ data: null });
		}
		else if(value==0)
		{
			this.setState({ data: <FormGet />});
		}
	},

	render: function() {

		return (
			<div>
			<PayFeesDrawer initialview={this.state.data} maindrawer={this.changeview} />
			{this.state.data}
			<DailyNeeds />
		{/*				<App />*/}
		{/*<Discount />*/}
		<Whyuse />
		{/*<Bar/>*/}
		<Mobile />
		<Footer/>
		</div>
		);
	}

});

module.exports = Homepage;

