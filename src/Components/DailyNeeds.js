import React from 'react';
import ReactDOM from 'react-dom';
import DailyNeedsDrawer from './DailyNeedsDrawer.js';
import {RaisedButton, PasswordField, AutoComplete, TextField, Paper, AppBar, Drawer, MenuItem, IconButton, FlatButton, Toolbar, ToolbarGroup} from 'material-ui';
import {Grid,Row,Col,Image,Carousel,ButtonToolbar,Button, Modal, Tabs, Tab} from 'react-bootstrap';
import physicsbook from '../images/physicsbook.png';
import educationloan from '../images/education loan.png';
import studentinsurance from '../images/student insurance.png';
import healthcard from '../images/health card.png';
import elearning from '../images/e learning.png';
import admissionhotline from '../images/admission hotline.png';
import informative from '../images/informative.png';
import onlinetests from '../images/online test.png';
import aptitutetest from '../images/aptitude test.png';
import searchtutor from '../images/search tutor.png';
import off from '../images/off.png';
import PayFeesDrawer from './PayFeesDrawer.js';
import admissions from '../images/admissions.png';
import playschool from '../images/playschool.png';
import school from '../images/school.png';
import coaching from '../images/coaching.png';
import college from '../images/college.png';
import skills from '../images/skills.png';
import tutor from '../images/tutor.png';
import workshops from '../images/workshops.png';
import searchtutorhow from '../images/line.png';

var DailyNeedsSubDrawer = React.createClass({

	changecontent: function(data)
	{
		this.props.changeactive(data);
	},

	render: function() {

		const styles = {
			row1:
			{
				backgroundColor:'#ECF3F9'
			},
			line: {
				'background-color':'#D4DAE0'
			},
			shophead: {
				'background-color':'#E0E7EC',
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
			    <Row>
			      <Col xs={12} md={1} style={styles.leftpad}>
			      </Col>
			      <Col xs={12} md={1} style={{cursor:'pointer'}} onClick={() => this.changecontent(<SearchTutor />)}>
			      <Row>
			      <Image src={searchtutor} style={{'margin-left':'1.5em','margin-bottom':'0.5em'}} width="40em" height="40em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '10dp'}}>Search Tutor</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1} style={{cursor:'pointer'}} onClick={() => this.changecontent(<AptitudeTest />)}>
			      <Row>
			      <Image src={aptitutetest} style={{'margin-left':'1.5em','margin-bottom':'0.5em'}} width="40em" height="40em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '10dp'}}>Aptitude Test</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1} style={{cursor:'pointer'}} onClick={() => this.changecontent(<OnlineTest />)}>
			      <Row>
			      <Image style={{'margin-left':'1.5em','margin-bottom':'0.5em'}} src={onlinetests} width="35em" height="40em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '10dp'}}>Online Test</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1} style={{cursor:'pointer'}} onClick={() => this.changecontent(<Informative />)}>
			      <Row>
			      <Image style={{'margin-left':'1.2em','margin-bottom':'0.5em'}} src={informative} width="40em" height="40em" />
			      </Row>
			      <Row>
			      <span>Informative</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1} style={{cursor:'pointer'}} onClick={() => this.changecontent(<AdmissionHotline />)}>
			      <Row>
			      <Image src={admissionhotline} style={{'margin-left':'2em','margin-bottom':'0.5em'}} width="40em" height="40em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '0.9em'}}>Admission Hotline</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1} style={{'margin-left':'1.5em',cursor:'pointer'}} onClick={() => this.changecontent(<ELearning />)} >
			      <Row>
			      <Image style={{'margin-left':'0.8em','margin-bottom':'0.5em'}} src={elearning} width="45em" height="40em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '0.9em', 'margin-left':'0.5em'}}>E learning</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1} style={{cursor:'pointer'}} onClick={() => this.changecontent(<HealthCard />)}>
			      <Row>
			      <Image style={{'margin-top':'0.5em','margin-left':'0.5em','margin-bottom':'0.5em'}} src={healthcard} width="50em" height="35em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '0.9em'}}>Health Card</span>
			      </Row>
			      </Col>  
			      <Col xs={12} md={1} style={{cursor:'pointer'}} onClick={() => this.changecontent(<StudentInsurance />)}>
			      <Row>
			      <Image src={studentinsurance} style={{'margin-left':'2em','margin-bottom':'0.5em'}} width="40em" height="40em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '0.9em'}}>Student Insurance</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1} style={{'margin-left':'1.5em',cursor:'pointer'}} onClick={() => this.changecontent(<EducationLoan />)}>
			      <Row>
			      <Image src={educationloan} style={{'margin-left':'1.5em','margin-bottom':'0.5em'}} width="45em" height="40em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '0.9em'}}>Education Loan</span>
			      </Row>
			      </Col>
			    </Row>
			 </Grid>
			</div>
		);
	}

});

