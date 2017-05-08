import React from 'react';
import ReactDOM from 'react-dom';
import logoimage from '../images/logoimage.png';
import carouselimage from '../images/carousel.png';
import educationloan from '../images/education loan.png';
import studentinsurance from '../images/student insurance.png';
import healthcard from '../images/health card.png';
import elearning from '../images/e learning.png';
import admissionhotline from '../images/admission hotline.png';
import informative from '../images/informative.png';
import onlinetests from '../images/online test.png';
import aptitutetest from '../images/aptitude test.png';
import searchtutor from '../images/search tutor.png';
import bag from '../images/bag.png';
import books from '../images/books.png';
import bottles from '../images/bottles.png';
import sports from '../images/sports.png';
import toys from '../images/toys.png';
import stationary from '../images/stationary.png';
import uniform from '../images/uniforms.png';
import shoes from '../images/shoes.png';
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
import {RaisedButton, PasswordField, AutoComplete, TextField, Paper, AppBar, Drawer, MenuItem, IconButton, FlatButton, Toolbar, ToolbarGroup} from 'material-ui';
import {Grid,Row,Col,Image,Carousel,ButtonToolbar,Button, Modal, Tabs, Tab} from 'react-bootstrap';
import PayFeesDrawer from './PayFeesDrawer.js';
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
				<Row style={styles.row1}>
					<Col xs="12" md="12" style={styles.line}/>
				</Row>
				<Row style={styles.row1}>
					<Col xs="12" md="12" style={styles.shophead}>DAILY NEEDS</Col>
				</Row>
			    <Row style={styles.row}>
			      <Col xs={12} md={1} style={styles.leftpad}>
			      </Col>
			      <Col xs={12} md={1}>
			      <a href="/searchtutor" style={{'text-decoration':'none','color':'black'}}>
			      <Row>
			      <Image src={searchtutor} style={{'margin-left':'0.5em','margin-bottom':'0.5em'}} width="60%" height="60em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '10dp'}}>Search Tutor</span>
			      </Row>
			      </a>
			      </Col>
			      <Col xs={12} md={1}>
			      <a href="/aptitudetest" style={{'text-decoration':'none','color':'black'}}>
			      <Row>
			      <Image src={aptitutetest} style={{'margin-left':'0.5em','margin-bottom':'0.5em'}} width="60%" height="60em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '10dp'}}>Aptitude Test</span>
			      </Row>
			      </a>
			      </Col>
			      <Col xs={12} md={1}>
			      <a href="/onlinetest" style={{'text-decoration':'none','color':'black'}}>
			      <Row>
			      <Image style={{'margin-bottom':'0.5em'}} src={onlinetests} width="60%" height="60em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '10dp'}}>Online Test</span>
			      </Row>
			      </a>
			      </Col>
			      <Col xs={12} md={1}>
			      <a href="/informative" style={{'text-decoration':'none','color':'black'}}>
			      <Row>
			      <Image style={{'margin-bottom':'0.5em'}} src={informative} width="60%" height="60em" />
			      </Row>
			      <Row>
			      <span>Informative</span>
			      </Row>
			      </a>
			      </Col>
			      <Col xs={12} md={1}>
			      <a href="/admissionhotline" style={{'text-decoration':'none','color':'black'}}>
			      <Row>
			      <Image src={admissionhotline} style={{'margin-left':'1.5em','margin-bottom':'0.5em'}} width="60%" height="60em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '0.9em'}}>Admission Hotline</span>
			      </Row>
			      </a>
			      </Col>
			      <Col xs={12} md={1}  style={{'margin-left':'1.5em'}} >
   			      <a href="/elearning" style={{'text-decoration':'none','color':'black'}}>
			      <Row>
			      <Image style={{'margin-bottom':'0.5em'}} src={elearning} width="60%" height="60em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '0.9em', 'margin-left':'0.5em'}}>E learning</span>
			      </Row>
			      </a>
			      </Col>
			      <Col xs={12} md={1}>
			      <a href="/healthcard" style={{'text-decoration':'none','color':'black'}}>
			      <Row>
			      <Image style={{'margin-bottom':'0.5em'}} src={healthcard} width="60%" height="60em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '0.9em'}}>Health Card</span>
			      </Row>
			      </a>
			      </Col>  
			      <Col xs={12} md={1}>
			      <a href="/studentinsurance" style={{'text-decoration':'none','color':'black'}}>
			      <Row>
			      <Image src={studentinsurance} style={{'margin-left':'1.5em','margin-bottom':'0.5em'}} width="60%" height="60em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '0.9em'}}>Student Insurance</span>
			      </Row>
			      </a>
			      </Col>
			      <Col xs={12} md={1} style={{'margin-left':'1.5em'}} >
			      <a href="/educationloan" style={{'text-decoration':'none','color':'black'}}>
			      <Row>
			      <Image src={educationloan} style={{'margin-left':'0.5em','margin-bottom':'0.5em'}} width="60%" height="60em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '0.9em'}}>Education Loan</span>
			      </Row>
			      </a>
			      </Col>
			    </Row>
			 </Grid>
			</div>
		);
	}

});

