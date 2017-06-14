import React from 'react';
import ReactDOM from 'react-dom';
import DailyNeedsDrawer from './DailyNeedsDrawer.js';
import {RaisedButton, PasswordField, AutoComplete, TextField, Paper, AppBar, Drawer, MenuItem, IconButton, FlatButton, Toolbar, ToolbarGroup} from 'material-ui';
import {Grid,Row,Col,Image,Carousel,ButtonToolbar,Button, Modal, Tabs, Tab} from 'react-bootstrap';
import physicsbook from '../images/physicsbook.png';
import educationloan from '../images/college.png';
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
import forexcard from '../images/forex card.png';
import overseaseducation from '../images/overseas_education.png';
import educationtour from '../images/education_tour.png';
import careercounselling from '../images/career_counselling.png';
import admissions from '../images/admissions.png';
import playschool from '../images/playschool.png';
import school from '../images/school.png';
import coaching from '../images/coaching.png';
import college from '../images/college.png';
import skills from '../images/skills.png';
import tutor from '../images/tutor.png';
import workshops from '../images/workshops.png';
import searchtutorhow from '../images/line.png';
import admissionhotlineimg from '../images/dailyneedsimages/admission.png';
import aptitudetestimg from '../images/dailyneedsimages/aptitude test.png';
import careercounsellingimg from '../images/dailyneedsimages/career counselling.jpg';
import educationloanimg from '../images/dailyneedsimages/education loan.jpg';
import elearningimg from '../images/dailyneedsimages/e learning.png';
import educationtourimg from '../images/dailyneedsimages/education_tour_image.png';
import healthcardimg from '../images/dailyneedsimages/health_card_image.png';
import forexcardimg from '../images/dailyneedsimages/forex.png';
import informativeimg from '../images/dailyneedsimages/informative.png';
import onlinetestimg from '../images/dailyneedsimages/online test.png';
import overseasimg from '../images/dailyneedsimages/overseas.png';
import searchtutorimg from '../images/dailyneedsimages/search tutor.png';
import studentinsuranceimg from '../images/dailyneedsimages/student insurance.jpg';
require('../index.css');

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
			    <Col md={1}>
			    </Col>
			    <Col md={9} style={{'margin-left':'-1em','margin-right':'-50em'}}>
			    <Row style={styles.row}>
			      <Col xs={12} md={1} style={{'cursor':'pointer'}} onClick={() => this.changecontent(<SearchTutor />)}>
			      <Row>
			      <Image src={searchtutor} style={{'margin-left':'1.5em','margin-bottom':'0.5em'}} width="40em" height="40em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '10dp'}}>Search Tutor</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1} style={{'cursor':'pointer','margin-left':'1em'}} onClick={() => this.changecontent(<AptitudeTest />)}>
			      <Row>
			      <Image src={aptitutetest} style={{'margin-left':'1.5em','margin-bottom':'0.5em'}} width="40em" height="40em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '10dp'}}>Aptitude Test</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1} style={{'cursor':'pointer','margin-left':'1em'}} onClick={() => this.changecontent(<OnlineTest />)}>
			      <Row>
			      <Image style={{'margin-left':'1.5em','margin-bottom':'0.5em'}} src={onlinetests} width="35em" height="40em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '10dp'}}>Online Test</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1} style={{'cursor':'pointer'}} onClick={() => this.changecontent(<Informative />)}>
			      <Row>
			      <Image style={{'margin-left':'1.2em','margin-bottom':'0.5em'}} src={informative} width="40em" height="40em" />
			      </Row>
			      <Row>
			      <span>Informative</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1} style={{'cursor':'pointer','margin-left':'-0.5em'}} onClick={() => this.changecontent(<AdmissionHotline />)}>
			      <Row>
			      <Image src={admissionhotline} style={{'margin-left':'2em','margin-bottom':'0.5em'}} width="40em" height="40em" />
			      </Row>
			      <Row>
			      <center>
			      <span style={{'font-size': '0.9em'}}>Admission</span>
			      </center>
			      </Row>
			      <Row>
			      <center>
			      <span style={{'font-size': '0.9em'}}>Hotline</span>
			      </center>
			      </Row>
			      </Col>
			      <Col xs={12} md={1} style={{'cursor':'pointer'}} onClick={() => this.changecontent(<ELearning />)}>
			      <Row>
			      <Image style={{'margin-left':'0.8em','margin-bottom':'0.5em'}} src={elearning} width="45em" height="40em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '0.9em', 'margin-left':'0.5em'}}>E learning</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1} style={{'cursor':'pointer'}} onClick={() => this.changecontent(<HealthCard />)}>
			      <Row>
			      <Image style={{'margin-top':'0.5em','margin-left':'0.5em','margin-bottom':'0.5em'}} src={healthcard} width="50em" height="35em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '0.9em'}}>Health Card</span>
			      </Row>
			      </Col>  
			      <Col xs={12} md={1} style={{'cursor':'pointer','margin-left':'-1em'}} onClick={() => this.changecontent(<StudentInsurance />)}>
			      <Row>
			      <Image src={studentinsurance} style={{'margin-left':'2em','margin-bottom':'0.5em'}} width="40em" height="40em" />
			      </Row>
			      <Row>
			      <center>
			      <span style={{'font-size': '0.9em'}}>Student</span>
			      </center>
			      </Row>
			      <Row>
			      <center>
			      <span style={{'font-size': '0.9em'}}>Insurance</span>
			      </center>
			      </Row>
			      </Col>
			      <Col xs={12} md={1} style={{'cursor':'pointer','margin-left':'-1em'}} onClick={() => this.changecontent(<EducationLoan />)}>
			      <Row>
			      <Image src={educationloan} style={{'margin-left':'1.5em','margin-bottom':'0.5em'}} width="45em" height="40em" />
			      </Row>
			      <Row>
			      <center>
			      <span style={{'font-size': '0.9em'}}>Education</span>
			      </center>
			      </Row>
			      <Row>
			      <center>
			      <span style={{'font-size': '0.9em'}}>Loan</span>
			      </center>
			      </Row>
			      </Col>
			      <Col xs={12} md={1} style={{'cursor':'pointer','margin-left':'0em'}} onClick={() => this.changecontent(<EducationTour />)}>
			      <Row>
			      <Image src={educationtour} style={{'margin-left':'1.5em','margin-bottom':'0.5em','padding-top':'0.8em'}} width="45em" height="40em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '0.9em'}}>Education Tour</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1} style={{'cursor':'pointer','margin-left':'1em'}} onClick={() => this.changecontent(<ForexCard />)}>
			      <Row>
			      <Image src={forexcard} style={{'margin-left':'1.5em','margin-bottom':'0.5em'}} width="45em" height="40em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '0.9em'}}>Forex Card</span>
			      </Row>
			      </Col>
			    </Row>
			    </Col>
			      <Col md={1} style={{'cursor':'pointer','margin-left':'44em','margin-top':'0em'}} onClick={() => this.changecontent(<OverseasEducation />)}>
			      <Row>
			      <Image src={overseaseducation} style={{'margin-left':'0.5em','margin-bottom':'0.5em'}} width="45em" height="40em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '0.9em'}}>Overseas Education</span>
			      </Row>
			      </Col>
				      <Col md={1} style={{'cursor':'pointer','margin-left':'-5em','margin-top':'0em'}} onClick={() => this.changecontent(<CareerCounselling />)}>
				      <Row>
				      <Image src={careercounselling} style={{'margin-left':'3.5em','margin-bottom':'0.5em'}} width="45em" height="40em" />
				      </Row>
				      <Row>
				      <center>
				      <span style={{'font-size': '0.9em'}}>Career</span>
				      </center>
				      </Row>
				      <Row>
				      <center>
				      <span style={{'font-size': '0.9em'}}>Counselling</span>
				      </center>
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
				backgroundColor: 'lightgray'
			},

			howitworks1: 
			{
				'margin-top':'1.5em',
				backgroundColor:'white',
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
				'font-size':'1.5em',
				'padding-bottom':'1em',
				'padding-bottom':'1em',
				'color':'white',
				'padding-left': '4em',
				'padding-right': '4em',
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
			<Col md="6" style={{'font-size':'1.8em'}}>
			<Row style={styles.row}><center>Find the right tutor near you</center></Row>
			<br />
			<br />
			<Row>
			<ul>
			<Row>
			<Col md="6" class="dailyneedsli">
			<li>All Subjects</li>
			</Col>
			<Col md="6">
			<li>Preffered Location</li>
			</Col>
			</Row>
			</ul>
			<br />
			<br />
			<ul>
			<Row>
			<Col md="6">
			<li>Professional Courses</li>
			</Col>
			<Col md="6">			
			<li>Experienced Tutors</li>
			</Col>
			</Row>
			</ul>
			</Row>
			</Col>
			<Col md="6" style={{'padding-left':'0','padding-right':'0'}}>
			<img src={searchtutorimg} style={{'width':'100%','height':'25em'}}/>
			</Col>
			</Row>
			<Row style={styles.howitworks2}>
			<a href="/leadgen" style={{'text-decoration':'none','color':'black'}}><center><RaisedButton buttonStyle={styles.searchbut}>Start</RaisedButton></center></a>
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
				backgroundColor: 'lightgray'
			},

			howitworks1: 
			{
				'margin-top':'1.5em',
				backgroundColor:'white',
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
				'font-size':'1.5em',
				'padding-bottom':'1em',
				'padding-bottom':'1em',
				'color':'white',
				'padding-left': '4em',
				'padding-right': '4em',
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
			<Col md="6" style={{'font-size':'1.8em'}}>
			<Row style={styles.row}><center>Get to know the Aptitude</center></Row>
			<br />
			<br />
			<Row>
			<ul>
			<Row>
			<Col md="6">
			<li>Skill Tests</li>
			</Col>
			<Col md="6">
			<li>Aptitude Report</li>
			</Col>
			</Row>
			</ul>
			<br />
			<br />
			<ul>
			<Row>
			<Col md="6">
			<li>Holistic View</li>
			</Col>
			<Col md="6">			
			<li>Online Counseling</li>
			</Col>
			</Row>
			</ul>
			</Row>
			</Col>
			<Col md="6" style={{'padding-left':'0','padding-right':'0'}}>
			<img src={aptitudetestimg} style={{'width':'100%','height':'25em'}}/>
			</Col>
			</Row>
			<Row style={styles.howitworks2}>
			<a href="/leadgen" style={{'text-decoration':'none','color':'black'}}><center><RaisedButton buttonStyle={styles.searchbut}>Start</RaisedButton></center></a>
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
				backgroundColor: 'lightgray'
			},

			howitworks1: 
			{
				'margin-top':'1.5em',
				backgroundColor:'white',
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
				'font-size':'1.5em',
				'padding-bottom':'1em',
				'padding-bottom':'1em',
				'color':'white',
				'padding-left': '4em',
				'padding-right': '4em',
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
			<Col md="6" style={{'font-size':'1.8em'}}>
			<Row style={styles.row}><center>Take Online Tests</center></Row>
			<br />
			<br />
			<Row>
			<ul>
			<Row>
			<Col md="6">
			<li>Various Subjects</li>
			</Col>
			<Col md="6">
			<li>Free Sample Tests</li>
			</Col>
			</Row>
			</ul>
			<br />
			<br />
			<ul>
			<Row>
			<Col md="6">
			<li>Professional Tests</li>
			</Col>
			<Col md="6">			
			<li>Perfect Score</li>
			</Col>
			</Row>
			</ul>
			</Row>
			</Col>
			<Col md="6" style={{'padding-left':'0','padding-right':'0'}}>
			<img src={onlinetestimg} style={{'width':'100%','height':'25em'}}/>
			</Col>
			</Row>
			<Row style={styles.howitworks2}>
			<a href="/leadgen" style={{'text-decoration':'none','color':'black'}}><center><RaisedButton buttonStyle={styles.searchbut}>Start</RaisedButton></center></a>
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
				backgroundColor: 'lightgray'
			},

			howitworks1: 
			{
				'margin-top':'1.5em',
				backgroundColor:'white',
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
				'font-size':'1.5em',
				'padding-bottom':'1em',
				'padding-bottom':'1em',
				'color':'white',
				'padding-left': '4em',
				'padding-right': '4em',
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
			<Col md="6" style={{'font-size':'1.8em'}}>
			<Row style={styles.row}><center>Informative</center></Row>
			<br />
			<center>Search relevant information about educational institutions and services</center>
			<br />
			</Col>
			<Col md="6" style={{'padding-left':'0','padding-right':'0'}}>
			<img src={informativeimg} style={{'width':'100%','height':'25em'}}/>
			</Col>
			</Row>
			<Row style={styles.howitworks2}>
			<a href="/leadgen" style={{'text-decoration':'none','color':'black'}}><center><RaisedButton buttonStyle={styles.searchbut}>Start</RaisedButton></center></a>
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
				backgroundColor: 'lightgray'
			},

			howitworks1: 
			{
				'margin-top':'1.5em',
				backgroundColor:'white',
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
				'font-size':'1.5em',
				'padding-bottom':'1em',
				'padding-bottom':'1em',
				'color':'white',
				'padding-left': '4em',
				'padding-right': '4em',
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
			<Col md="6" style={{'font-size':'1.8em'}}>
			<Row style={styles.row}><center>Find the perfect education</center></Row>
			<br />
			<br />
			<Row>
			<ul>
			<Row>
			<Col md="6">
			<li>Admissions Assistance</li>
			</Col>
			<Col md="6">
			<li>Preferred Location</li>
			</Col>
			</Row>
			</ul>
			<br />
			<br />
			<ul>
			<Row>
			<Col md="6">
			<li>Best Institutions</li>
			</Col>
			<Col md="6">			
			<li>Online Application</li>
			</Col>
			</Row>
			</ul>
			</Row>
			</Col>
			<Col md="6" style={{'padding-left':'0','padding-right':'0'}}>
			<img src={admissionhotlineimg} style={{'width':'100%','height':'25em'}}/>
			</Col>
			</Row>
			<Row style={styles.howitworks2}>
			<a href="/leadgen" style={{'text-decoration':'none','color':'black'}}><center><RaisedButton buttonStyle={styles.searchbut}>Start</RaisedButton></center></a>
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
				backgroundColor: 'lightgray'
			},

			howitworks1: 
			{
				'margin-top':'1.5em',
				backgroundColor:'white',
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
				'font-size':'1.5em',
				'padding-bottom':'1em',
				'padding-bottom':'1em',
				'color':'white',
				'padding-left': '4em',
				'padding-right': '4em',
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
			<Col md="6" style={{'font-size':'1.8em'}}>
			<Row style={styles.row}><center>Grab the online learning tools</center></Row>
			<br />
			<br />
			<Row>
			<ul>
			<Row>
			<Col md="6">
			<li>Buy e-books</li>
			</Col>
			<Col md="6">
			<li>Download free study material</li>
			</Col>
			</Row>
			</ul>
			<br />
			<br />
			<ul>
			<Row>
			<Col md="6">
			<li>View tutorials</li>
			</Col>
			<Col md="6">			
			<li>Distance learning</li>
			</Col>
			</Row>
			</ul>
			</Row>
			</Col>
			<Col md="6" style={{'padding-left':'0','padding-right':'0'}}>
			<img src={elearningimg} style={{'width':'100%','height':'25em'}}/>
			</Col>
			</Row>
			<Row style={styles.howitworks2}>
			<a href="/leadgen" style={{'text-decoration':'none','color':'black'}}><center><RaisedButton buttonStyle={styles.searchbut}>Start</RaisedButton></center></a>
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
				backgroundColor: 'lightgray'
			},

			howitworks1: 
			{
				'margin-top':'1.5em',
				backgroundColor:'white',
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
				'font-size':'1.5em',
				'padding-bottom':'1em',
				'padding-bottom':'1em',
				'color':'white',
				'padding-left': '4em',
				'padding-right': '4em',
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
			<Col md="6" style={{'font-size':'1.8em'}}>
			<Row style={styles.row}><center>Get affordable healthcare services for Students</center></Row>
			<br />
			<br />
			<Row>
			<ul>
			<Row>
			<Col md="6">
			<li>NABL certified diagnostic centres</li>
			</Col>
			<Col md="6">
			<li>Health Packages</li>
			</Col>
			</Row>
			</ul>
			<br />
			<br />
			<ul>
			<Row>
			<Col md="6">
			<li>Discounted rates</li>
			</Col>
			<Col md="6">			
			<li>Add upto 6 family members</li>
			</Col>
			</Row>
			</ul>
			</Row>
			</Col>
			<Col md="6" style={{'padding-left':'0','padding-right':'0'}}>
			<img src={healthcardimg} style={{'width':'100%','height':'25em'}}/>
			</Col>
			</Row>
			<Row style={styles.howitworks2}>
			<a href="/leadgen" style={{'text-decoration':'none','color':'black'}}><center><RaisedButton buttonStyle={styles.searchbut}>Start</RaisedButton></center></a>
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
				backgroundColor: 'lightgray'
			},

			howitworks1: 
			{
				'margin-top':'1.5em',
				backgroundColor:'white',
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
				'font-size':'1.5em',
				'padding-bottom':'1em',
				'padding-bottom':'1em',
				'color':'white',
				'padding-left': '4em',
				'padding-right': '4em',
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
			<Col md="6" style={{'font-size':'1.8em'}}>
			<Row style={styles.row}><center>Take the right Student Insurance Policy</center></Row>
			<br />
			<br />
			<Row>
			<ul>
			<Row>
			<Col md="6">
			<li>Cover all risks</li>
			</Col>
			<Col md="6">
			<li>Rated Insurance Companies</li>
			</Col>
			</Row>
			</ul>
			<br />
			<br />
			<ul>
			<Row>
			<Col md="6">
			<li>Desired Sum Insured</li>
			</Col>
			<Col md="6">			
			<li>Discounted Premium</li>
			</Col>
			</Row>
			</ul>
			</Row>
			</Col>
			<Col md="6" style={{'padding-left':'0','padding-right':'0'}}>
			<img src={studentinsuranceimg} style={{'width':'100%','height':'25em'}}/>
			</Col>
			</Row>
			<Row style={styles.howitworks2}>
			<a href="/leadgen" style={{'text-decoration':'none','color':'black'}}><center><RaisedButton buttonStyle={styles.searchbut}>Start</RaisedButton></center></a>
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
				backgroundColor: 'lightgray'
			},

			howitworks1: 
			{
				'margin-top':'1.5em',
				backgroundColor:'white',
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
				'font-size':'1.5em',
				'padding-bottom':'1em',
				'padding-bottom':'1em',
				'color':'white',
				'padding-left': '4em',
				'padding-right': '4em',
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
			<Col md="6" style={{'font-size':'1.8em'}}>
			<Row style={styles.row}><center>Get Education Loan in Easy Steps</center></Row>
			<br />
			<br />
			<Row>
			<ul>
			<Row>
			<Col md="6">
			<li>Loan upto 100%</li>
			</Col>
			<Col md="6">
			<li>Tax Benefits</li>
			</Col>
			</Row>
			</ul>
			<br />
			<br />
			<ul>
			<Row>
			<Col md="6">
			<li>Flexibility on collateral</li>
			</Col>
			<Col md="6">			
			<li>Expert Advice</li>
			</Col>
			</Row>
			</ul>
			</Row>
			</Col>
			<Col md="6" style={{'padding-left':'0','padding-right':'0'}}>
			<img src={educationloanimg} style={{'width':'100%','height':'25em'}}/>
			</Col>
			</Row>
			<Row style={styles.howitworks2}>
			<a href="/leadgen" style={{'text-decoration':'none','color':'black'}}><center><RaisedButton buttonStyle={styles.searchbut}>Start</RaisedButton></center></a>
			</Row>
			</Grid>
			</div>
		);

	}
});