var Content = React.createClass({


	changecontent: function(data)
	{
		this.props.changeactive(data);
	},

	render: function() {

		const styles = {
			row:
			{
				'padding-top': '1em',
				'padding-bottom':'1em',				
			},
			row1:
			{
				backgroundColor:'#ECF3F9'
			},
			line: {
				'background-color':'#D4DAE0'
			},
			shophead: {
				'background-color':'#E0E7EC',
				'text-align':'center',
				'font-size':'1.7em'
			},
			leftpad: {
				'padding-left':'15%'
			}
		}
		return (
			<div>
			 <Grid bsClass="container-fluid">
			 <br />
				<Row style={styles.row1}>
					<Col xs="12" md="12" style={styles.line}/>
				</Row>
				<Row style={styles.row1}>
					<Col xs="12" md="12" style={styles.shophead}>PAY FEES HERE</Col>
				</Row>
			    <a href="/" style={{'text-decoration':'none','color':'black'}}>
			    <Row style={styles.row}>
			      <Col xs={12} md={1}>
			      </Col>
			      <Col xs={12} md={1}>
			      </Col>
			      <Col xs={12} md={1} style={{cursor:'pointer','margin-right':'1em'}} >
			      <Row>
			      <Image style={{'margin-bottom':'0.5em','margin-left':'1em'}} src={playschool} width="40%" height="40em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '10dp'}}>Play School</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1} style={{cursor:'pointer','margin-right':'1em'}} >
   			      <Row>
			      <Image src={school} style={{'margin-bottom':'0.5em'}} width="60%" height="40em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '1em','margin-left':'0.6em'}}>School</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1} style={{cursor:'pointer'}} >
   			      <Row>
			      <Image src={college} style={{'margin-bottom':'0.5em'}} width="60%" height="40em" />
   			      </Row>
			      <Row>
			      <span style={{'font-size': '1em','margin-left':'0.5em'}}>College</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1} style={{cursor:'pointer'}} >
   			      <Row>
			      <Image src={coaching} style={{'margin-bottom':'0.5em','margin-left':'1em'}} width="40em" height="40em" />
   			      </Row>
			      <Row>
			      <span style={{'font-size': '1em','margin-left':'0.4em'}}>Coaching</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1} style={{cursor:'pointer'}} >
   			      <Row>
			      <Image src={tutor} style={{'margin-bottom':'0.5em','margin-left':'1em'}} width="40em" height="40em" />
   			      </Row>
			      <Row>
			      <span style={{'font-size': '1em','margin-left':'1em'}}>Tutor</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1} style={{cursor:'pointer'}} >
   			      <Row>
			      <Image src={admissions} style={{'margin-bottom':'0.5em','margin-left':'1em'}} width="40em" height="40em" />
   			      </Row>
			      <Row>
			      <span style={{'font-size': '1em','margin-left':'0.1em'}}>Admission</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1} style={{cursor:'pointer'}} >
   			      <Row>
			      <Image src={workshops} style={{'margin-bottom':'0.5em','margin-left':'1em'}} width="30em" height="40em" />
   			      </Row>
			      <Row>
			      <span style={{'font-size': '10dp'}}>Workshops</span>
			      </Row>
			      </Col>  
			      <Col xs={12} md={2} style={{cursor:'pointer'}} >
   			      <Row>
			      <Image src={skills} style={{'margin-bottom':'0.5em','margin-left':'1.7em'}} width="20%" height="40em" />
   			      </Row>
			      <Row>
			      <span style={{'font-size': '1em','margin-right':'2em'}}>Skills & Employability</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1}>
			      </Col>
			    </Row>
			    </a><br />
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