var Playschool = React.createClass({

	getInitialState : function() {
		return { dataSource: [], controls: false};
	},

	handleUpdateInput : function(value) {
		this.setState({
			dataSource : [
				value
			],
		});
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
	
	 	const dataSource3 = [
	 	 {textKey: 'Some Text', valueKey: 'someFirstValue'},
	  	 {textKey: 'Some Text', valueKey: 'someSecondValue'},
		];

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
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Select Location" />
								</Row>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Select Play School" />
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
						          dataSource={dataSource3}
						          filter={AutoComplete.noFilter}
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

var School = React.createClass({

	getInitialState : function() {
		return { dataSource: [], controls: false};
	},

	handleUpdateInput : function(value) {
		this.setState({
			dataSource : [
				value
			],
		});
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
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Select Location" />
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
						          dataSource={this.state.dataSource}
						          onUpdateInput={this.handleUpdateInput}
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

var College = React.createClass({

	getInitialState : function() {
		return { dataSource: [], controls: false};
	},

	handleUpdateInput : function(value) {
		this.setState({
			dataSource : [
				value
			],
		});
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
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Select Location" />
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
						          dataSource={this.state.dataSource}
						          onUpdateInput={this.handleUpdateInput}
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
		return { dataSource: [], controls: false};
	},

	handleUpdateInput : function(value) {
		this.setState({
			dataSource : [
				value
			],
		});
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
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Select Location" />
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
						          dataSource={this.state.dataSource}
						          onUpdateInput={this.handleUpdateInput}
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
		return { dataSource: [], controls: false};
	},

	handleUpdateInput : function(value) {
		this.setState({
			dataSource : [
				value
			],
		});
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
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Select Location" />
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
						          dataSource={this.state.dataSource}
						          onUpdateInput={this.handleUpdateInput}
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
		return { dataSource: [], controls: false};
	},

	handleUpdateInput : function(value) {
		this.setState({
			dataSource : [
				value
			],
		});
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
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Select Location" />
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
						          dataSource={this.state.dataSource}
						          onUpdateInput={this.handleUpdateInput}
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
		return { dataSource: [], controls: false};
	},

	handleUpdateInput : function(value) {
		this.setState({
			dataSource : [
				value
			],
		});
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
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Select Location" />
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
						          dataSource={this.state.dataSource}
						          onUpdateInput={this.handleUpdateInput}
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
		return { dataSource: [], controls: false};
	},

	handleUpdateInput : function(value) {
		this.setState({
			dataSource : [
				value
			],
		});
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
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Select Location" />
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
						          dataSource={this.state.dataSource}
						          onUpdateInput={this.handleUpdateInput}
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


	changecontent: function(data)
	{
		this.props.changeactive(data);
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
			 <Grid bsClass="container-fluid">
			 <br />
			    <Row style={styles.row}>
			      <Col xs={12} md={1}>
			      </Col>
			      <Col xs={12} md={1}>
			      </Col>
			      <Col xs={12} md={1} style={{cursor:'pointer'}} onClick={() => this.changecontent(<Playschool />)} >
   			      <Row>
			      <Image style={{'margin-bottom':'0.5em'}} src={playschool} width="60%" height="60em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '10dp'}}>Play School</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1} style={{cursor:'pointer'}} onClick={() => this.changecontent(<School />)} >
   			      <Row>
			      <Image src={school} style={{'margin-bottom':'0.5em'}} width="60%" height="60em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '1em','margin-left':'0.6em'}}>School</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1} style={{cursor:'pointer'}} onClick={() => this.changecontent(<College />)} >
   			      <Row>
			      <Image src={college} style={{'margin-bottom':'0.5em'}} width="60%" height="60em" />
   			      </Row>
			      <Row>
			      <span style={{'font-size': '1em','margin-left':'0.5em'}}>College</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1} style={{cursor:'pointer'}} onClick={() => this.changecontent(<Coaching />)} >
   			      <Row>
			      <Image src={coaching} style={{'margin-bottom':'0.5em'}} width="60%" height="60em" />
   			      </Row>
			      <Row>
			      <span style={{'font-size': '1em','margin-left':'0.2em'}}>Coaching</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1} style={{cursor:'pointer'}} onClick={() => this.changecontent(<Tutor />)} >
   			      <Row>
			      <Image src={tutor} style={{'margin-bottom':'0.5em'}} width="60%" height="60em" />
   			      </Row>
			      <Row>
			      <span style={{'font-size': '1em','margin-left':'1em'}}>Tutor</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1} style={{cursor:'pointer'}} onClick={() => this.changecontent(<Admissions />)} >
   			      <Row>
			      <Image src={admissions} style={{'margin-bottom':'0.5em'}} width="60%" height="60em" />
   			      </Row>
			      <Row>
			      <span style={{'font-size': '1em','margin-left':'0.1em'}}>Admission</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1} style={{cursor:'pointer'}} onClick={() => this.changecontent(<Workshops />)} >
   			      <Row>
			      <Image src={workshops} style={{'margin-bottom':'0.5em'}} width="60%" height="60em" />
   			      </Row>
			      <Row>
			      <span style={{'font-size': '10dp'}}>Workshops</span>
			      </Row>
			      </Col>  
			      <Col xs={12} md={2} style={{cursor:'pointer'}} onClick={() => this.changecontent(<Skills />)} >
   			      <Row>
			      <Image src={skills} style={{'margin-bottom':'0.5em','margin-left':'1.7em'}} width="30%" height="60em" />
   			      </Row>
			      <Row>
			      <span style={{'font-size': '1em','margin-right':'2em'}}>Skills & Employability</span>
			      </Row>
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

var homepage = React.createClass({

	render: function() {

		var mydata={};
		var data1=null;

		function do_the_stuff(data)
		{
			data1=data;
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

		alert(JSON.stringify(data1));

		return (
			<div>
			    <PayFeesDrawer />
				<FormGet/>
				<DailyNeeds />
				<Discount />
			</div>
		);
	}

});

module.exports = homepage;