var EducationTour = React.createClass({

	render: function() {

		const styles = {	

			row:
			{
				backgroundColor: 'lightgray'
			},

			howitworks1: 
			{
				'margin-top':'1.5em',
				backgroundColor:'white',
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
				'font-size':'1.5em',
				'padding-bottom':'1em',
				'padding-bottom':'1em',
				'color':'white',
				'padding-left': '4em',
				'padding-right': '4em',
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
			<Col md="6" style={{'font-size':'1.8em'}}>
			<Row style={styles.row}><center>Plan the perfect Educational Tour</center></Row>
			<br />
			<br />
			<Row>
			<ul>
			<Row>
			<Col md="6">
			<li>Various tours</li>
			</Col>
			<Col md="6">
			<li>Tours in India & Abroad</li>
			</Col>
			</Row>
			</ul>
			<br />
			<br />
			<ul>
			<Row>
			<Col md="6">
			<li>Customized packages</li>
			</Col>
			<Col md="6">			
			<li>Best Price</li>
			</Col>
			</Row>
			</ul>
			</Row>
			</Col>
			<Col md="6" style={{'padding-left':'0','padding-right':'0'}}>
			<img src={educationtourimg} style={{'width':'100%','height':'25em'}}/>
			</Col>
			</Row>
			<Row style={styles.howitworks2}>
			<a href="/leadgen" style={{'text-decoration':'none','color':'black'}}><center><RaisedButton buttonStyle={styles.searchbut}>Start</RaisedButton></center></a>
			</Row>
			</Grid>
			</div>
		);

	}
});

var ForexCard = React.createClass({

	render: function() {

		const styles = {	

			row:
			{
				backgroundColor: 'lightgray'
			},

			howitworks1: 
			{
				'margin-top':'1.5em',
				backgroundColor:'white',
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
				'font-size':'1.5em',
				'padding-bottom':'1em',
				'padding-bottom':'1em',
				'color':'white',
				'padding-left': '4em',
				'padding-right': '4em',
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
			<Col md="6" style={{'font-size':'1.8em'}}>
			<Row style={styles.row}><center>Get a Student Forex Card in Simple Steps</center></Row>
			<br />
			<br />
			<Row>
			<ul>
			<Row>
			<Col md="6">
			<li>Multi-currency</li>
			</Col>
			<Col md="6">
			<li>Any Location</li>
			</Col>
			</Row>
			</ul>
			<br />
			<br />
			<ul>
			<Row>
			<Col md="6">
			<li>Best Rates</li>
			</Col>
			<Col md="6">			
			<li>Flexibility</li>
			</Col>
			</Row>
			</ul>
			</Row>
			</Col>
			<Col md="6" style={{'padding-left':'0','padding-right':'0'}}>
			<img src={forexcardimg} style={{'width':'100%','height':'25em'}}/>
			</Col>
			</Row>
			<Row style={styles.howitworks2}>
			<a href="/leadgen" style={{'text-decoration':'none','color':'black'}}><center><RaisedButton buttonStyle={styles.searchbut}>Start</RaisedButton></center></a>
			</Row>
			</Grid>
			</div>
		);

	}
});

var OverseasEducation = React.createClass({

	render: function() {

		const styles = {	

			row:
			{
				backgroundColor: 'lightgray'
			},

			howitworks1: 
			{
				'margin-top':'1.5em',
				backgroundColor:'white',
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
				'font-size':'1.5em',
				'padding-bottom':'1em',
				'padding-bottom':'1em',
				'color':'white',
				'padding-left': '4em',
				'padding-right': '4em',
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
			<Col md="6" style={{'font-size':'1.8em'}}>
			<Row style={styles.row}><center>Realize the dream to Study Abroad</center></Row>
			<br />
			<br />
			<Row>
			<ul>
			<Row>
			<Col md="6">
			<li>Admission Assistance</li>
			</Col>
			<Col md="6">
			<li>Financial Aid</li>
			</Col>
			</Row>
			</ul>
			<br />
			<br />
			<ul>
			<Row>
			<Col md="6">
			<li>Profile Analysis</li>
			</Col>
			<Col md="6">			
			<li>Visa Guidance</li>
			</Col>
			</Row>
			</ul>
			</Row>
			</Col>
			<Col md="6" style={{'padding-left':'0','padding-right':'0'}}>
			<img src={overseasimg} style={{'width':'100%','height':'25em'}}/>
			</Col>
			</Row>
			<Row style={styles.howitworks2}>
			<a href="/leadgen" style={{'text-decoration':'none','color':'black'}}><center><RaisedButton buttonStyle={styles.searchbut}>Start</RaisedButton></center></a>
			</Row>
			</Grid>
			</div>
		);

	}
});

var CareerCounselling = React.createClass({

	render: function() {

		const styles = {	

			row:
			{
				backgroundColor: 'lightgray'
			},

			howitworks1: 
			{
				'margin-top':'1.5em',
				backgroundColor:'white',
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
				'font-size':'1.5em',
				'padding-bottom':'1em',
				'padding-bottom':'1em',
				'color':'white',
				'padding-left': '4em',
				'padding-right': '4em',
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
			<Col md="6" style={{'font-size':'1.8em'}}>
			<Row style={styles.row}><center>Find the right career and take the next big leap</center></Row>
			<br />
			<br />
			<Row>
			<ul>
			<Row>
			<Col md="6">
			<li>Career Guidance</li>
			</Col>
			<Col md="6">
			<li>Skill Assessment</li>
			</Col>
			</Row>
			</ul>
			<br />
			<br />
			<ul>
			<Row>
			<Col md="6">
			<li>Career Tests</li>
			</Col>
			<Col md="6">			
			<li>Instant Expert Advice</li>
			</Col>
			</Row>
			</ul>
			</Row>
			</Col>
			<Col md="6" style={{'padding-left':'0','padding-right':'0'}}>
			<img src={careercounsellingimg} style={{'width':'100%','height':'25em'}}/>
			</Col>
			</Row>
			<Row style={styles.howitworks2}>
			<a href="/leadgen" style={{'text-decoration':'none','color':'black'}}><center><RaisedButton buttonStyle={styles.searchbut}>Start</RaisedButton></center></a>
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