var SearchTutor = React.createClass({

	render: function() {

		const styles = {	

			row:
			{
				'margin-top':'0.5em',
				backgroundColor: 'lightgray',
			},

			howitworks: 
			{
			},

			howitworks1: 
			{
				'margin-top':'1.5em',
				backgroundColor:'#ECF3F9',
			},

			howitworks2: 
			{
				'margin-top':'1.5em',
				'margin-bottom':'2em'
			},			

			imgsearch: {
				width:'1.5em',
				'margin-top':'0.4em',
				'float':'right'
			},

			searchbut: {
				'color':'white',
				'padding-left': '3em',
				'padding-right': '3em',
				backgroundColor:'#4688C7'
			},
			listi: {
				'font-size':'1.5em',
			}
		}

		return (

			<div>
			<Grid bsClass="container-fluid">
			<Row style={styles.howitworks1}>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			</Row>
			<Row style={styles.howitworks}>
			<h3><center>How it Works</center></h3><br />
			</Row>
			<Row style={styles.howitworks}>
			<Col xs={12} md={2}>
			<img src={searchtutorhow} style={styles.imgsearch} />
			</Col>
			<Col xs={12} md={10}>
			<Row>
			<span style={styles.listi}>Tell Us Your Requirements</span>
			</Row>
			<Row style={{'margin-top':'3.7em'}}>
			<span style={styles.listi}>Get Customized Quotations</span>
			</Row>
			<Row style={{'margin-top':'4em'}}>
			<span style={styles.listi}>Hire a Tutor</span>
			</Row>
			</Col>
			</Row>
			<Row style={styles.howitworks2}>
			<a href="/leadgen" style={{'text-decoration':'none','color':'black'}}><center><RaisedButton buttonStyle={styles.searchbut}>Search Tutor</RaisedButton></center></a>
			</Row>
			</Grid>
			</div>
		);

	}
});

var AptitudeTest = React.createClass({

	render: function() {

		const styles = {	

			row:
			{
				'margin-top':'0.5em',
				backgroundColor: 'lightgray',
			},

			howitworks: 
			{
			},

			howitworks1: 
			{
				'margin-top':'1.5em',
				backgroundColor:'#ECF3F9',
			},

			howitworks2: 
			{
				'margin-top':'1.5em',
				'margin-bottom':'2em'
			},			

			imgsearch: {
				width:'1.5em',
				'margin-top':'0.4em',
				'float':'right'
			},

			searchbut: {
				'color':'white',
				'padding-left': '3em',
				'padding-right': '3em',
				backgroundColor:'#4688C7'
			},
			listi: {
				'font-size':'1.5em',
			}
		}

		return (

			<div>
			<Grid bsClass="container-fluid">
			<Row style={styles.howitworks1}>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			</Row>
			<Row style={styles.howitworks}>
			<h3><center>How it Works</center></h3><br />
			</Row>
			<Row style={styles.howitworks}>
			<Col xs={12} md={2}>
			<img src={searchtutorhow} style={styles.imgsearch} />
			</Col>
			<Col xs={12} md={10}>
			<Row>
			<span style={styles.listi}>Tell Us Your Requirements</span>
			</Row>
			<Row style={{'margin-top':'3.7em'}}>
			<span style={styles.listi}>Get Customized Quotations</span>
			</Row>
			<Row style={{'margin-top':'4em'}}>
			<span style={styles.listi}>Hire a Tutor</span>
			</Row>
			</Col>
			</Row>
			<Row style={styles.howitworks2}>
			<a href="/leadgen" style={{'text-decoration':'none','color':'black'}}><center><RaisedButton buttonStyle={styles.searchbut}>Aptitude Test</RaisedButton></center></a>
			</Row>
			</Grid>
			</div>
		);

	}
});

var OnlineTest = React.createClass({

	render: function() {

		const styles = {	

			row:
			{
				'margin-top':'0.5em',
				backgroundColor: 'lightgray',
			},

			howitworks: 
			{
			},

			howitworks1: 
			{
				'margin-top':'1.5em',
				backgroundColor:'#ECF3F9',
			},

			howitworks2: 
			{
				'margin-top':'1.5em',
				'margin-bottom':'2em'
			},			

			imgsearch: {
				width:'1.5em',
				'margin-top':'0.4em',
				'float':'right'
			},

			searchbut: {
				'color':'white',
				'padding-left': '3em',
				'padding-right': '3em',
				backgroundColor:'#4688C7'
			},
			listi: {
				'font-size':'1.5em',
			}
		}

		return (

			<div>
			<Grid bsClass="container-fluid">
			<Row style={styles.howitworks1}>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			</Row>
			<Row style={styles.howitworks}>
			<h3><center>How it Works</center></h3><br />
			</Row>
			<Row style={styles.howitworks}>
			<Col xs={12} md={2}>
			<img src={searchtutorhow} style={styles.imgsearch} />
			</Col>
			<Col xs={12} md={10}>
			<Row>
			<span style={styles.listi}>Tell Us Your Requirements</span>
			</Row>
			<Row style={{'margin-top':'3.7em'}}>
			<span style={styles.listi}>Get Customized Quotations</span>
			</Row>
			<Row style={{'margin-top':'4em'}}>
			<span style={styles.listi}>Hire a Tutor</span>
			</Row>
			</Col>
			</Row>
			<Row style={styles.howitworks2}>
			<a href="/leadgen" style={{'text-decoration':'none','color':'black'}}><center><RaisedButton buttonStyle={styles.searchbut}>Online Test</RaisedButton></center></a>
			</Row>
			</Grid> 
			</div>
		);

	}
});

var AdmissionHotline = React.createClass({

	render: function() {

		const styles = {	

			row:
			{
				'margin-top':'0.5em',
				backgroundColor: 'lightgray',
			},

			howitworks: 
			{
			},

			howitworks1: 
			{
				'margin-top':'1.5em',
				backgroundColor:'#ECF3F9',
			},

			howitworks2: 
			{
				'margin-top':'1.5em',
				'margin-bottom':'2em'
			},			

			imgsearch: {
				width:'1.5em',
				'margin-top':'0.4em',
				'float':'right'
			},

			searchbut: {
				'color':'white',
				'padding-left': '3em',
				'padding-right': '3em',
				backgroundColor:'#4688C7'
			},
			listi: {
				'font-size':'1.5em',
			}
		}

		return (

			<div>
			<Grid bsClass="container-fluid">
			<Row style={styles.howitworks1}>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			</Row>
			<Row style={styles.howitworks}>
			<h3><center>How it Works</center></h3><br />
			</Row>
			<Row style={styles.howitworks}>
			<Col xs={12} md={2}>
			<img src={searchtutorhow} style={styles.imgsearch} />
			</Col>
			<Col xs={12} md={10}>
			<Row>
			<span style={styles.listi}>Tell Us Your Requirements</span>
			</Row>
			<Row style={{'margin-top':'3.7em'}}>
			<span style={styles.listi}>Get Customized Quotations</span>
			</Row>
			<Row style={{'margin-top':'4em'}}>
			<span style={styles.listi}>Hire a Tutor</span>
			</Row>
			</Col>
			</Row>
			<Row style={styles.howitworks2}>
			<a href="/leadgen" style={{'text-decoration':'none','color':'black'}}><center><RaisedButton buttonStyle={styles.searchbut}>Admission Hotline</RaisedButton></center></a>
			</Row>
			</Grid>
			</div>
		);

	}
});

var Informative = React.createClass({

	render: function() {

		const styles = {	

			row:
			{
				'margin-top':'0.5em',
				backgroundColor: 'lightgray',
			},

			howitworks: 
			{
			},

			howitworks1: 
			{
				'margin-top':'1.5em',
				backgroundColor:'#ECF3F9',
			},

			howitworks2: 
			{
				'margin-top':'1.5em',
				'margin-bottom':'2em'
			},			

			imgsearch: {
				width:'1.5em',
				'margin-top':'0.4em',
				'float':'right'
			},

			searchbut: {
				'color':'white',
				'padding-left': '3em',
				'padding-right': '3em',
				backgroundColor:'#4688C7'
			},
			listi: {
				'font-size':'1.5em',
			}
		}

		return (

			<div>
			<Grid bsClass="container-fluid">
			<Row style={styles.howitworks1}>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			</Row>
			<Row style={styles.howitworks}>
			<h3><center>How it Works</center></h3><br />
			</Row>
			<Row style={styles.howitworks}>
			<Col xs={12} md={2}>
			<img src={searchtutorhow} style={styles.imgsearch} />
			</Col>
			<Col xs={12} md={10}>
			<Row>
			<span style={styles.listi}>Tell Us Your Requirements</span>
			</Row>
			<Row style={{'margin-top':'3.7em'}}>
			<span style={styles.listi}>Get Customized Quotations</span>
			</Row>
			<Row style={{'margin-top':'4em'}}>
			<span style={styles.listi}>Hire a Tutor</span>
			</Row>
			</Col>
			</Row>
			<Row style={styles.howitworks2}>
			<a href="/leadgen" style={{'text-decoration':'none','color':'black'}}><center><RaisedButton buttonStyle={styles.searchbut}>Informative</RaisedButton></center></a>
			</Row>
			</Grid>
			</div>
		);

	}
});

var ELearning = React.createClass({

	render: function() {

		const styles = {	

			row:
			{
				'margin-top':'0.5em',
				backgroundColor: 'lightgray',
			},

			howitworks: 
			{
			},

			howitworks1: 
			{
				'margin-top':'1.5em',
				backgroundColor:'#ECF3F9',
			},

			howitworks2: 
			{
				'margin-top':'1.5em',
				'margin-bottom':'2em'
			},			

			imgsearch: {
				width:'1.5em',
				'margin-top':'0.4em',
				'float':'right'
			},

			searchbut: {
				'color':'white',
				'padding-left': '3em',
				'padding-right': '3em',
				backgroundColor:'#4688C7'
			},
			listi: {
				'font-size':'1.5em',
			}
		}

		return (

			<div>
			<Grid bsClass="container-fluid">
			<Row style={styles.howitworks1}>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			</Row>
			<Row style={styles.howitworks}>
			<h3><center>How it Works</center></h3><br />
			</Row>
			<Row style={styles.howitworks}>
			<Col xs={12} md={2}>
			<img src={searchtutorhow} style={styles.imgsearch} />
			</Col>
			<Col xs={12} md={10}>
			<Row>
			<span style={styles.listi}>Tell Us Your Requirements</span>
			</Row>
			<Row style={{'margin-top':'3.7em'}}>
			<span style={styles.listi}>Get Customized Quotations</span>
			</Row>
			<Row style={{'margin-top':'4em'}}>
			<span style={styles.listi}>Hire a Tutor</span>
			</Row>
			</Col>
			</Row>
			<Row style={styles.howitworks2}>
			<a href="/leadgen" style={{'text-decoration':'none','color':'black'}}><center><RaisedButton buttonStyle={styles.searchbut}>E Learning</RaisedButton></center></a>
			</Row>
			</Grid>
			</div>
		);

	}
});

var HealthCard = React.createClass({

	render: function() {

		const styles = {	

			row:
			{
				'margin-top':'0.5em',
				backgroundColor: 'lightgray',
			},

			howitworks: 
			{
			},

			howitworks1: 
			{
				'margin-top':'1.5em',
				backgroundColor:'#ECF3F9',
			},

			howitworks2: 
			{
				'margin-top':'1.5em',
				'margin-bottom':'2em'
			},			

			imgsearch: {
				width:'1.5em',
				'margin-top':'0.4em',
				'float':'right'
			},

			searchbut: {
				'color':'white',
				'padding-left': '3em',
				'padding-right': '3em',
				backgroundColor:'#4688C7'
			},
			listi: {
				'font-size':'1.5em',
			}
		}

		return (

			<div>
			<Grid bsClass="container-fluid">
			<Row style={styles.howitworks1}>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			</Row>
			<Row style={styles.howitworks}>
			<h3><center>How it Works</center></h3><br />
			</Row>
			<Row style={styles.howitworks}>
			<Col xs={12} md={2}>
			<img src={searchtutorhow} style={styles.imgsearch} />
			</Col>
			<Col xs={12} md={10}>
			<Row>
			<span style={styles.listi}>Tell Us Your Requirements</span>
			</Row>
			<Row style={{'margin-top':'3.7em'}}>
			<span style={styles.listi}>Get Customized Quotations</span>
			</Row>
			<Row style={{'margin-top':'4em'}}>
			<span style={styles.listi}>Hire a Tutor</span>
			</Row>
			</Col>
			</Row>
			<Row style={styles.howitworks2}>
			<a href="/leadgen" style={{'text-decoration':'none','color':'black'}}><center><RaisedButton buttonStyle={styles.searchbut}>Health Card</RaisedButton></center></a>
			</Row>
			</Grid>
			</div>
		);

	}
});

var StudentInsurance = React.createClass({

	render: function() {

		const styles = {	

			row:
			{
				'margin-top':'0.5em',
				backgroundColor: 'lightgray',
			},

			howitworks: 
			{
			},

			howitworks1: 
			{
				'margin-top':'1.5em',
				backgroundColor:'#ECF3F9',
			},

			howitworks2: 
			{
				'margin-top':'1.5em',
				'margin-bottom':'2em'
			},			

			imgsearch: {
				width:'1.5em',
				'margin-top':'0.4em',
				'float':'right'
			},

			searchbut: {
				'color':'white',
				'padding-left': '3em',
				'padding-right': '3em',
				backgroundColor:'#4688C7'
			},
			listi: {
				'font-size':'1.5em',
			}
		}

		return (

			<div>
			<Grid bsClass="container-fluid">
			<Row style={styles.howitworks1}>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			</Row>
			<Row style={styles.howitworks}>
			<h3><center>How it Works</center></h3><br />
			</Row>
			<Row style={styles.howitworks}>
			<Col xs={12} md={2}>
			<img src={searchtutorhow} style={styles.imgsearch} />
			</Col>
			<Col xs={12} md={10}>
			<Row>
			<span style={styles.listi}>Tell Us Your Requirements</span>
			</Row>
			<Row style={{'margin-top':'3.7em'}}>
			<span style={styles.listi}>Get Customized Quotations</span>
			</Row>
			<Row style={{'margin-top':'4em'}}>
			<span style={styles.listi}>Hire a Tutor</span>
			</Row>
			</Col>
			</Row>
			<Row style={styles.howitworks2}>
			<a href="/leadgen" style={{'text-decoration':'none','color':'black'}}><center><RaisedButton buttonStyle={styles.searchbut}>Student Insurance</RaisedButton></center></a>
			</Row>
			</Grid>
			</div>
		);

	}
});

var EducationLoan = React.createClass({

	render: function() {

		const styles = {	

			row:
			{
				'margin-top':'0.5em',
				backgroundColor: 'lightgray',
			},

			howitworks: 
			{
			},

			howitworks1: 
			{
				'margin-top':'1.5em',
				backgroundColor:'#ECF3F9',
			},

			howitworks2: 
			{
				'margin-top':'1.5em',
				'margin-bottom':'2em'
			},			

			imgsearch: {
				width:'1.5em',
				'margin-top':'0.4em',
				'float':'right'
			},

			searchbut: {
				'color':'white',
				'padding-left': '3em',
				'padding-right': '3em',
				backgroundColor:'#4688C7'
			},
			listi: {
				'font-size':'1.5em',
			}
		}

		return (

			<div>
			<Grid bsClass="container-fluid">
			<Row style={styles.howitworks1}>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			</Row>
			<Row style={styles.howitworks}>
			<h3><center>How it Works</center></h3><br />
			</Row>
			<Row style={styles.howitworks}>
			<Col xs={12} md={2}>
			<img src={searchtutorhow} style={styles.imgsearch} />
			</Col>
			<Col xs={12} md={10}>
			<Row>
			<span style={styles.listi}>Tell Us Your Requirements</span>
			</Row>
			<Row style={{'margin-top':'3.7em'}}>
			<span style={styles.listi}>Get Customized Quotations</span>
			</Row>
			<Row style={{'margin-top':'4em'}}>
			<span style={styles.listi}>Hire a Tutor</span>
			</Row>
			</Col>
			</Row>
			<Row style={styles.howitworks2}>
			<a href="/leadgen" style={{'text-decoration':'none','color':'black'}}><center><RaisedButton buttonStyle={styles.searchbut}>Education Loan</RaisedButton></center></a>
			</Row>
			</Grid>
			</div>
		);

	}
});

var FormGet = React.createClass({

	getInitialState: function()
	{
		return {dispform: <SearchTutor />};
	},

	onchangedisp: function(data)
	{
		this.setState({dispform: data});
	},

	render: function() {
	
		return (
			<div><DailyNeedsSubDrawer changeactive={this.onchangedisp} />{this.state.dispform}</div>
		)
	}

});

var DailyNeeds = React.createClass({

	render: function() {
		return (
			<div>
				<DailyNeedsDrawer />
				<FormGet />
				<Content />
				<Discount />
			</div>
		);
	}

});

module.exports = DailyNeeds;